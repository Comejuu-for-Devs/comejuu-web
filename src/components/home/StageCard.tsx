"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ApplyNowButton from "../ApplyNowButton";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

type StageCardProps = {
  name: string;
  bgStyles: string;
  textStyles: string;
  level: string;
  sectionId: string;
};

const StageCard: React.FC<StageCardProps> = ({
  name,
  bgStyles,
  textStyles,
  level,
  sectionId,
}) => {
  const router = useRouter();
  const [first, second] = name.split(" ");

  return (
    <div
      onClick={() => {
        router.push(`/curriculum?section=${sectionId}`);
      }}
      className={`flex flex-col justify-between p-5 border-2 border-transparent w-[250px]
    sm:w-[340px] h-[200px] ${bgStyles} hover:scale-95 transition cursor-pointer`}
    >
      <hr />

      <div className="space-y-5">
        <h3
          className={`text-2xl sm:text-3xl font-secondary flex flex-col ${textStyles}`}
        >
          <span className="font-bold">{first}</span>
          <span className="font-light">{second}</span>
        </h3>

        <p className={`text-sm uppercase ${textStyles}`}>{level}</p>
        <Link
          href={`/curriculum?section=${sectionId}`}
          // legacyBehavior
          scroll={true}
          className={`inline-flex items-center text-sm font-semibold hover:underline ${textStyles}`}
        >
          <span>Learn more</span>
          <HiOutlineArrowNarrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default StageCard;
