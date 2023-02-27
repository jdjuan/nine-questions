import { questionSet } from "@/content/questions";
import { useRouter } from "next/router";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { Answer } from "@/models/answer.model";
import { AnswerRequest } from "@/models/answer.request";
import { Question } from "@/models/question.model";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import MainLayout from "@/components/main-layout";
import cx from "classnames";
import { NextPageWithLayout } from "@/pages/_app";
import AnimatedLayout from "@/components/animated-layout";
import { useTimeout } from "usehooks-ts";
import { isDev } from "@/utils/utils";

const QuestionComponent: NextPageWithLayout = () => {
  const router = useRouter();
  const { questionId } = router.query;
  const [, setAnswer] = useLocalStorage(`answer${questionId}`, true);
  const [question, setQuestion] = useState<Question>();
  useTimeout(() => {
    const questionFound = questionSet.find(({ id }) => id === questionId) || questionSet[0];
    setQuestion(questionFound);
  }, 0);

  useEffect(() => {
    const question = questionSet.find(({ id }) => id === questionId) || questionSet[0];
    setQuestion(question);
  }, [questionId]);

  const storeAnswer = (selectedAnswer: Answer) => {
    if (!isDev && question) {
      const body: AnswerRequest = {
        questionId: question.id,
        answerId: selectedAnswer.id,
        isCorrect: selectedAnswer.isCorrect,
      };
      axios.post("/api/answer", body);
    }
  };

  const goToNextQuestion = (selectedAnswer: Answer) => {
    if (question) {
      const modifiedAnswers = question.answers.map((answer) => {
        return { ...answer, selected: answer.id === selectedAnswer.id };
      });
      storeAnswer(selectedAnswer);
      setQuestion({ ...question, answers: modifiedAnswers });
      setAnswer(selectedAnswer.isCorrect);
      setTimeout(() => {
        const route = question.id === "9" ? "/done" : `/question/${+question.id + 1}`;
        router.push(route, undefined, { scroll: false });
      }, 650);
    }
  };

  return (
    <AnimatedLayout>
      {question && (
        <div className='text-center'>
          <h2 className='bg-yellow p-5 font-headline text-3xl font-semibold text-green-900'>
            {question.id !== "9" ? `QUESTION #${question.id}` : "Last Question!"}
            <div className='font-normal'>
              {question.id === "3" && <p className='mt-2 text-sm'>(6 questions left!)</p>}
              {question.id === "6" && <p className='mt-2 text-sm'>(3 questions left!)</p>}
            </div>
          </h2>
          <div className='grid'>
            <div className='mt-8 grid place-items-center gap-8 px-8 md:gap-4'>
              <h3 className='text-lg'>
                Who invented the{" "}
                <span className='text-green-200 underline underline-offset-2'>{question?.invention}</span>?
              </h3>
              <Image
                src={question?.inventionImageUrl}
                alt='Invention Picture'
                priority
                placeholder='blur'
                className='w-10/12 max-w-[12rem] rounded-md border-2 border-green-200'
              />
            </div>
            <div>
              <p className='mt-10 mb-2 px-16'>Pick the person who most likely invented this:</p>
              <div className='lg mx-auto grid w-11/12 max-w-3xl grid-cols-2 place-items-center gap-4 p-4 md:grid-cols-4 md:gap-0'>
                {question.answers.map((answer, index) => (
                  <Image
                    key={answer.inventorImageUrl.src}
                    src={answer.inventorImageUrl}
                    alt={`Inventor ${index}`}
                    priority
                    placeholder='blur'
                    onClick={() => goToNextQuestion(answer)}
                    className={cx(
                      "max-w-[8rem] cursor-pointer rounded-md border-4 border-green-200 shadow-md transition-all ease-in-out hover:scale-110",
                      {
                        "opacity-0 duration-700": answer.selected === false,
                        "scale-110 duration-700": answer.selected === true,
                      }
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatedLayout>
  );
};

QuestionComponent.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default QuestionComponent;
