import TechstackCard from "./techstack-card";
import html from "public/html.png";
import css from "public/css-3.png";
import js from "public/javascript.png";
import tailwind from "public/tailwindcss-icon.png";
import nextjs from "public/nextjs-icon.png";
import firebase from "public/firebase.png";
import java from "public/java.png";
import spring from "public/spring-icon.png";
import mysql from "public/mysql.png";
import postgres from "public/postgresql.png";
import bootstrap from "public/bootstrap.png";
import react from "public/react.png";
import ts from "public/typescript.png";
import mongodb from "public/mongodb.png";
import git from "public/git.png";
import maven from "public/maven.png";
import vite from "public/vite.png";
import nodejs from "public/nodejs.png";
import { Techstack } from "@/types/api/techstack";

interface Props {
  techstack: Techstack[];
}

export default function TechStack({ techstack }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
      {techstack.map((data, index) => {
        return (
          <TechstackCard
            key={index}
            imageSrc={data.image_path}
            label={data.name}
            altText={data.name}
          />
        );
      })}
      {/* <TechstackCard imageSrc={html} label="HTML" altText="HTML" />
      <TechstackCard imageSrc={css} label="CSS" altText="CSS" />
      <TechstackCard
        imageSrc={tailwind}
        label="Tailwind CSS"
        altText="Tailwind CSS"
      />
      <TechstackCard
        imageSrc={bootstrap}
        label="Bootstrap"
        altText="Bootstrap"
      />
      <TechstackCard imageSrc={js} label="JavaScript" altText="JavaScript" />
      <TechstackCard imageSrc={ts} label="Typescript" altText="TypeScript" />
      <TechstackCard imageSrc={react} label="React" altText="React" />
      <TechstackCard imageSrc={nextjs} label="NextJs" altText="NextJs" />
      <TechstackCard imageSrc={vite} label="Vite" altText="Vite" />
      <TechstackCard imageSrc={firebase} label="Firebase" altText="Firebase" />
      <TechstackCard imageSrc={java} label="Java" altText="Java" />
      <TechstackCard imageSrc={spring} label="Spring" altText="Spring" />
      <TechstackCard imageSrc={mysql} label="MySQL" altText="MySQL" />
      <TechstackCard
        imageSrc={postgres}
        label="PostgreSQL"
        altText="PostgreSQL"
      />

      <TechstackCard imageSrc={nodejs} label="NodeJS" altText="NodeJS" />
      <TechstackCard imageSrc={mongodb} label="MongoDB" altText="MongoDB" />
      <TechstackCard imageSrc={git} label="Git" altText="Git" />
      <TechstackCard imageSrc={maven} label="Maven" altText="Maven" /> */}
    </div>
  );
}
