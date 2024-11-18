import Image from "next/image";
import P from "./components/typography/p";
import H1 from "./components/typography/h1";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <section className="flex items-center flex-col h-screen pt-[68px] bg-gradient-to-b from-slate-800 to-gray-900">
        <div className="mt-16">
          <P color="gray">Hello there, the name is</P>
          <H1>Arthur Fernandes</H1>
        </div>
        <div className="flex gap-16 mt-16 items-center p-8 rounded-xl relative max-w-5xl">
          <Image
            className="rounded-xl max-w-[300px]"
            src="/me.jpg"
            alt="A picture of myself wearing a beige suit"
            width={1200}
            height={1600}
            priority
          />
          <div>
            <P>
              I am a frontend developer with 6 years of professional experience, specializing in React, Next.js and TypeScript. I also have experience with Redux, GraphQL, Angular, testings frameworks like Jest, git, CI/CD with github actions, and a good experience with node.
            </P>
            <P>
              Currently, I work as a senior developer at <a className="text-sky-400" href="https://www.trustedhousesitters.com" target="blank">TrustedHousesitters</a>, a platform for pet sitting with more than 200,000 paid members. 
            </P>
            <P>My current goal is to deepen my Node.js knowledge, to accelerate personal project development and to become a full-stack TypeScript developer.</P>
            <P>If you want to know more about my work experience, my skills and education, click on the CTA bellow.</P>
          </div>
          <div className="absolute -top-2 -right-2 rounded-tr-xl w-64 h-64 border-sky-400 border-r border-t"/>
          <div className="absolute top-0 right-0 rounded-tr-xl w-32 h-32 border-sky-400 border-r border-t"/>
          <div className="absolute -bottom-2 -left-2 rounded-bl-xl w-64 h-64 border-sky-400 border-l border-b"/>
          <div className="absolute bottom-0 left-0 rounded-bl-xl w-32 h-32 border-sky-400 border-l border-b"/>
        </div>
      </section>
    </div>
  );
}
