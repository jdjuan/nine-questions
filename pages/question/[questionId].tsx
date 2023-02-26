import { questionSet } from "@/content/questions";
import { useRouter } from "next/router";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";

const Question = () => {
  const router = useRouter();
  const { questionId } = router.query;
  const [, setAnswer] = useLocalStorage(`answer${questionId}`, true);
  const question = questionSet.find(({ id }) => id === questionId) || questionSet[0];
  const goToNextQuestion = (isCorrect: boolean) => {
    setAnswer(isCorrect);
    const route = question.id === "9" ? "/done" : `/question/${+question.id + 1}`;
    router.push(route);
  };
  return (
    <div className='text-center'>
      <div className='grid place-items-center gap-10 p-8'>
        <div>
          <h2 className='text-3xl'>{question.id !== "9" ? `Question #${question.id}` : "Last Question!"}</h2>
          {question.id === "3" && <p className='mt-2 text-sm'>(6 questions left!)</p>}
          {question.id === "6" && <p className='mt-2 text-sm'>(3 questions left!)</p>}
        </div>

        <h3>
          Who invented the <span className='underline underline-offset-2'>{question?.invention}</span>?
        </h3>
        <Image
          src={question?.inventionImageUrl}
          alt='Invention Picture'
          priority
          className='w-10/12 rounded-md border border-slate-900'
        />
      </div>
      {/* OPTIONS */}
      <p>Choose one:</p>
      <div className='mx-auto grid w-11/12 grid-cols-4 place-items-center gap-4 p-4'>
        {question.options.map(({ inventorImageUrl, isCorrect }, index) => (
          <Image
            key={inventorImageUrl.src}
            src={inventorImageUrl}
            alt={`Inventor ${index}`}
            priority
            onClick={() => goToNextQuestion(isCorrect)}
            className='rounded-md border-2 border-slate-900 bg-neutral-100 shadow-md'
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
