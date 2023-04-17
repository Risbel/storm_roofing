import React from "react";
import Image from "next/image";
import { WhoAreWe } from "./WhoAreWe";
import StormCard from "./StormCard";

const TextWhoAreWe = () => {
  return (
    <p className="text-[#f1f1f1]">
      As a Florida company for residential and commercial properties, Storm Roofing Solution understands that most
      property owners does not know very much about roofing. For that reason we are focusing on providing the best
      roofing experience and the highest levels of customer satisfaction. We feel an obligation to not only provide
      service and fair prices, but we also educate our costumers, making sure that they are always satisfied with the
      final results.
    </p>
  );
};

export const AboutUs = () => {
  return (
    <section id="about-us" className="bg-[#142245] py-4">
      <div className="md:hidden py-6">
        <WhoAreWe />
      </div>
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="flex relative p-4 md:p-8">
            <div className="absolute bg-[#030d27] w-[65%] h-[65%] lg:h-[75%] lg:w-[75%]">
              <div className="hidden  md:flex justify-end pr-8 pt-4">
                <div className="z-20 h-8 w-8 bg-[#237ec3] mt-2 rounded-full mx-4"></div>
                <Image className="z-20" src="/Elipse 3.svg" alt="blue circle" width={50} height={50} />
              </div>
            </div>

            <Image
              className="p-5 md:p-10 z-10 md:min-w-[370px] lg:min-w-[450px] lg:max-h-[500px]  w-full object-cover"
              src="/car-storm-roofing.jpeg"
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
            <TextWhoAreWe />
          </div>
        </div>
      </div>
      <div className="font-base text-center px-8 py-8 text-2xl leading-9 md:hidden">
        <TextWhoAreWe />
      </div>

      <div className="mx-6 pb-16 md:mx-10 lg:mx-24">
        <StormCard />
      </div>
    </section>
  );
};
