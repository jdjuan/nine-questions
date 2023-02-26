import { questionSet } from "@/content/questions";
import MainLayout from "@/pages/main-layout";
import { ReactElement, use, useEffect, useState } from "react";
import Image from "next/image";
import { useReadLocalStorage } from "usehooks-ts";

const TOTAL_QUESTIONS = 9;

const Done = () => {
  const answers = [
    useReadLocalStorage("answer1"),
    useReadLocalStorage("answer2"),
    useReadLocalStorage("answer3"),
    useReadLocalStorage("answer4"),
    useReadLocalStorage("answer5"),
    useReadLocalStorage("answer6"),
    useReadLocalStorage("answer7"),
    useReadLocalStorage("answer8"),
    useReadLocalStorage("answer9"),
  ];
  const correctAnswerCount = answers.filter((isCorrect) => isCorrect).length;
  const scoreValue = (correctAnswerCount / TOTAL_QUESTIONS) * 100;
  const [score, setScore] = useState<string>();
  const [perfectScore, setPerfectScore] = useState<boolean>();
  useEffect(() => {
    setScore(`${scoreValue.toFixed(0)}%`);
    setPerfectScore(scoreValue === 100);
  }, [scoreValue]);

  return (
    <div className='grid gap-10'>
      <div className='grid place-items-center gap-8 text-center'>
        <h2 className='mb-2 text-5xl'>Your Score</h2>
        <div className='grid aspect-square w-6/12 place-items-center rounded-full border-4 border-slate-800'>
          <span className='text-5xl'>{score}</span>
        </div>
        <div>
          <p className='mb-2'>{perfectScore ? "Well done!" : "By the way:"}</p>
          <p className='font-semibold'>
            {perfectScore ? "As you noticed, a" : "A"}ll the inventions we showed you were made by women.
          </p>
        </div>
      </div>
      <div className='grid gap-4'>
        {!perfectScore && (
          <p>
            If you mostly picked men that looked like the stereotypical inventor, you shouldn&apos;t feel guilty.
            I&apos;d had never imagined that it was a woman who invented the circular saw or the car heater. Carpentry
            or driving cars was mostly a thing for men (and in some places still is).
          </p>
        )}
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
      <div className='grid gap-4'>
        <h2 className='text-2xl'>Who are these women?</h2>
        {questionSet.map(({ id, invention, inventor, inventorImageUrl, year, note }) => (
          <div key={id} className='flex rounded-lg bg-slate-300 p-4'>
            <Image
              src={inventorImageUrl}
              alt={`Photo of ${inventor}`}
              priority
              className='h-fit w-20 rounded-md border border-slate-900'
            />
            <div className='pl-2'>
              <div>
                <span className='text-lg font-medium capitalize'>
                  {inventor}
                  {/* {invention} ({year}) */}
                </span>
              </div>
              <div className='text-sm'>
                <span className='capitalize'>
                  {invention} ({year})
                </span>
              </div>
              {/* <div className='text-sm'>
                Year: <span className='font-semibold'>{year}</span>
              </div> */}
              {/* <div className='text-sm'>
                Invented the <span className='font-bold'>{invention}</span> in {year}.
              </div> */}
              {/* <div className='mt-2 text-xs'>{note}</div> */}
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
