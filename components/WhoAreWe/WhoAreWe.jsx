import Image from "next/image";

export const WhoAreWe = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="relative">
          <div className="bg-[#237ec3] absolute h-1/2 w-full z-0 bottom-0"></div>
          <h1 className="relative z-10 text-center text-white text-4xl md:text-3xl lg:text-6xl font-bold whitespace-nowrap">
            Who are we?
          </h1>
        </div>

        <div className="flex justify-end items-center">
          <Image
            className="w-24 h-8 lg:w-40 lg:h-10 "
            src="/broken-lines.bmp"
            alt="broken lines"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};
