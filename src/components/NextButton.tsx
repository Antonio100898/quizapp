import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};
const NextButton: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <button
      className={
        disabled
          ? "border border-black border-2 py-1 px-2 rounded-lg bg-gray-400"
          : "border border-black border-2 py-1 px-2 hover:border-slate-500 hover:text-slate-500 cursor-pointer rounded-lg bg-gray-200"
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default NextButton;
