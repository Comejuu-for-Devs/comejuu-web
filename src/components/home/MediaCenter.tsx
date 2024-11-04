"use client";
import React from "react";
import Image from "next/image";
import { RiCircleFill } from "react-icons/ri";
import Button from "@/components/Button";
import NewsCard from "@/components/home/NewsCard";
import { useRouter } from "next/navigation";

const news = [
  {
    img: "",
    title: "Title of News Item",
    content:
      "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year.",
  },
  {
    img: "",
    title: "Title of News Item",
    content:
      "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year.",
  },
  {
    img: "",
    title: "Title of News Item",
    content:
      "Fifth-graders honed their communication, problem-solving, and team-building skills through collaborative outdoor activities during a visit to The EDGE, located on George Mason University’s science and technology campus. The hands-on activities helped our students grow as a team as they prepare for Middle School next year.",
  },
];

const MediaCenter = () => {
  const router = useRouter();

  const readmore = (slug: string) => {
    router.push(`/mediaroom/${slug}`);
  };
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center gap-3">
          <RiCircleFill className="text-tertiary mb-5" />
          <h2 className="text-xl md:text-2xl mb-5 font-secondary tracking-[-.1px] font-bold text-primary">
            The Latest from Our Corner
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="flex flex-col  md:items-center gap-6 w-full">
            <Image
              width={1920}
              height={1280}
              src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-[300px] object-cover rounded-xl"
            />

            <div className="w-full space-y-3">
              <div className="space-y-3">
                <p className="text-primary font-bold text-xl sm:text-2xl">
                  Title of News Items
                </p>
                <p className="text-sm text-neutral-dark">
                  {" "}
                  Fifth-graders honed their communication, problem-solving, and
                  team-building skills through collaborative outdoor activities
                  during a visit to The EDGE, located on George Mason
                  University’s science and technology campus. The hands-on
                  activities helped our students grow as a team as they prepare
                  for Middle School next year.
                </p>
              </div>

              <Button onClick={() => readmore("Title of News Items")}>
                Read more
              </Button>
            </div>
          </div>
          <p className="text-xl font-secondary font-bold text-primary">
            Other Reads
          </p>
          <div className="w-full pb-5">
            <div className="flex w-full gap-5 flex-col">
              {news.map((n, i) => (
                <NewsCard
                  onClick={() => readmore(n.title)}
                  key={i}
                  title={n.title}
                  content={n.content}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCenter;
