import React from "react";
import Image from "next/image";
import { WhoAreWe } from "./WhoAreWe";

export const AboutUs = () => {
  return (
    <section className="bg-[#142245]">
      <div className="md:hidden py-6">
        <WhoAreWe />
      </div>

      <div className=" grid grid-flow-col grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex relative p-4 md:p-8">
            <div className="absolute bg-[#030d27]  w-[65%] h-[65%] lg:h-[75%] lg:w-[75%]"></div>

            <Image
              className="p-5 md:p-10 z-10 w-full object-cover"
              src="/car-storm-roofing.bmp"
              alt="car"
              width={520}
              height={520}
            />
            <Image
              className="z-20 absolute bottom-4 right-4 md:bottom-10 md:right-10 w-[30%] h-[30%]"
              src="Grupo 3.svg"
              alt="squad white dots"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="md:py-16 lg:py-24 md:pr-6 lg:pr-16">
          <div className="hidden md:block">
            <WhoAreWe />
          </div>
          <div className="hidden md:flex overflow-y-auto py-8 md:text-xl lg:text-2xl md:max-h-[250px] lg:max-h-[320px]">
            <p className="text-[#f1f1f1]">
              As a Florida company for residential and commercial properties, Storm Roofing Solution understands that
              most property owners does not know very much about roofing. For that reason we are focusing on providing
              the best roofing experience and the highest levels of customer satisfaction. We feel an obligation to not
              only provide service and fair prices, but we also educate our costumers, making sure that they are always
              satisfied with the final results.
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#f1f1f1] text-center py-8 px-14 text-xl md:hidden">
        As a Florida company for residential and commercial properties, Storm Roofing Solution understands that most
        property owners does not know very much about roofing. For that reason we are focusing on providing the best
        roofing experience and the highest levels of customer satisfaction. We feel an obligation to not only provide
        service and fair prices, but we also educate our costumers, making sure that they are always satisfied with the
        final results.
      </p>
    </section>
  );
};