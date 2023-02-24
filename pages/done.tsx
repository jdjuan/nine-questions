import { questionSet } from "@/content/questions";
import MainLayout from "@/pages/main-layout";
import { ReactElement } from "react";
import Image from "next/image";

const Done = () => {
  return (
    <div className='grid gap-10'>
      <div className='grid place-items-center gap-8 text-center'>
        <h2 className='mb-2 text-5xl'>Your Score</h2>
        <div className='grid aspect-square w-6/12 place-items-center rounded-full border-4 border-slate-800'>
          <span className='text-5xl'>43%</span>
        </div>
        <div>
          <p className='mb-2'>By the way:</p>
          <p className='font-semibold'>All the inventions we showed you were made by women.</p>
        </div>
      </div>
      <div className='grid gap-4'>
        {/* <p className='mb-4'>I&apos;ve got something to admit:</p> */}
        <p>
          If you mostly picked men that looked like the stereotypical inventor, you shouldn&apos;t feel guilty. I&apos;d
          had never imagined that it was a woman who invented the circular saw or the car heater. Carpentry or driving
          cars was mostly a thing for men (and in some places still is).
        </p>
        <p>
          Indeed the vast majority of inventions are made by men. But why is it so? Are men simply more prone to
          innovate? Or are women culturally discouraged from pursuing innovation? Or both? Or none?
        </p>
        <p>
          The answer is not obvious. But that was precisely the purpose of this project. To challenge our biases around
          gender roles in society by highlighting pioneering women who are often overlooked in the public discourse.
        </p>
        <p>Thanks for taking part!</p>
        {/* <button className='mt-3 mb-2 rounded-md bg-slate-300 py-1 px-3 text-lg shadow-md'>SHARE</button> */}
        {/* <div className='grid place-items-center'>
          <div className='rounded-md border border-slate-900 p-2 text-center text-sm font-light'>
            Share this with someone who could use the reminder that women also had their fair share of inventions.
            <br />
          </div>
        </div> */}
      </div>
      <div className='grid gap-6'>
        <h2 className='text-2xl'>Who are these women?</h2>
        {questionSet.map(({ id, invention, inventor, inventorImageUrl, year, note }) => (
          <div key={id} className='flex'>
            <Image
              src={inventorImageUrl}
              alt={`Photo of ${inventor}`}
              priority
              className='h-fit w-20 rounded-md border border-slate-900'
            />
            <div className='pl-2'>
              <div>
                <span className='font-semibold capitalize'>
                  {invention} ({year})
                </span>
              </div>
              <div className='text-xs'>{note}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='grid gap-3'>
        <h2 className='text-2xl'>Who am I?</h2>
        <p>
          My name is Juan Herrera, and I&apos;m currently building a project a month.{" "}
          <span className='font-bold'>Nine Questions</span> was the project for February.
        </p>
        <p>
          If you are curious about what March or April will look like, you can{" "}
          <a className='underline dark:text-slate-200' href='mailto:david.juanherrera@gmail.com'>
            introduce yourself
          </a>{" "}
          in an email to get updates, or simply check my personal website in a few weeks.
        </p>
      </div>
    </div>
  );
};

Done.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Done;
