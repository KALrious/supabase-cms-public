import { Input } from "@atoms/input";
import { Label } from "@atoms/label";

const InputLabel = ({
  label,
  name,
  id,
  type,
  placeholder,
}: {
  name: string;
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) => (
  <div>
    <Label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
      {label}
    </Label>
    <div className="mt-2">
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>
);
export default InputLabel;
