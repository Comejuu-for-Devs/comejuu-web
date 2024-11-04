"use client";

import React from "react";

import Tabs from "@/components/tabs/Tabs";
import AdmissionTabSwitch from "@/components/admissions/AdmissionTab";
import AdmissionStep from "@/components/admissions/AdmissionStep";

import { admissionSteps } from "@/data";

const AdmissionStepsTab = () => {
  return (
    <Tabs
      renderControls={(isActive, setActiveTab) => {
        return (
          <div className="flex w-max">
            {admissionSteps.map((step) => (
              <AdmissionTabSwitch
                key={step.stepNo}
                isActive={isActive}
                setActiveTab={setActiveTab}
                idx={step.stepNo}
                name={step.title}
              />
            ))}
          </div>
        );
      }}
      renderContent={(isActive) => {
        return (
          <div className="">
            {admissionSteps
              .filter((step) => isActive(step.stepNo))
              .map((step) => (
                <AdmissionStep
                  key={step.stepNo}
                  stepNo={step.stepNo}
                  title={step.title}
                  description={step.description}
                />
              ))}
          </div>
        );
      }}
    />
  );
};

export default AdmissionStepsTab;
