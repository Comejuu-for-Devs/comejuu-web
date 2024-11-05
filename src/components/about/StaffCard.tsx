import Image, { StaticImageData } from "next/image";
import React from "react";

type StaffCardProps = {
  name?: string;
  img: StaticImageData;
  role: string;
  description?: string;
};

const StaffCard = ({ name, img, role, description }: StaffCardProps) => {
  return (
    <div className="space-y-2 overflow-hidden rounded-2xl">
      <Image
        width={1920}
        height={1280}
        src={img}
        alt=""
        className="w-full h-[200px] object-cover rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
      />

      <div>
        <h1 className="text-lg font-semibold text-white">{name}</h1>
        <p className="text-sm pl-5 text-tertiary font-normal">{role}</p>
        {description && (
          <p className="text-sm text-gray-300 font-normal">{description}</p>
        )}
      </div>
    </div>
  );
};

export default StaffCard;
