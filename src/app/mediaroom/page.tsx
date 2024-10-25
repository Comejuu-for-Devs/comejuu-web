import MediaCenter from '@/components/home/MediaCenter';
import Dots from '@/components/layout/Dots'
import React from 'react'

const MediaRoom = () => {
  return (
    <section className="page min-h-screen">
      <Dots />
      <div className="space-y-20">
        <div className="container">
          <h1 className="font-secondary text-6xl w-full sm:w-1/2 sm:text-8xl font-black tracking-tight">
            Press & media
          </h1>
          <MediaCenter />
        </div>
      </div>
    </section>
  );
}

export default MediaRoom