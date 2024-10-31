import Image from "next/image";
import React from "react";

type NewsCardProps = {
  title: string;
  content: string;
  onClick: () => void;
};

const NewsCard = ({ title, content, onClick }: NewsCardProps) => {
  return (
    <div className="flex gap-4 w-full">
      <Image
        width={1920}
        height={1280}
        src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-[150px] h-[120px] object-cover rounded-lg"
      />

      <div className="w-full space-y-3">
        <div className="space-y-2">
          <p className="text-primary font-bold text-lg sm:text-xl">{title}</p>
          <p className="text-sm text-neutral-dark line-clamp-3">{content}</p>
        </div>
        <p
          onClick={onClick}
          className="cursor-pointer text-sm text-secondary underline flex items-center"
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
