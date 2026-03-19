export const metadata = {
  title: "Phát Garage Củ Chi - Chăm sóc xe bằng công nghệ & tâm huyết",
  description: "Hệ thống sửa chữa và bảo dưỡng ô tô hiện đại nhất tại Củ Chi. Chuyên bảo dưỡng, sửa chữa, detailing và cứu hộ 24/7.",
};

import Hero from "@/components/Hero";
import EventSection from "@/components/EventSection";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import RegistrationQR from "@/components/RegistrationQR";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <EventSection />
      <Services />
      <WhyChooseUs />
      <RegistrationQR />
      <Contact />
    </>
  );
}
