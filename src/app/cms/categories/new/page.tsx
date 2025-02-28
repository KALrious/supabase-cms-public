import { Button } from "@atoms/button";
import InputLabel from "@molecules/input-label";
import { createCategory } from "./action";

const NewCategory = () => {
  return (
    <div className="text-gray-950 mx-auto w-full px-4 py-4 sm:px-6 sm:py-3 lg:px-8">
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 pb-12 md:grid-cols-6">
          <div>
            <h2 className="text-base/7 font-semibold text-gray-950">
              Category
            </h2>
            <p className="mt-1 text-sm/6 text-gray-600">Add Category</p>
          </div>
          <form
            className="bg-white ring-1 shadow-xs ring-gray-900/5 px-4 py-6 sm:p-8 sm:rounded-xl grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-5"
            action={createCategory}
          >
            <div className="sm:col-span-4">
              <InputLabel
                id="name"
                name="name"
                type="text"
                placeholder="Supabase"
                label="name"
              />
            </div>
            <div className="col-span-full">
              <InputLabel
                id="slug"
                name="slug"
                type="slug"
                placeholder=""
                label="slug"
              />
            </div>
            <div className="col-span-full">
              <InputLabel
                id="description"
                name="description"
                type="text"
                placeholder=""
                label="description"
              />
            </div>
            <div className="col-span-full flex justify-end">
              <Button type="submit" size="lg">
                Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewCategory;
