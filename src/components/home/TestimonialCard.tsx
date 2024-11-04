import React from "react";

type TestimonialProps = {
  content: string;
  author: string;
  role: string;
  img?: string;
};

const TestimonialCard = ({ content, author, role }: TestimonialProps) => {
  return (
    <div className="h-72  w-72 mt-5 flex flex-col justify-center items-center p-8 bg-gray-800 rounded-full text-center">
      <div className=" w-full h-full flex items-center justify-center">
        <div className="flex-grow overflow-hidden">
          <p className="text-base text-gray-200 line-clamp-[8]">{content}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-2">
          <p className="text-base font-bold text-tertiary">{author}</p>
          <p className="text-sm text-neutral">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
