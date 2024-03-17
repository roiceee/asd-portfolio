import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  className?: string;
  imageSrc: string;
  altText: string;
}

function ProjectCard({
  title,
  description,
  repoLink,
  demoLink,
  className,
  imageSrc,
  altText,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col rounded-xl border-2 p-5 max-w-2xl ${className}`}
    >
      <div className="flex justify-center items-center gap-4">
        <div>
          <Image
            src={imageSrc}
            alt={altText}
            height={80}
            width={80}
            className="rounded"
          />
        </div>
        <div className="text-2xl font-semibold">{title}</div>
      </div>

      <div className="mt-2 text-sm md:text-base mb-4">{description}</div>

      <div className="flex justify-center gap-4 mt-auto">
        <Link href={demoLink} target="_blank">
          <button className="btn btn-outline btn-secondary btn-sm font-bold border-2">
            View Demo
          </button>
        </Link>
        <Link href={repoLink} target="_blank">
          <button className="btn btn-outline btn-accent btn-sm font-bold border-2">
            View Code
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
