import ButtonLink from "@/atoms/button-link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { getPostsCount, postsPerPage } from "../../app/blog/action";

export async function Pagination({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  function url(page: number) {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page > 1) params.set("page", page.toString());

    return params.size !== 0 ? `/blog?${params.toString()}` : "/blog";
  }

  const totalPosts = await getPostsCount(category);
  const hasPreviousPage = page - 1;
  const previousPageUrl = hasPreviousPage ? url(page - 1) : undefined;
  const hasNextPage = page * postsPerPage < totalPosts;
  const nextPageUrl = hasNextPage ? url(page + 1) : undefined;
  const pageCount = Math.ceil(totalPosts / postsPerPage);

  if (pageCount < 2) {
    return;
  }

  return (
    <div className="mt-6 flex items-center justify-between gap-2">
      <ButtonLink
        variant="outline"
        href={previousPageUrl ?? "/blog"}
        disabled={!previousPageUrl}
      >
        <ChevronLeftIcon className="size-4" />
        Previous
      </ButtonLink>
      <div className="flex gap-2 max-sm:hidden">
        {Array.from({ length: pageCount }, (_, i) => (
          <Link
            key={i + 1}
            href={url(i + 1)}
            data-active={i + 1 === page ? true : undefined}
            className={clsx(
              "size-7 rounded-lg text-center text-sm/7 font-medium",
              "data-hover:bg-gray-100",
              "data-active:ring-1 data-active:shadow-sm data-active:ring-black/10",
              "data-active:data-hover:bg-gray-50"
            )}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <ButtonLink
        variant="outline"
        href={nextPageUrl ?? ""}
        disabled={!nextPageUrl}
      >
        Next
        <ChevronRightIcon className="size-4" />
      </ButtonLink>
    </div>
  );
}
