import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Home = () => {
  return (
    <main className="py-24">
      <section className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">
            Software Developer
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Code meets creativity. I craft fast, responsive, and reliable
            applications for web, mobile, and desktop platforms.
          </p>

          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8  text-slate-500 hover:text-slate-800 duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8  text-slate-500 hover:text-slate-800 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <Image
            src="/hero.svg"
            alt="a guy waving behind a desk"
            width={440}
            height={261}
            className="h-80 lg:h-96"
          />
        </article>
      </section>
    </main>
  );
};
export default Home;
