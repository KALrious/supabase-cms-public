/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  formatItem,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@organisms/table";
import { Table } from "lucide-react";

const CmsTable = ({
  title,
  items,
}: {
  title: string;
  items: Record<string, any>[];
}) => {
  const heads = Object.keys(items[0]);
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Table>
            <TableCaption>
              list of all the {title} in your account.
            </TableCaption>
            <TableHeader>
              <TableRow>
                {heads.map((head) => (
                  <TableHead key={head}>{head}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item: Record<string, any>, index) => (
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
  );
};
export default CmsTable;
