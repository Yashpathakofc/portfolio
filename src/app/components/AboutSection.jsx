"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Machine Learning/Deep learning</li>
        <li>JavaScript</li>
       
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="mt-1">B.Tech CSE : Amity University,Madhya Pradesh (2021-25)</li>
        <li className="mt-1">XII: Daisy Dales Senior Secondary School,Indore (2021)</li>
        <li className="mt-1">X: Daisy Dales Senior Secondary School,Indore (2019)</li>
      </ul>
    ),
  },
  
  {
    title: "Experience/Certification",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 ">
        <li className="mt-1">HR analyst Intern: Tata 1mg Technologies</li>
        <li className="mt-1">Managed Network Expert :Chegg Inc</li>
        <li className="mt-1">Oracle Certified Generative AI Professional</li>
        <li className="mt-1">Oracle Certified Data Management Associate</li>
        <li className="mt-1">Oracle Certified AI foundation  Associate</li>
        <li className="mt-1">PostMan API foundation student expert</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/yash.png" width={500} height={500} style={{borderRadius:'50%'}} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg" style={{textAlign:'justify'}}>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express,Bootstrap,
            HTML, CSS, and MongoDB.
            I develop machine learning and deep leaning based automation models using python,Dynamic web pages,IOT based robots and data analytics using PowerBI and MySQL.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
            Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
