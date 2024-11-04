import React from "react";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";

import Button from "@/components/Button";

type StageProps = {
  name: string;
  content: string;
  img: string;
  description: string;
};

const Stage: React.FC<StageProps> = ({ name, content, img, description }) => {
  const [first, second] = name.split(" ");

  return (
    <div className="border-t border-primary/25 pt-10">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-5">
          <h3 className="flex flex-col text-2xl sm:text-3xl font-secondary tracking-tight">
            <span className="font-bold">{first}</span>
            <span className="font-light">{second}</span>
          </h3>

          <p className="text-sm uppercase text-gray-400 font-medium">
            {description}
          </p>

          <Button className="mt-auto w-max h-max">
            Enrol now
            <RiArrowRightLine />
          </Button>
        </div>

        <Image
          width={1920}
          height={1280}
          src={img}
          alt=""
          className="w-full md:w-[300px] h-[300px] object-cover"
        />

        <div className="">
          <p className="text-gray-500 text-sm sm:text-base">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Stage;
