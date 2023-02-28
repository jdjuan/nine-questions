import { NextPage } from "next";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface Props {
  handleClick?: () => any;
  children?: ReactNode;
  url?: string;
  target?: HTMLAttributeAnchorTarget;
}

const Button: NextPage<Props> = ({ handleClick, children, url, target }) => {
  return (
    <>
      {url && (
        <Link
          className='rounded-md bg-yellow py-2 px-4 text-center text-xl text-green-900 shadow-md transition-all ease-in-out hover:scale-110'
          href={url}
          target={target}
        >
          {children}
        </Link>
      )}
      {handleClick && (
        <button
          onClick={handleClick}
          className='w-full rounded-md bg-yellow py-2 px-4 text-xl text-green-900 shadow-md transition-all ease-in-out hover:scale-110 active:scale-110'
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
