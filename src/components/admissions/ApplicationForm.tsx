"use client";

import React, { useState, useRef } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import Input from "@/components/Input";
import Button from "@/components/Button";
import toast from "react-hot-toast";

export interface ApplicationFormData {
  parentName: string;
  studentName: string;
  studentGrade: string;
  dayOrBoarding: string;
  parentRelationship: string;
  parentPhoneNumber: string;
  parentEmailAddress: string;
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\d{10}$/; // Adjust regex according to your phone number format
  return phoneRegex.test(phoneNumber);
};

const ApplicationForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const form = document.querySelector("form");
    const inputs = form?.querySelectorAll("input");
    const allFilled = inputs
      ? Array.from(inputs).every((input) => input.value.trim() !== "")
      : false;
    setIsFormValid(allFilled);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    try {
      setIsLoading(true);
      const formData = new FormData(formRef.current!);
      const data = Object.fromEntries(formData.entries());

      const validEmail = validateEmail(data.parentEmailAddress as string);
      const validPhone = validatePhoneNumber(data.parentPhoneNumber as string);

      if (!validEmail && !validPhone) {
        return toast.error(
          "Please enter a valid email address and phone number."
        );
      } else if (!validEmail) {
        return toast.error("Please enter a valid email address.");
      } else if (!validPhone) {
        return toast.error("Please enter a valid phone number.");
      }

      const response = await fetch("/api/send/admissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          email: "admissions@comejuupremieracademy.com",
        }),
      });

      if (response.ok) {
        toast.success(
          "Application submitted successfully, we will get back to you shortly",
          { duration: 5000 }
        );
        formRef.current?.reset();
        setIsFormValid(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={formRef} className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <Input
        label="Your name *"
        placeholder="e.g. John Doe"
        name="parentName"
        onChange={handleInputChange}
      />

      <Input
        label="The student's name *"
        placeholder="e.g. John Doe"
        name="studentName"
        onChange={handleInputChange}
      />

      <Input
        label="The student's current grade *"
        placeholder="e.g. 1"
        name="studentGrade"
        onChange={handleInputChange}
      />

      <Input
        label="Day school or boarding"
        placeholder="e.g. Boarding"
        name="dayOrBoarding"
        onChange={handleInputChange}
      />

      <Input
        label="Your relationship to the student (Parent, guardian, sibling, donor)"
        placeholder="e.g. Boarding"
        name="parentRelationship"
        onChange={handleInputChange}
      />

      <Input
        label="Your phone number *"
        placeholder="e.g. 07XXXXXXXX"
        name="parentPhoneNumber"
        onChange={handleInputChange}
      />

      <Input
        label="Your email"
        placeholder="e.g. johndoe@email.com"
        name="parentEmailAddress"
        onChange={handleInputChange}
      />
      {/* 
      <Textarea
        label="Tell us your issue"
        placeholder="e.g. Hi, I want to ask about..."
        value={''}
        onChange={() => {}}
        name='message'
      /> */}

      <Button
        type="submit"
        disabled={isLoading }
        className={`${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        } w-max mt-5`}
      >
        {isLoading ? "Submitting..." : "Submit application"}
        <RiArrowRightLine />
      </Button>
    </form>
  );
};

export default ApplicationForm;
