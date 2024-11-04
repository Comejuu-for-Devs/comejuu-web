import React from "react";

type CommunityCardProps = {
  title: string;
  img: string;
  bgStyles: string;
  textStyles: string;
};
const CommunityCard = ({
  title,
  // img,
  bgStyles,
  textStyles,
}: CommunityCardProps) => {
  return (
    <div
      className={`flex flex-col justify-between p-5 border-2 border-transparent h-[300px] sm:h-[400px] ${bgStyles} hover:scale-95 transition cursor-pointer`}
    >
      <hr />

      <div className="space-y-5">
        <h3
          className={`text-xl sm:text-2xl font-secondary flex flex-col ${textStyles}
        font-bold`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default CommunityCard;
