import { notFound } from "next/navigation";
import { format } from "date-fns";
import Avatar from "@/atoms/avatar";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { getPosts } from "../../app/blog/action";

export async function Posts({
  page,
  category,
}: {
  page: number;
  category?: string;
}) {
  const posts = await getPosts({ page, category });

  if (posts.length === 0 && (page > 1 || category)) {
    notFound();
  }

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <div className="mt-6">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
        >
          <div>
            <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
              {format(post.createdAt, "dd, MMMM, yyyy")}
            </div>
            {post.author && (
              <div className="mt-2.5 flex items-center gap-3">
                {post.author.profile_image_url && (
                  <Avatar
                    alt={post.author.first_name}
                    src={post.author.profile_image_url}
                  />
                )}
                <div className="text-sm/5 text-gray-700">
                  {post.author.first_name}
                </div>
              </div>
            )}
          </div>
          <div className="sm:col-span-2 sm:max-w-2xl">
            <h2 className="text-sm/5 font-medium">{post.title}</h2>
            <p className="mt-3 text-sm/6 text-gray-500">{post.excerpt}</p>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center gap-1 text-sm/5 font-medium"
              >
                <span className="absolute inset-0" />
                Read more
                <ChevronRightIcon className="size-4 fill-gray-400" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
