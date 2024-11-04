import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type StudentLifeCardProps = {
  title: string;
  img: StaticImageData;
  link: string;
  linkTitle: string;
};

export const StudentLifeCard: React.FC<StudentLifeCardProps> = ({
  title,
  img,
  link,
  linkTitle,
}) => {
  return (
    <div className="w-full text-white space-y-4 ">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110 cursor-pointer"
        />
      </div>
      <h3 className="text-xl text-primary font-semibold">{title}</h3>
      <Link
        href={link}
        // legacyBehavior
        scroll={true}
        className="inline-flex items-center underline text-sm font-semibold text-secondary hover:underline"
      >
        <span>{linkTitle}</span>
        <HiOutlineArrowNarrowRight className="ml-2" />
      </Link>
    </div>
  );
};
