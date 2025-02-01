import Head from "next/head";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import useScroll from "../lib/use-scroll";
import { constants} from "../data/constants";

export default function Home() {
  const [aboutRef, scrollToAboutRef] = useScroll();

  return (
    <>
      <Head>
        <title>Home | {constants.data}</title>
      </Head>
      <div>
        <div className="px-5 md:px-20 mx-auto max-w-[1400px] w-full">
          <Hero scrollToAboutRef={scrollToAboutRef} />
          <About aboutRef={aboutRef} />
        </div>
      </div>
    </>
  );
}