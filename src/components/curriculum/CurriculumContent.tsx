"use client";

import React, { useEffect } from "react";
import {useSearchParams } from "next/navigation";
import Link from "next/link";

import Button from "@/components/Button";
// import Stage from '@/components/curriculum/Stage'
import Dots from "@/components/layout/Dots";
import CallToAction from "@/components/CallToAction";
import CurriculumExcellenceTabs from "@/components/curriculum/CurriculumTabs";
import ApproachTabs from "@/components/curriculum/ApproachTabs";
import AgricultureHarvest from "../../../public/images/curriculum/agriculture_harvest.jpg";
import HeroSection from "../HeroSection";
import CurriculumCorousel from "./CurriculumCorousel";
import { juniorSecondaryImages, preSchoolImages, primarySchoolImages } from "@/data";



const CurriculumContent = () => {
  const searchParams = useSearchParams();
  useEffect(() => {
    const section = searchParams?.get("section");

    const timeoutId = setTimeout(() => {
      if (section) {
        const element = document.getElementById(`${section}-container`);
        if (element) {
          // Get any fixed header height
          const header = document.getElementById(section);
          const headerHeight = header ? header.offsetHeight : 0;
          console.log(headerHeight);
          // Scroll to element with offset
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - 100,
            behavior: "smooth",
          });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  return (
    <section className="min-h-screen pb-20 relative">
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        {/* HERO */}
        <HeroSection
          img={AgricultureHarvest}
          title="Our Curriculum empowers your child to soar like an eagle towards a bright future"
          buttonText="Fill Admission Form"
          buttonLink="/admissions"
        />

        {/* APPROACH */}
        <div className="container space-y-10">
          <div className="space-y-5">
            <h2
              className="font-secondary text-3xl sm:text-4xl w-full font-bold tracking-tight
              text-primary"
            >
              Our Approach to Teaching & Learning
            </h2>

            <p className="text-lg sm:text-xl font-light">
              Commitment to Excellence is in our DNA
            </p>
          </div>

          <ApproachTabs />
        </div>

        {/* STAGES */}
        <div className="container mx-auto space-y-16">
          {/* PRE-SCHOOL */}
          <div
            id="pre-school-container"
            className="md:container bg-primary rounded-xl md:rounded-2xl py-4 md:py-12"
          >
            <div id="pre-school" className="container md:space-y-10">
              <div className="space-y-5">
                <h2
                  className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                  text-white"
                >
                  Pre-school
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-300">
                  playgroup, pp1, pp2
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <CurriculumCorousel values={preSchoolImages} />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-gray-200">
                    Our Pre-School education lays a strong foundation for
                    lifelong learning by nurturing curiosity and creativity in
                    our youngest learners. Our Competency-Based Curriculum (CBC)
                    for preschoolers focuses on developing essential skills
                    through engaging subjects such as language, mathematics,
                    environmental activities, and physical education. We
                    incorporate play-based learning to foster social, emotional,
                    and cognitive development, ensuring each child feels
                    confident and supported. Through interactive lessons and
                    hands-on experiences, we prepare our preschoolers to
                    transition smoothly into primary education with a love for
                    learning.
                  </p>

                  <div className="">
                    <Link href={"/admissions#admissionForm"}>
                      <Button className="bg-white text-primary">
                        Apply now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PRIMARY SCHOOL */}
          <div
            id="primary-school-container"
            className="md:container bg-secondary rounded-3xl py-4 md:py-12"
          >
            <div id="primary-school" className="container space-y-10">
              <div className="space-y-5">
                <h2
                  className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                  text-white"
                >
                  Primary School
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-300">
                  grade 1 - 6
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <CurriculumCorousel values={primarySchoolImages} />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-gray-200">
                    Our Primary School program is designed to build on the
                    foundational skills acquired in Pre-School and propel
                    students towards academic excellence. Our Competency-Based
                    Curriculum (CBC) emphasizes critical thinking,
                    problem-solving, and creativity across a diverse range of
                    subjects, including mathematics, languages, science, social
                    studies, and the arts. We provide a dynamic learning
                    environment where students are encouraged to explore their
                    interests and develop their talents through both core
                    subjects and enriching extracurricular activities. With a
                    focus on holistic development, we ensure that each child is
                    equipped with the knowledge, skills, and values needed to
                    thrive in the ever-evolving world.
                  </p>

                  <div className="">
                    <Link href={"/admissions#admissionForm"}>
                      <Button className="bg-white text-primary">
                        Apply now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* JUNIOR SECONDARY */}
          <div
            id="junior-secondary-container"
            className="md:container bg-tertiary rounded-3xl py-4 md:py-12"
          >
            <div id="junior-secondary" className="container space-y-10">
              <div className="space-y-5">
                <h2
                  className="font-secondary text-3xl sm:text-4xl w-full sm:w-1/2 font-bold tracking-tight
                  text-primary"
                >
                  Junior Secondary
                </h2>

                <p className="text-sm sm:text-base font-light uppercase text-gray-600">
                  grade 7 - 9
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <CurriculumCorousel values={juniorSecondaryImages} />

                <div className="space-y-5">
                  <p className="text-base sm:text-lg font-light w-full text-primary">
                    Our Junior Secondary program is designed to guide students
                    through a pivotal stage of their educational journey,
                    covering Grades 7 to 9. Our Competency-Based Curriculum
                    (CBC) continues to emphasize critical thinking, innovation,
                    and practical application across subjects such as advanced
                    mathematics, sciences, languages, and technology. We
                    encourage students to delve deeper into their areas of
                    interest, fostering both academic and personal growth
                    through a blend of rigorous coursework and diverse
                    extracurricular opportunities. With a strong emphasis on
                    character development and leadership skills, we prepare our
                    junior secondary students to confidently transition to
                    higher education and beyond, ready to face future challenges
                    with resilience and integrity.
                  </p>

                  <div className="">
                    <Link href={"/admissions#admissionForm"}>
                      <Button className="bg-white text-primary">
                        Apply now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* EXTRACURRICULAR */}
        <div id="extracurricular-container" className="container space-y-10">
          <div className="space-y-5">
            <h2
              className="font-secondary text-3xl sm:text-4xl w-full sm:w-2/3 font-bold tracking-tight
              text-primary"
            >
              Excellence Beyond the Classroom
            </h2>

            <p className="text-lg sm:text-xl font-light">
              Extra-Curricular Activities & Pastoral Care
            </p>
          </div>

          <CurriculumExcellenceTabs />
        </div>
        {/* CALL TO ACTION */}
        <div className="m-5"></div>
        <CallToAction />
      </div>
    </section>
  );
};

export default CurriculumContent;
