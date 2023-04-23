import Image from "next/image";

const IconGallery = () => {
  return (
    <div className="w-24 md:w-32 lg:w-40">
      <Image src="/Grupo 1.svg" alt="squad of dots" width={180} height={180} />
    </div>
  );
};

export const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/2men-fixing-roof.bmp",
      alt: "2 men fixing roof",
    },
    {
      id: 2,
      src: "/blue-roof-footer.bmp",
      alt: "blue roof",
    },
    {
      id: 3,
      src: "/hands-on-roof.bmp",
      alt: "hands on roof",
    },
    {
      id: 4,
      src: "/men-fixing-roof.bmp",
      alt: "men fixing roof",
    },
    {
      id: 5,
      src: "/man2-fixing-roof.bmp",
      alt: "man fixing roof",
    },
    {
      id: 6,
      src: "/man3-fixing-roof.bmp",
      alt: "man fixing roof",
    },
    {
      id: 7,
      src: "/men-fixing-red-roof.bmp",
      alt: "men fixing red roof",
    },
    {
      id: 8,
      src: "/blue-house-3.JPEG",
      alt: "white house blue roof",
    },
    {
      id: 9,
      src: "/man-fixing-roof.bmp",
      alt: "man fixing roof",
    },
  ];

  return (
    <section id="gallery" className="bg-[#f1f1f1]">
      <div className="relative flex justify-center py-12 -translate-x-10">
        <div className="absolute font-bold text-[#142245] drop-shadow-lg text-4xl md:text-5xl lg:text-6xl translate-x-10 bottom-14 lg:translate-x-16 lg:bottom-16">
          Gallery
        </div>
        <IconGallery />
      </div>

      <div className="flex justify-center px-10 pb-40 md:px-20 lg:px-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Image
              key={image.id}
              className="w-full h-full max-h-[340px] rounded-lg shadow-md shadow-slate-500 object-cover"
              width={800}
              height={600}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
