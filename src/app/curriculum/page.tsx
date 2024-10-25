
import React, { Suspense } from 'react'

import CurriculumContent from '@/components/curriculum/CurriculumContent'

const Curriculum = () => {
    return (
    <Suspense>
      <CurriculumContent />
    </Suspense>
  )
}

export default Curriculum
