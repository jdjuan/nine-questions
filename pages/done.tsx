import { questionSet } from "@/content/questions";
import MainLayout from "@/components/main-layout";
import { ReactElement, use, useEffect, useState } from "react";
import Image from "next/image";
import { useCopyToClipboard, useReadLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import Button from "@/components/button";
import AnimatedLayout from "@/components/animated-layout";
import { isDev } from "@/utils/utils";

const TOTAL_QUESTIONS = 9;

const Done = () => {
  const [value, copy] = useCopyToClipboard();
  const router = useRouter();
  const [copyLinkText, setCopyLinkText] = useState("COPY LINK");
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
  useEffect(() => {
    if (answers[0] === null && !isDev) {
      router.push("/");
    }
  }, []);
  const correctAnswerCount = answers.filter((isCorrect) => isCorrect).length;
  const scoreValue = (correctAnswerCount / TOTAL_QUESTIONS) * 100;
  const [score, setScore] = useState<string>();
  const [perfectScore, setPerfectScore] = useState<boolean>();
  useEffect(() => {
    setScore(`${scoreValue.toFixed(0)}%`);
    setPerfectScore(scoreValue === 100);
  }, [scoreValue]);

  return (
    <AnimatedLayout>
      <div className='m-8 grid gap-10 sm:m-12 md:mx-auto md:max-w-2xl'>
        <div className='grid place-items-center gap-8 text-center text-green-200'>
          <h2 className='mb-2 font-headline text-5xl font-bold'>Your Score</h2>
          <div className='grid aspect-square w-6/12 max-w-[10rem] animate-wiggle place-items-center rounded-full border-8 border-yellow'>
            <span className='text-5xl font-bold text-yellow'>{score}</span>
          </div>
          <div>
            <p className='mb-2 font-light'>{perfectScore ? "Well done!" : "By the way:"}</p>
            <p className='px-8 font-semibold'>
              {perfectScore ? "As you noticed, a" : "A"}ll the inventions we showed you were made by women.
            </p>
          </div>
        </div>
        <div className='grid gap-4 md:max-w-prose'>
          {!perfectScore && (
            <>
              <p>
                If you picked men that looked like the stereotypical inventor,{" "}
                <span className='text-green-200'>you shouldn&apos;t feel guilty.</span> The vast majority of inventions
                are made by men.
              </p>
              <p>
                But why is it so? Are men simply more <span className='text-green-200'>prone to innovation?</span> Or
                are women <span className='text-green-200'>culturally discouraged</span> from it? Or both? Or none?
              </p>
            </>
          )}
          {perfectScore && (
            <p>
              In reality, the vast majority of inventions are made by men. But why is it so? Are men simply more{" "}
              <span className='text-green-200'>prone to innovation?</span> Or are women{" "}
              <span className='text-green-200'>culturally discouraged</span> from it? Or both? Or none?
            </p>
          )}
          <p>
            The answer is not obvious. Reality is, I&apos;d had never imagined it was a woman who invented the{" "}
            <span className='text-green-200'>circular saw</span> or the{" "}
            <span className='text-green-200'>car heater</span>. Carpentry or driving cars was mostly a thing for men
            (and in some places still is).
          </p>
          <p>
            But that was precisely the <span className='text-green-200'>purpose</span> of this project. To{" "}
            <span className='text-green-200'>challenge our biases around gender roles</span> in society by highlighting
            pioneering women who are often overlooked in the public discourse.
          </p>
          <p>Thanks for taking part!</p>
        </div>

        <div className='mx-auto grid max-w-md rounded-xl border-2 p-5 pt-1 text-center text-sm md:px-6'>
          <p className='p-2 md:px-8'>
            Do you know someone who needs a reminder of the potential women have?
            <br />
            <br />
            <span className='text-green-200'>Share this link with them:</span>
          </p>
          <div className='mx-auto grid w-11/12'>
            <Button
              handleClick={() => {
                setCopyLinkText("COPIED!");
                copy("https://nine-questions.jdjuan.io");
              }}
            >
              {copyLinkText}
            </Button>
          </div>
        </div>
        <div className='grid gap-4'>
          <h2 className='font-headline text-2xl text-green-200'>Who are these women?</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {questionSet.map(({ id, invention, inventor, inventorImageUrl, year, note }) => (
              <div key={id} className='rounded-lg  bg-green-900 p-4 text-green-200'>
                <div className='flex'>
                  <Image
                    src={inventorImageUrl}
                    alt={`Photo of ${inventor}`}
                    priority
                    className='h-fit w-20 rounded-md border-green-200'
                  />
                  <div className='pl-4'>
                    <div>
                      <span className='text-xl capitalize'>{inventor}</span>
                    </div>
                    <div className='font-light opacity-80'>
                      <span className='capitalize'>{invention}</span>
                    </div>
                    <div className='text-sm font-light opacity-80'>
                      Year: <span className=''>{year}</span>
                    </div>
                  </div>
                </div>
                <div className='mt-4 rounded-md bg-green-700 p-2 text-xs opacity-70'>{note}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='grid gap-3'>
          <h2 className='font-headline text-2xl text-green-200'>Who am I?</h2>
          <p>
            My name is Juan Herrera, and I&apos;m currently building a project a month.{" "}
            <span className='font-semibold text-green-200'>
              {" "}
              <br /> Nine Questions
            </span>{" "}
            was the project I built in February.
          </p>
          <p>
            If you are curious about what March or April will look like, you can{" "}
            <a className='text-green-200 underline' href='mailto:david.juanherrera@gmail.com'>
              introduce yourself
            </a>{" "}
            or simply check my{" "}
            <a className='text-green-200 underline' href='https://jdjuan.io/' target='_blank' rel='noreferrer'>
              personal website
            </a>{" "}
            in a few weeks.
          </p>
        </div>
        <div className='mx-auto w-5/12 border border-green-400'></div>
        <div className='grid gap-4'>
          <Button
            url='https://twitter.com/intent/tweet?text=Nine%20questions%20that%20will%20challenge%20your%20biases%3A%20https%3A%2F%2Fnine-questions.jdjuan.io%2F'
            target={"_blank"}
          >
            SHARE ON TWITTER
          </Button>
          <Button url='/'>START AGAIN</Button>
        </div>
      </div>
    </AnimatedLayout>
  );
};

Done.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Done;
