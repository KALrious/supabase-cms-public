import Avatar from "@atoms/avatar";
import { GetPost } from "../../app/blog/[slug]/action";
import Link from "next/link";
import Image from "next/image";
import ButtonLink from "@atoms/button-link";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import MarkdownViewer from "@atoms/mardown-viewer";

const Post = ({ post }: { post: GetPost }) => {
  return (
    <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
      <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
        {post.author && (
          <div className="flex items-center gap-3">
            {post.author.profile_image_url && (
              <Avatar
                alt={post.author.first_name}
                src={post.author.profile_image_url}
              />
            )}
            <div className="text-sm/5 text-gray-700">
              {post.author.first_name} {post.author.last_name}
            </div>
          </div>
        )}
        {Array.isArray(post.categories) && (
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog?category=${category.slug}`}
                className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="text-gray-700">
        <div className="max-w-2xl xl:mx-auto">
          {post.coverImage && (
            <div className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl relative overflow-hidden">
              <Image
                alt={post.coverImage.alt || ""}
                src={post.coverImage.fileUrl}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )}
          {post.content && <MarkdownViewer source={post.content} />}
          <div className="mt-10">
            <ButtonLink variant="outline" href="/blog">
              <ChevronLeftIcon className="size-4" />
              Back to blog
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
