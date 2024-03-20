import ExperienceCard from "@/components/card/experience-card";
import ProjectCard from "@/components/card/project-card";
import PageSection from "@/components/containers/page-section";
import SocialLink from "@/components/footer/social-link";
import TechStack from "@/components/techstack-card/techstack";
import { BasicInfo } from "@/types/api/basic-info";
import { Portfolio } from "@/types/api/portfolio";
import { Project } from "@/types/api/projects";
import Image from "next/image";
import Link from "next/link";
import mail from "public/envelope.svg";
import gdsc from "public/gdsc.png";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import postman from "public/postman.png";
import style from "./image.module.css";
import { CommunityExperience } from "@/types/api/community";
import { Techstack } from "@/types/api/techstack";

export default async function Home() {
  const basicInfoRes = await fetch(`${process.env.API_URL}/api/basicinfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const basicInfoData: BasicInfo = await basicInfoRes.json();

  const portfolioRes = await fetch(`${process.env.API_URL}/api/portfolio`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const portfolioData: Portfolio = await portfolioRes.json();

  const projectsRes = await fetch(`${process.env.API_URL}/api/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const projectsData: Project[] = await projectsRes.json();

  const community = await fetch(`${process.env.API_URL}/api/community`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const communityData: CommunityExperience[] = await community.json();

  
  return (
    <main className="text-center">
      <section className="my-5 sm:my-10 md:my-24 lg:my-28 flex flex-col justify-center">
        <div className="flex flex-col items-center md:flex-row-reverse md:gap-32 md:justify-between">
          <div>
            <Image
              src={basicInfoData.image_path}
              alt="profile picture"
              width={280}
              height={280}
              className={style.profileImage + " rounded-full"}
            />
          </div>

          <div className="mt-4 md:mt-0 md:text-left">
            <div className="my-2 text-3xl md:text-4xl lg:text-5xl font-bold">
              {basicInfoData.name}
            </div>
            <div className="my-2 text-lg md:text-xl lg:text-2xl text-accent font-semibold">
              {basicInfoData.title}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-md sm:text-lg md:text-xl md:text-left">
          {basicInfoData.description}
        </div>
        <div className="mt-12">
          <a href={portfolioData.path} target="_blank">
            <button className=" btn btn-outline btn-accent btn-wide font-bold border-2">
              View Curriculum Vitae
            </button>
          </a>
        </div>
        <div className="mt-8 flex justify-center items-center gap-6">
          <SocialLink
            link={basicInfoData.linkedin}
            imageSrc={linkedin}
            altText="linkedIn"
            size={30}
          />
          <SocialLink
            link={basicInfoData.github}
            imageSrc={github}
            altText="github"
            size={30}
          />
          <SocialLink
            link={`mailto:${basicInfoData.mail}`}
            imageSrc={mail}
            altText="mail"
            size={30}
          />
        </div>
      </section>

      {projectsData.length !== 0 && (
        <PageSection className="py-16" title="Projects">
          <div>
            {projectsData.map((project) => (
              <ProjectCard
                className="mx-auto mt-2"
                key={project.id}
                title={project.title}
                description={project.description}
                demoLink={project.demo_link}
                repoLink={project.github_link}
                imageSrc={project.image_path}
                altText={project.image_name}
              />
            ))}
          </div>

          <div className="text-accent text-lg mt-4 hover:underline">
            <Link href={basicInfoData.github} target="_blank">
              See more projects on GitHub.
            </Link>
          </div>
        </PageSection>
      )}

      {communityData.length !== 0 && (
        <PageSection
          title="Community Leadership Experience"
          className="py-20 flex flex-col gap-4"
        >
          {communityData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              imageNode={
                <Image
                  src={experience.image_path}
                  alt={experience.image_name}
                  width={60}
                  height={60}
                />
              }
              title={experience.title}
              expand={
                <div className="text-start prose text-sm md:text-base">
                  {experience.description}
                </div>
              }
            />
          ))}

          {/* <ExperienceCard
          imageNode={
            <Image src={gdsc} alt="GDSC" width={60} placeholder="blur" />
          }
          title="Google Developer Student Clubs USeP Lead"
          year="2023-2024"<TechStack techstack={techstackData} />
              <ul>
                <li>
                  <b className="text-accent">Team Leadership:</b> I led a team
                  of driven students, fostering a culture of innovation and
                  teamwork. Together, we embarked on a variety of projects, from
                  web and mobile app development to machine learning and AI
                  initiatives.
                </li>
                <li>
                  <b className="text-accent">Technical Workshops:</b> Organized
                  and conducted technical workshops and seminars to empower club
                  members with the latest industry knowledge and hands-on
                  experience.
                </li>
                <li>
                  <b className="text-accent">Community Engagement:</b> Nurtured
                  a vibrant tech community within USeP by organizing hackathons,
                  coding competitions, and tech talks.
                </li>
                <li>
                  <b className="text-accent">Collaboration:</b> Worked closely
                  with industry partners and organizations to bring projects and
                  insights to club members.
                </li>
              </ul>
            </div>
          }
        />

        <ExperienceCard
          imageNode={
            <Image
              src={postman}
              alt="Postman Student Leader"
              width={60}
              placeholder="blur"
            />
          }
          title="Postman Student Leader"
          year="2023-2024"
          expand={
            <div className="text-start prose text-sm md:text-base">
              <div>
                Being a Postman Student Leader, I was able to share my knowledge
                and passion for API development and testing to fellow students.
                I also learned a lot about API development and testing, and how
                it can help developers build better software.
              </div>
              <ul>
                <li>
                  <b className="text-accent">Technical Workshops:</b> Organized
                  and conducted API development and testing workshops to empower
                  students with the latest industry knowledge and hands-on
                  experience.
                </li>
                <li>
                  <b className="text-accent">Study Jams:</b> Collaborated with
                  fellow Postman Student Leaders to conduct study jams and share
                  our knowledge and passion for API development and testing.
                </li>
              </ul>
            </div>
          }
        /> */}
        </PageSection>
      )}

      {/* <PageSection className="py-20" title="Used Technologies">
        <TechStack techstack={techstackData} />
      </PageSection> */}

      <PageSection className="py-20 pb-28" title="Let's build your ideas!">
        <p className="text-lg">
          Feel free to reach me out anytime. I would be happy to collaborate
          with you.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <button className="btn btn-outline btn-accent btn-wide px-6 border-2">
              Contact me!
            </button>
          </Link>
        </div>
      </PageSection>
    </main>
  );
}
