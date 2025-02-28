import { Button } from "@atoms/button";
import ImageInput from "@atoms/image-input";
import InputLabel from "@molecules/input-label";
import { createUser } from "./action";

const NewUser = () => {
  return (
    <div className="text-gray-950 mx-auto w-full px-4 py-4 sm:px-6 sm:py-3 lg:px-8">
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 pb-12 md:grid-cols-6">
          <div>
            <h2 className="text-base/7 font-semibold text-gray-950">User</h2>
            <p className="mt-1 text-sm/6 text-gray-600">Add User</p>
          </div>
          <form
            className="bg-white ring-1 shadow-xs ring-gray-900/5 px-4 py-6 sm:p-8 sm:rounded-xl grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-5"
            action={(formData) => createUser(formData)}
          >
            <div className="sm:col-span-4">
              <div className="col-span-full mb-2">
                <ImageInput label="Photo de profil" />
              </div>
              <InputLabel
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                label="firstName"
              />
            </div>
            <div className="col-span-full">
              <InputLabel
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                label="lastName"
              />
            </div>
            <div className="col-span-full">
              <InputLabel
                id="email"
                name="email"
                type="email"
                placeholder="John@Doe.com"
                label="email"
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
export default NewUser;
