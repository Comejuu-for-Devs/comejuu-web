"use client";

import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Button from "@/components/Button";

interface ApplyNowButtonProps {
  onClick: () => void;
  text?: string;
}

const ApplyNowButton: React.FC<ApplyNowButtonProps> = ({
  onClick,
  text = "Apply Now",
}) => {
  return (
    <Button className="bg-white text-primary w-max" onClick={onClick}>
      {text}
      <RiArrowRightLine />
    </Button>
  );
};

export default ApplyNowButton;
