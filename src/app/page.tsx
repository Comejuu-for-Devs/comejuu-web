// import Activities from "@/components/home/Activities";
import Hero from "@/components/home/Hero";
import MediaCenter from "@/components/home/MediaCenter";
import NewsEvents from "@/components/home/NewsEvents";
import Stages from "@/components/home/Stages";
import StudentLife from "@/components/home/StudentLife";
import Testimonials from "@/components/home/Testimonials";
import Dots from "@/components/layout/Dots";

export default function Home() {
  return (
    <section className="relative">
      <Dots />
      <Hero />
      <Stages />
      {/* <Activities /> */}
      <StudentLife />
      <NewsEvents />
      <Testimonials />
      <MediaCenter />
    </section>
  );
}
