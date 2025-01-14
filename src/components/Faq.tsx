"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How can AI automation benefit my business?",
    answer: "AI automation can transform your business operations by streamlining workflows, reducing manual tasks, and improving decision-making. Our solutions can help reduce operational costs by up to 40%, increase productivity through 24/7 automated processes, and minimize human error in routine tasks. You'll also gain valuable insights from your data to make more informed business decisions.",
  },
  {
    question: "How long does it take to implement your AI solutions?",
    answer: "Implementation timelines vary based on your business needs and existing infrastructure. Typically, our basic automation solutions can be deployed within 4-6 weeks, while more complex enterprise-wide implementations may take 3-4 months. We ensure a smooth transition with minimal disruption to your current operations through our phased implementation approach.",
  },
  {
    question: "What about data security and privacy?",
    answer: "Security is our top priority. Our AI solutions are built with enterprise-grade security protocols, including end-to-end encryption, secure data handling, and compliance with major regulatory standards (GDPR, HIPAA, etc.). We implement robust access controls and regular security audits to protect your sensitive business data.",
  },
  {
    question: "Can your AI solutions integrate with our existing systems?",
    answer: "Yes, our AI solutions are designed for seamless integration with most common business systems and software. We support integration with major ERP systems, CRM platforms, databases, and custom applications through our flexible API architecture. Our team will work with you to ensure smooth integration while maintaining your existing workflows.",
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "While ROI varies by implementation, our clients typically see returns within 6-12 months of deployment. This includes cost savings from automated processes, increased productivity, and improved decision-making accuracy. We provide detailed analytics and reporting to help you track and measure the impact on your business operations.",
  },
];
