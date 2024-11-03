"use client";
import React, { Suspense } from "react";

import CurriculumContent from "@/components/curriculum/CurriculumContent";

const Curriculum = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CurriculumContent />
    </Suspense>
  )
};

export default Curriculum;
