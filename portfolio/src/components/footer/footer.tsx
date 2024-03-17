import Image from "next/image";
import logo from "public/roice-logo.png";
import mail from "public/envelope.svg";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import SocialLink from "./social-link";
import RoiceText from "../roice";
import { BasicInfo } from "@/types/api/basic-info";

interface Props {
  className?: string;
}

async function Footer({ className }: Props) {
  const basicInfoRes = await fetch(`${process.env.API_URL}/api/basicinfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const basicInfoData: BasicInfo = await basicInfoRes.json();

  return (
    <div className={`backdrop-blur-sm py-8 border-t ${className}`}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex justify-center items-center">
          <RoiceText className="px-4" />
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-6">
        <SocialLink
          link={basicInfoData.linkedin}
          imageSrc={linkedin}
          altText="linkedIn"
        />
        <SocialLink
          link={basicInfoData.github}
          imageSrc={github}
          altText="github"
        />
        <SocialLink
          link={`mailto:${basicInfoData.mail}`}
          imageSrc={mail}
          altText="mail"
        />
      </div>
      <div
        className="my-4 mx-auto bg-base-100"
        style={{ width: "85%", height: "1px" }}
      />
      <div className="text-center text-sm">© John Roice Aldeza</div>
    </div>
  );
}

export default Footer;
