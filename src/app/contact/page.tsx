"use client"
import React, { Suspense, useEffect, useState } from 'react'
import HeroSection from '@/components/HeroSection'
import { useSearchParams } from 'next/dist/client/components/navigation';

// Dynamic imports
const Dots = React.lazy(() => import('@/components/layout/Dots'));
const HelpForm = React.lazy(() => import('@/components/admissions/HelpForm'));
const Map = React.lazy(() => import('@/components/map/Map'));

const Contact = () => {
  
  const searchParams = useSearchParams();
  const event = searchParams?.get('event');
  const [prepopulatedText, setPrepopulatedText] = useState('');

  useEffect(() => {
    if (event) {
      setPrepopulatedText(`Hello, I would like to know more about the ${event} event.`);
    }
  }, [event]);

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
            top: elementPosition - 160,
            behavior: "smooth",
          });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [searchParams]);

  return (
    <section className="relative min-h-screen pb-20">
      <Suspense fallback={<div>Loading...</div>}>
        <Dots />
      </Suspense>

      <div className="space-y-10 sm:space-y-20">
        {/* HERO */}
        <HeroSection
          title="Enrol your child in a school where character and excellence bloom!"
          buttonText="Fill Admission Form"
          buttonLink="#admissionForm"
        />

        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-secondary">
              Contact - Talk to us
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
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl sm:text-2xl font-bold font-secondary">
              Our Location - give us a visit
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
          <h2 className="text-xl sm:text-2xl mb-10 font-bold font-secondary">
            For enquiries, get in touch with us.
          </h2>
          <Suspense fallback={<div>Loading...</div>}>
            <div id="contactform-container">
              <HelpForm prepopulatedText={prepopulatedText} />
            </div>
          </Suspense>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Map />
      </Suspense>
    </section>
  );
}

export default Contact