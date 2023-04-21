import Image from "next/image";
import useHandleScroll from "../hooks/useHandleSroll";

export const HeroMobileHalf = () => {
  const handleClickScroll = useHandleScroll();

  return (
    <div className="md:hidden pt-24 pb-12">
      <div className="text-[#142245] text-center">
        <div className="flex flex-col justify-center items-center text-6xl font-bold">
          <div className="flex gap-2 text-4xl font-bold">
            <div>
              <Image
                className="absolute -z-10 -translate-y-5"
                src="/Grupo 2.svg"
                alt="svg lines square"
                width={55}
                height={55}
              />
              <span>We</span>
            </div>

            <span>are</span>
            <div className="flex justify-end">
              <Image
                className="absolute -z-10 translate-x-20 -translate-y-8"
                src="/Grupo 1.svg"
                alt="svg dots square"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div>
            <div>STORM</div>
            <div className="flex justify-around text-2xl font-medium">
              <span>R</span>
              <span>O</span>
              <span>O</span>
              <span>F</span>
              <span>I</span>
              <span>N</span>
              <span>G</span>
            </div>
          </div>
        </div>

        <div className="px-8 py-4">
          <a
            onClick={(e) => handleClickScroll(e, "#contact")}
            href="#contact"
            className="bg-[#237ec3] py-4 px-12 rounded-xl text-md text-[#f1f1f1]"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};
