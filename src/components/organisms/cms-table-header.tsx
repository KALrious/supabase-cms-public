import ButtonLink from "@atoms/button-link";

const CmsTableHeader = ({
  title,
  newUrl,
}: {
  title: string;
  newUrl: string;
}) => (
  <div className="sm:flex sm:items-center">
    <div className="sm:flex-auto">
      <h1 className="text-base font-semibold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm text-gray-700">
        A list of all the {title} in your account.
      </p>
    </div>
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <ButtonLink href={newUrl}>Add {title}</ButtonLink>
    </div>
  </div>
);
export default CmsTableHeader;
