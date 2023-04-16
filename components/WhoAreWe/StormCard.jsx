import Image from "next/image";

const TextContent = () => {
  const items = [
    {
      id: 1,
      letter: "S",
      content: "erviceability",
    },
    {
      id: 2,
      letter: "T",
      content: "rust",
    },
    {
      id: 3,
      letter: "O",
      content: "rganization",
    },
    {
      id: 4,
      letter: "R",
      content: "esponsibility",
    },
    {
      id: 5,
      letter: "M",
      content: "otivated",
    },
  ];
  return (
    <ul className="pl-8 md:pl-16 pr-4 py-8 space-y-3">
      {items.map((item) => (
        <li key={item.id} className="">
          <span className="font-bold text-5xl text-[#2abce2]">
            {item.letter}
          </span>
          <span className="font-bold text-3xl text-[#006fac] uppercase">
            {item.content}
          </span>
        </li>
      ))}
    </ul>
  );
};

const SideImage = () => {
  return (
    <div className="relative hidden md:block md:col-span-7 w-full">
      <div className="absolute inset-0 bg-who-are-we-card z-10"></div>
      <Image
        className="object-cover h-[360px] w-full"
        alt="Blue roof house"
        src="/blue-house-3.JPEG"
        width={800}
        height={320}
      />
    </div>
  );
};

const StormCard = () => {
  return (
    <div className="mx-auto max-w-[350px] md:max-w-full w-full border-4 border-[#2abce2] rounded-[42px] overflow-x-hidden">
      <div className="flex gap-28">
        <div className="shrink-0">
          <TextContent />
        </div>
        <SideImage />
      </div>
    </div>
  );
};

export default StormCard;
