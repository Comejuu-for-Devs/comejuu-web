"use client";

import React from "react";

import Tabs from "@/components/tabs/Tabs";
import ApproachCard from "@/components/curriculum/ApproachCard";

import { approaches } from "@/data";

const ApproachTabs = () => {
  return (
    <Tabs
      renderControls={(isActive, setActiveTab) => {
        return (
          <div className="flex w-max">
            {approaches.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i + 1)}
                className={`px-5 py-3 border ${isActive(i + 1) ? "bg-primary text-white" : ""} text-sm`}
              >
                {item.title}
              </button>
            ))}
          </div>
        );
      }}
      renderContent={(isActive) => {
        return (
          <div className="">
            {approaches
              .filter((_, i) => isActive(i + 1))
              .map((item, i) => (
                <ApproachCard
                  key={i}
                  img={item.image}
                  title={item.title}
                  description={item.description}
                  imgHeight="250px"
                />
              ))}
          </div>
        );
      }}
    />
  );
};

export default ApproachTabs;
