import { NextPage } from "next";
import { ReactNode } from "react";

interface Props {
  handleClick: () => any;
  children?: ReactNode;
}

const Button: NextPage<Props> = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick} className='rounded-md bg-yellow py-2 px-4 text-xl text-green-900 shadow-md'>
      {children}
    </button>
  );
};

export default Button;
