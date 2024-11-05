"use client";

import React from "react";
import { RiArrowRightLine } from "react-icons/ri";

import Input from "@/components/Input";
import Button from "@/components/Button";

const ApplicationForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input
        label="Your name *"
        placeholder="e.g. John Doe"
        onChange={() => {}}
        name="parentName"
      />

      <Input
        label="The student's name *"
        placeholder="e.g. John Doe"
        onChange={() => {}}
        name="studentName"
      />

      <Input
        label="The student's current grade *"
        placeholder="e.g. 1"
        onChange={() => {}}
        name="grade"
      />

      <Input
        label="Day school or boarding"
        placeholder="e.g. Boarding"
        onChange={() => {}}
        name="dayOrBoarding"
      />

      <Input
        label="Your relationship to the student (Parent, guardian, sibling, donor)"
        placeholder="e.g. Boarding"
        onChange={() => {}}
        name="dayOrBoarding"
      />

      <Input
        label="Your phone number *"
        placeholder="e.g. 07XXXXXXXX"
        onChange={() => {}}
        name="phone"
      />

      <Input
        label="Your email"
        placeholder="e.g. johndoe@email.com"
        onChange={() => {}}
        name="email"
      />
      {/* 
      <Textarea
        label="Tell us your issue"
        placeholder="e.g. Hi, I want to ask about..."
        value={''}
        onChange={() => {}}
        name='message'
      /> */}

      <Button type="submit" className="w-max mt-5">
        Submit application
        <RiArrowRightLine />
      </Button>
    </form>
  );
};

export default ApplicationForm;
