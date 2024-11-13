import React from "react";
import Image, { StaticImageData } from "next/image";

interface ValueSlideProps {
  value: {
    title: string;
    longDescription: string;
    image: StaticImageData;
  };
  index: number;
}

const ValueSlide: React.FC<ValueSlideProps> = ({ value, index }) => {
  return (
    <div className="relative h-[110vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 transform">
        <Image
          src={value.image}
          alt={value.title}
          layout={"fill"}
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0  bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end">
        <div className="container mx-auto px-5 pb-80 flex flex-col h-full justify-end">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-start md:items-end gap-5 md:gap-10">
            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-white opacity-40">
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <div className="space-y-2 md:space-y-4 max-w-2xl">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  {value.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-white/90">
                {value.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueSlide;
