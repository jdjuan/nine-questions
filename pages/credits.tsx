import AnimatedLayout from "@/components/animated-layout";
import Bullet from "@/components/bullet";
import Button from "@/components/button";
import MainLayout from "@/components/main-layout";
import { ReactElement } from "react";

const Credits = () => {
  return (
    <AnimatedLayout>
      <div className='grid h-screen place-content-start gap-4 p-8 md:place-content-center'>
        <h2 className='mb-2 font-headline text-5xl font-bold text-green-200'>CREDITS AND SOURCES</h2>
        <div>
          <h2 className='font-headline text-2xl text-green-200'>Credits</h2>
          <div>
            <div>
              <Bullet /> Anna Mikulics
            </div>
            <div>
              <Bullet /> Carlos Angulo
            </div>
            <div>
              <Bullet /> Adriana Maguea
            </div>
            <div>
              <Bullet /> Yani Asari
            </div>
          </div>
        </div>
        <div>
          <h2 className='font-headline text-2xl text-green-200'>Inventions</h2>
          <div>
            <Bullet /> Invention data from{" "}
            <a
              className='underline'
              href='https://wbec-west.com/10-incredible-inventions-by-women-that-changed-the-world/'
            >
              WBEC-WEST
            </a>
            ,{" "}
            <a
              className='underline'
              href='https://view.genial.ly/604a169f98549c0d88b8f978/interactive-content-womens-inventions'
            >
              Genialy
            </a>
            ,{" "}
            <a
              className='underline'
              href='https://www.destination-innovation.com/great-women-innovators-pioneers-quiz/'
            >
              Destination Innovation
            </a>
            ,{" "}
            <a className='underline' href='https://www.history.com/news/women-inventions'>
              History
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://livingfires.co.uk/2022/03/03/a-celebration-of-anna-connelly/'>
              Anne Connelly
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Margaret_A._Wilcox'>
              Margaret A. Wilcox
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Mary_Anderson_(inventor)'>
              Mary Anderson
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Tabitha_Babbitt'>
              Tabitha Babbitt
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Lizzie_Magie'>
              Lizzie Magie
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Josephine_Cochrane'>
              Josephine Cochrane
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://es.wikipedia.org/wiki/Florence_Parpart'>
              Florence Parpart
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://es.wikipedia.org/wiki/Bette_Nesmith_Graham'>
              Bette Nesmith Graham
            </a>
          </div>
          <div>
            <Bullet />{" "}
            <a className='underline' href='https://en.wikipedia.org/wiki/Ada_Lovelace'>
              Ada Lovelace
            </a>
          </div>
        </div>
        <div>
          <h2 className='font-headline text-2xl text-green-200'>Sound Effects</h2>
          <div>
            <Bullet /> Click Sound Effect from{" "}
            <a
              className='underline'
              href='https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=38129'
            >
              Pixabay
            </a>
          </div>
          <div>
            <Bullet /> Success Sound Effect from{" "}
            <a
              className='underline'
              href='https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=6297'
            >
              Pixabay
            </a>
          </div>
        </div>
        <div className='mt-8 grid gap-4'>
          <Button url='/done'>GO BACK</Button>
          <Button url='/'>START AGAIN</Button>
        </div>
      </div>
    </AnimatedLayout>
  );
};
Credits.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;
export default Credits;
