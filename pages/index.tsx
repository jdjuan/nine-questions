import MainLayout from "@/components/main-layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import Button from "@/components/button";
import AnimatedLayout from "@/components/animated-layout";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const startGame = () => {
    localStorage.clear();
    router.push("/question/1");
  };

  return (
    <AnimatedLayout>
      <div className='border-t-8 border-yellow'>
        <div className='center m-8 grid place-items-center gap-10 text-center sm:m-12 md:m-16 md:mx-auto md:max-w-xl'>
          <h1 className='font-headline text-5xl font-bold text-green-200 md:text-7xl'>Nine Questions</h1>
          <h2 className='text-xl font-light md:text-3xl'>
            A game in which your gut feeling is more important than your knowledge
          </h2>
          <div>
            <p className='mb-6 p-4 px-12 md:text-xl'>
              Guess <span className='font-bold text-green-200'>who</span> invented{" "}
              <span className='font-bold text-green-200'>what</span> based on their{" "}
              <span className='font-bold text-green-200'>looks</span>.
            </p>
            <div className='mx-auto w-4/12 md:w-4/12'>
              <Button handleClick={startGame}>START</Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Home;
