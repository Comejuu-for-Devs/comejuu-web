import React from "react";
import Image from "next/image";
import { RiCircleFill } from "react-icons/ri";

type ActivityCardProps = {
  name: string;
  description: string;
};

const ActivityCard: React.FC<ActivityCardProps> = ({ name, description }) => {
  return (
    <div
      className="p-2 border border-white/20 rounded-2xl space-y-4 hover:border-white/50
    transition bg-gradient-to-b from-transparent to-white/5"
    >
      <Image
        src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1920}
        height={1280}
        alt=""
        className="w-full h-[250px] object-cover rounded-xl"
      />

      <div className="space-y-2 px-2 pb-2">
        <div className="flex items-center gap-3">
          <RiCircleFill className="text-tertiary" />
          <h3 className="text-lg font-secondary font-semibold text-white">
            {name}
          </h3>
        </div>

        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
