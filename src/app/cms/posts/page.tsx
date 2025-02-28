/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  formatItem,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@organisms/table";
import CmsTableHeader from "@organisms/cms-table-header";
import { getPosts } from "./action";

const PostsPage = async () => {
  const posts = await getPosts();
  const heads =
    posts.length > 0
      ? Object.keys(posts[0]).filter((value) =>
          ["title", "content", "createdAt", "metadata", "coverImage"].includes(
            value
          )
        )
      : [];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <CmsTableHeader title="Post" newUrl="/cms/posts/new" />
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <Table>
              <TableCaption>
                list of all the Posts in your account.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  {heads.map((head) => (
                    <TableHead key={head}>{head}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {posts.map((item: Record<string, any>, index) => (
                  <TableRow key={`line_${index}`}>
                    {heads.map((head) => (
                      <TableCell key={`line_${index}_item_${head}`}>
                        {formatItem(item[head], head)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostsPage;
