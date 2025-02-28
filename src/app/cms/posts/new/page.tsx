import { Button } from "@atoms/button";
import InputLabel from "@molecules/input-label";
import MarkdownEditor from "@organisms/mardown-editor";
import { createTag } from "./action";
import ImageInput from "@atoms/image-input";

const NewPost = () => {
  const createActionTag = async (formData: FormData) => {
    "use server";
    createTag(formData);
  };

  return (
    <div className="text-gray-950 mx-auto w-full px-4 py-4 sm:px-6 sm:py-3 lg:px-8">
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 pb-12 md:grid-cols-6">
          <div>
            <h2 className="text-base/7 font-semibold text-gray-950">Post</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Add Post</p>
          </div>
          <form
            className="bg-white ring-1 shadow-xs ring-gray-900/5 px-4 py-6 sm:p-8 sm:rounded-xl grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-5"
            action={createActionTag}
          >
            <div className="sm:col-span-4">
              <InputLabel
                id="title"
                name="title"
                type="text"
                placeholder="My awsome title"
                label="title"
              />
            </div>
            <div className="col-span-full mb-2">
              <ImageInput label="cover image" />
            </div>
            <div className="sm:col-span-3">
              <InputLabel
                id="metaTitle"
                name="metaTitle"
                type="text"
                placeholder="SUPABASE | My awsome title"
                label="meta-title"
              />
            </div>
            <div className="sm:col-span-3">
              <InputLabel
                id="metaDescription"
                name="metaDescription"
                type="text"
                placeholder=""
                label="meta-description"
              />
            </div>
            <div className="sm:col-span-3">
              <InputLabel
                id="slug"
                name="slug"
                type="text"
                placeholder="my-awsome-title"
                label="slug"
              />
            </div>
            <div className="sm:col-span-3">
              <InputLabel
                id="excerpt"
                name="excerpt"
                type="text"
                placeholder=""
                label="excerpt"
              />
            </div>
            <div className="col-span-full">
              <MarkdownEditor />
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
export default NewPost;
