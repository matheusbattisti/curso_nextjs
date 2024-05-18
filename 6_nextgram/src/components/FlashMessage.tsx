import React, { useEffect, useState } from "react";

interface FlashMessageProps {
  message: string;
  type: string;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-md ${
        type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
      }`}
    >
      {message}
    </div>
  );
};

export default FlashMessage;
