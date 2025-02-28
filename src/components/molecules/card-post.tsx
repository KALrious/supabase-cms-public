import Image from "next/image";
import Link from "next/link";
import { FeaturedPost } from "../../app/blog/action";
import Avatar from "@atoms/avatar";
import { format } from "date-fns";

const CardPost = ({
  coverImage,
  title,
  createdAt,
  slug,
  excerpt,
  author,
}: FeaturedPost) => {
  return (
    <div className="relative flex flex-col rounded-3xl bg-white p-2 ring-1 shadow-md shadow-black/5 ring-black/5">
      {coverImage && (
        <div className="aspect-3/2 w-full rounded-2xl object-cover overflow-hidden relative">
          <Image
            alt={coverImage.alt || ""}
            src={coverImage.fileUrl}
            layout="fill"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-8">
        <div className="text-sm/5 text-gray-700">
          {format(createdAt, "dd, MMMM, yyyy")}
        </div>
        <div className="mt-2 text-base/7 font-medium">
          <Link href={`/blog/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </div>
        <div className="mt-2 flex-1 text-sm/6 text-gray-500 max-w-">
          {excerpt}
        </div>
        {author && (
          <div className="mt-6 flex items-center gap-3">
            {author.profile_image_url && (
              <Avatar alt={author.first_name} src={author.profile_image_url} />
            )}
            <div className="text-sm/5 text-gray-700">{author.first_name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPost;
