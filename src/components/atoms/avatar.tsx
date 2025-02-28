import Image from "next/image";

const Avatar = ({ alt, src }: { alt: string; src: string }) => {
  return (
    <Image
      height={24}
      width={24}
      alt={alt}
      src={src}
      className="aspect-square size-6 rounded-full object-cover"
    />
  );
};
export default Avatar;
