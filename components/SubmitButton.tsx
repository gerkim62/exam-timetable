"use client";

import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const SubmitButton = ({ children, ...props }: Props) => {
  const { pending } = useFormStatus();

  return (
    <div className="">
      <button {...props} disabled={pending}>
        {children}
      </button>
      {pending && <LoadingOverlay />}
    </div>
  );
};

const LoadingOverlay = ({}) => {
  return (
    <div className="absolute inset-0 bg-gradient-to-br  from-purple-400 to-pink-600 text-white opacity-80 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-gray-200 h-16 w-16" />
        <p className="text-gray-200 mt-4">{"Just a sec..."}</p>
      </div>
    </div>
  );
};

export default SubmitButton;
