import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Contact } from "@/components/Contact";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Our Solutions"
        title="Transform Your Business with AI"
      >
        Discover how our AI-powered automation solutions can revolutionize your business operations,
        boost efficiency, and drive sustainable growth.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Success Stories"
        title="What Our Clients Say"
      >
        Learn how businesses across different industries have achieved remarkable results
        with our AI automation solutions.
      </SectionTitle>

      <Testimonials />

      <SectionTitle 
        preTitle="FAQ" 
        title="Frequently Asked Questions"
      >
        Find answers to common questions about our AI automation solutions, implementation
        process, and the benefits for your business.
      </SectionTitle>

      <Faq />
      <Cta />

      <SectionTitle
        preTitle="Contact Us"
        title="Let's Start Your AI Journey"
      >
        Ready to transform your business? Get in touch with us to discuss your needs
        and discover how we can help you achieve your goals.
      </SectionTitle>

      <Contact />
    </Container>
  );
}
