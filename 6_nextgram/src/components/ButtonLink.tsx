import Link from "next/link";

type ButtonProps = {
  text: string;
  url: string;
};

const ButtonLink: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link
      href={url}
      className="w-fit h-8 bg-blue-800 hover:bg-blue-700 text-sm font-medium text-white py-1 px-6 rounded flex items-center"
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
