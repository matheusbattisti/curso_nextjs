import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  danger?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, danger = false, ...props }) => {
  return (
    <button
      data-danger={danger}
      className="h-8 text-sm font-medium text-white py-1 px-6 rounded flex items-center bg-blue-800 hover:bg-blue-700 data-[danger=true]:bg-red-500 data-[danger=true]:hover:bg-red-400"
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
