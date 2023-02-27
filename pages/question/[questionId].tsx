import { questionSet } from "@/content/questions";
import { useRouter } from "next/router";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { Answer } from "@/models/answer.model";
import { AnswerRequest } from "@/models/answer.request";
import { Question } from "@/models/question.model";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import MainLayout from "@/pages/main-layout";
import cx from "classnames";

const QuestionComponent = () => {
  const router = useRouter();
  const { questionId } = router.query;
  const [, setAnswer] = useLocalStorage(`answer${questionId}`, true);
  const [question, setQuestion] = useState<Question>(questionSet[0]);

  useEffect(() => {
    const question = questionSet.find(({ id }) => id === questionId) || questionSet[0];
    setQuestion(question);
  }, [questionId]);

  const goToNextQuestion = (selectedAnswer: Answer) => {
    const modifiedAnswers = question.answers.map((answer) => {
      if (answer.id === selectedAnswer.id) {
        return answer;
      }
      return { ...answer, selected: false };
    });
    setQuestion({ ...question, answers: modifiedAnswers });
    setAnswer(selectedAnswer.isCorrect);
    const body: AnswerRequest = {
      questionId: question.id,
      answerId: selectedAnswer.id,
      isCorrect: selectedAnswer.isCorrect,
    };
    axios.post("/api/answer", body);
    setTimeout(() => {
      const route = question.id === "9" ? "/done" : `/question/${+question.id + 1}`;
      router.push(route);
    }, 650);
  };

  return (
    <div className='text-center'>
      <h2 className='bg-yellow p-5 font-headline text-3xl font-semibold text-green-900'>
        {question.id !== "9" ? `QUESTION #${question.id}` : "Last Question!"}
        <div className='font-normal'>
          {question.id === "3" && <p className='mt-2 text-sm'>(6 questions left!)</p>}
          {question.id === "6" && <p className='mt-2 text-sm'>(3 questions left!)</p>}
        </div>
      </h2>
      <div className='mt-8 grid place-items-center gap-8 px-8'>
        <h3 className='text-lg'>
          Who invented the <span className='text-green-200 underline underline-offset-2'>{question?.invention}</span>?
        </h3>
        <Image
          src={question?.inventionImageUrl}
          alt='Invention Picture'
          priority
          placeholder='blur'
          className='w-10/12 rounded-md border-2 border-green-200'
        />
      </div>
      <p className='mt-10 mb-2 px-10'>Pick the person who most likely invented this based on their looks:</p>
      <div className='mx-auto grid w-11/12 grid-cols-2 place-items-center gap-4 p-4'>
        {question.answers.map((answer, index) => (
          <Image
            key={answer.inventorImageUrl.src}
            src={answer.inventorImageUrl}
            alt={`Inventor ${index}`}
            priority
            placeholder='blur'
            onClick={() => goToNextQuestion(answer)}
            className={cx(
              "rounded-md border-4 border-green-200 shadow-md transition-all ease-in-out active:scale-110",
              {
                "opacity-0 duration-700": answer.selected === false,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
};

QuestionComponent.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default QuestionComponent;
