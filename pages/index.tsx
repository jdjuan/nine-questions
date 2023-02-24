import MainLayout from "@/pages/main-layout";
import { NextPageWithLayout } from "@/pages/_app";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const startGame = () => {
    // TODO: Reset localstorage
    router.push("/question/1");
  };

  return (
    <div className='center grid place-items-center gap-10 text-center'>
      <h1 className='text-4xl'>Nine Questions</h1>
      <h2 className='text-xl'>A game in which your gut feeling is more important than your knowledge</h2>
      <p className='mt-6'>
        Guess who invented what based <span className='font-bold'>only</span> on{" "}
        <span className=''>what their face look like</span>.
      </p>
      <button onClick={startGame} className='mt-10 rounded-md bg-slate-300 py-2 px-4 text-xl shadow-md'>
        START
      </button>
    </div>
  );
};

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Home;
