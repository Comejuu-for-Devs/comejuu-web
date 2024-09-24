import Activities from "@/components/home/Activities";
import Hero from "@/components/home/Hero";
import NewsEvents from "@/components/home/NewsEvents";
import Stages from "@/components/home/Stages";
import StudentLife from "@/components/home/StudentLife";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stages />
      <Activities />
      <NewsEvents />
      <StudentLife />
      <Testimonials />
    </>
  );
}
