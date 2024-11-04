import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

type ReqProps = {
  title: string;
  description: string;
};

const Req = ({ title, description }: ReqProps) => {
  return (
    <div className="space-y-2">
      <RiCheckboxCircleFill className="text-xl text-tertiary" />
      <h5 className="text-base font-semibold">{title}</h5>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default Req;
