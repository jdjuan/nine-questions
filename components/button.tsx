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
          className='rounded-md bg-yellow py-2 px-4 text-center text-xl text-green-900 shadow-md'
          href={url}
          target={target}
        >
          {children}
        </Link>
      )}
      {handleClick && (
        <button onClick={handleClick} className='rounded-md bg-yellow py-2 px-4 text-xl text-green-900 shadow-md'>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;