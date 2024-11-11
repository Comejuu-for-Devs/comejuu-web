"use client";

import React, { useRef, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";

import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import toast from "react-hot-toast";

interface HelpFormProps {
  prepopulatedText?: string;
}

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber: string) => {
  const phoneRegex = /^\d{10}$/; // Adjust regex according to your phone number format
  return phoneRegex.test(phoneNumber);
};

const HelpForm = ({ prepopulatedText }: HelpFormProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const allFilled =
      nameRef.current?.value.trim() !== "" &&
      phoneRef.current?.value.trim() !== "" &&
      emailRef.current?.value.trim() !== "" &&
      messageRef.current?.value.trim() !== "";
    setIsFormValid(allFilled);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return toast.error("Please fill in all fields.");

    const name = nameRef.current?.value;
    const phone = phoneRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;

    const validEmail = validateEmail(email || "");
    const validPhone = validatePhoneNumber(phone || "");

    if (!validEmail && !validPhone) {
      return toast.error("Please enter a valid email address and phone number.");
    } else if (!validEmail) {
      return toast.error("Please enter a valid email address.");
    } else if (!validPhone) {
      return toast.error("Please enter a valid phone number.");
    }

    try {
      setIsLoading(true);
      const response = await fetch("/api/send/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully, we will get back to you shortly", { duration: 5000 });
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
        ref={nameRef}
        name="parentName"
        onChange={handleInputChange}
      />

      <Input
        label="Your phone number *"
        placeholder="e.g. 07XXXXXXXX"
        ref={phoneRef}
        name="phone"
        onChange={handleInputChange}
      />

      <Input
        label="Your email"
        placeholder="e.g. johndoe@email.com"
        ref={emailRef}
        name="email"
        onChange={handleInputChange}
      />

      <Textarea
        label="Write us a message"
        placeholder="e.g. Hi, I want to ask about..."
        ref={messageRef}
        value={prepopulatedText || ""}
        name="message"
        onChange={handleInputChange}
      />

      <Button
        type="submit"
        disabled={isLoading}
        className={`${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        } w-max mt-5`}
      >
        {isLoading ? "Sending..." : "Submit message"}
        <RiArrowRightLine />
      </Button>
    </form>
  );
};

export default HelpForm;
