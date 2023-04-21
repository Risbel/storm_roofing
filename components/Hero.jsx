import Image from "next/image";
import { HeroMobileHalf } from "./HeroMobileHalf";
import useHandleScroll from "../hooks/useHandleSroll";

export const Hero = () => {
  const handleClickScroll = useHandleScroll();

  return (
    <section id="home">
      <div className="flex">
        <div className="hidden md:block w-[30%] bg-[#f1f1f1]">
          <div className="flex justify-center py-16">
            <Image
              className="md:w-36 lg:w-56"
              src="/logo-storm-roofing.bmp"
              priority
              alt="logo storm roofing"
              width={266}
              height={84}
            />
          </div>
          <div className="flex items-end pl-2">
            <Image className="md:w-40 lg:w-[200px]" src="/Grupo 1.svg" alt="squad 1" width={210} height={210} />
            <Image className="md:w-16 lg:w-[100px]" src="/Grupo 2.svg" alt="squad 2" width={120} height={120} />
          </div>
          <div>
            <div className="relative translate-x-20 md:-translate-y-10 lg:-translate-y-16 text-[#142245]">
              <h1 className="md:text-5xl lg:text-7xl font-semibold">We are</h1>
              <div className="absolute z-50  flex flex-col">
                <div className="bg-[#f1f1f1] pr-4 pb-4 rounded-3xl">
                  <span className="md:text-8xl lg:text-9xl font-bold">STORM</span>

                  <div className="flex justify-between md:text-3xl lg:text-5xl font-medium">
                    <span>R</span>
                    <span>O</span>
                    <span>O</span>
                    <span>F</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                  </div>
                </div>
                <div className="flex justify-start px-8 py-4">
                  <button
                    onClick={(e) => handleClickScroll(e, "#contact")}
                    className=" bg-[#237ec3] py-4 px-20 rounded-xl text-xl text-[#f1f1f1]"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          className="w-auto absolute translate-x-8 translate-y-8 md:hidden"
          src="/logo-storm-roofing.bmp"
          priority
          alt="logo storm roofing small"
          width={120}
          height={120}
        />

        <Image
          className="w-screen h-[700px] lg:h-[800px] md:w-[70%]"
          src="/bg-roof.bmp"
          priority
          alt="red roof"
          width={1363}
          height={1080}
        />
      </div>
      <HeroMobileHalf />
    </section>
  );
};
