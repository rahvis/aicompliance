import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Yimo AI Compliance",
  description: "Discover how Yimo AI Compliance is revolutionizing the industry with cutting-edge AI solutions designed for enterprise needs. Learn about our mission, values, and how we ensure compliance in a rapidly evolving technological landscape.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Learn more about Yimo AI Compliance, where we specialize in providing innovative AI solutions tailored for enterprise needs. Our expertise ensures robust compliance in today's dynamic technological environment."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
