// import Activities from "@/components/home/Activities";
import Banner from "@/components/home/Banner";
import Hero from "@/components/home/Hero";
import NewsEvents from "@/components/home/NewsEvents";
import Stages from "@/components/home/Stages";
import StudentLife from "@/components/home/StudentLife";
import Testimonials from "@/components/home/Testimonials";
import Dots from "@/components/layout/Dots";

export default function Home() {
  return (
    <section className="relative">
      <Dots />
      <Banner />
      <Hero />
      <Stages />
      {/* <Activities /> */}
      <StudentLife />
      <NewsEvents />
      <Testimonials />
      
    </section>
  );
}
