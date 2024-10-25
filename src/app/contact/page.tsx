"use client"
import React from 'react'
import Image from 'next/image'
import Dots from '@/components/layout/Dots'
import HelpForm from '@/components/admissions/HelpForm'
import ApplyNowButton from '@/components/ApplyNowButton'

const Contact = () => {
  return (
    <section className="relative min-h-screen pb-20">
      <Dots />

      <div className="space-y-10 sm:space-y-20">
        {/* HERO */}
        <div className="relative w-full h-[60vh]">
          <Image
            width={1920}
            height={1280}
            src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="asbolute w-full h-full object-cover rounded-xl"
          />

          <div className="absolute top-0 bg-black/80 h-full w-full z-10">
            <div className="container py-20 h-full flex flex-col gap-10 justify-center">
              <h1 className="font-secondary text-4xl w-full  sm:text-6xl font-black tracking-tight text-white">
                Enrol your child in a school where character and excellence
                bloom!
              </h1>

              <ApplyNowButton
                onClick={() => {
                  document
                    .getElementById("contactform-section")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              />
            </div>
          </div>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-secondary">
              Contact us today to schedule a school visit
            </h2>

            <div className="">
              <p className="text-sm sm:text-base text-gray-500">
                P.O. Box 48, Gathugu via Ruiru
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Cell: 0726 796 343 / 0759 913 825
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Email: info@comejuuacademy.ac.ke
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                Website: www.comejuuacademy.ac.ke
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-secondary">
              Our Location
            </h2>

            <div className="">
              <p className="text-sm sm:text-base text-gray-500">
                Kigumo Township (Kiambu County)
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                45 kilometres west of Ruiru Town
              </p>
              <p className="text-sm sm:text-base text-gray-500">
                on Ruiru-Kibicho-CRF-Kigumo Road
              </p>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div id="contactform-section" className="container">
          <HelpForm />
        </div>
      </div>
    </section>
  );
}

export default Contact