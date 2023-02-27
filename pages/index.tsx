import MainLayout from "@/pages/main-layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import Button from "@/components/button";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const startGame = () => {
    localStorage.clear();
    router.push("/question/1");
  };

  return (
    <div className='center m-8 grid place-items-center gap-10 text-center sm:m-12 md:m-16 lg:mx-auto lg:max-w-xl'>
      <h1 className='font-headline text-4xl text-green-200'>Nine Questions</h1>
      <h2 className='text-xl font-light'>A game in which your gut feeling is more important than your knowledge</h2>
      <div>
        <p className='mb-6  p-4'>
          Guess <span className='font-bold text-green-200'>who</span> invented{" "}
          <span className='font-bold text-green-200'>what</span> based{" "}
          <span className='font-bold text-green-200'>only</span> on <span className=''>what their face look like</span>.
        </p>
        <Button handleClick={startGame}>START</Button>
      </div>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Home;
