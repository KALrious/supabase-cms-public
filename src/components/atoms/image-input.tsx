/* eslint-disable @next/next/no-img-element */
"use client";
import { PhotoIcon } from "@heroicons/react/16/solid";
import { ChangeEvent, useRef, useState } from "react";

interface CustomImageElement extends HTMLImageElement {
  file: File;
}

const ImageInput = ({ label }: { label: string }) => {
  const [hasImage, setHasImage] = useState<boolean>();
  const [imagePreview, setImagePreview] = useState<string>("");
  const uploadedImage = useRef<CustomImageElement>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    console.log("e?.target?.result");

    if (!files) {
      return;
    }

    const [file] = files;
    console.log("file", file);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      if (!current) return;
      current.file = file;
      reader.onload = (e) => {
        current.src = e?.target?.result as string;
        setImagePreview(e?.target?.result as string);
        setHasImage(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <label
        htmlFor="cover-photo"
        className="block text-sm/6 font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        {!hasImage && (
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <div className="mt-4 flex text-sm/6 text-gray-600">
              <span>Upload a file</span>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        )}

        <div
          className={`relative w-[477px] h-[300px] rounded-lg overflow-hidden ${
            hasImage ? "" : "hidden"
          }`}
        >
          <img
            ref={uploadedImage}
            className="w-full h-full absolute object-cover layout-fill"
            alt="profile picture"
            src={imagePreview ?? ""}
          />
        </div>
      </div>

      <div className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-fit mx-auto mt-4">
        <label
          htmlFor="file-upload"
          className="relative cursor-pointer rounded-md bg-white font-semibold text-black focus-within:outline-none focus-within:ring-2 "
        >
          <span>Upload a file</span>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleImageUpload}
          />
        </label>
      </div>
    </>
  );
};
export default ImageInput;
