import Image from "next/image";

interface CardProps {
  imageSrc: any;
  className?: string;
  label: string;
  altText: string;
}

function TechstackCard({ imageSrc, className, label, altText}: CardProps) {
  return (
    <div className={`flex-col align-bot` + className}>
      <div className="flex justify-center">
          <Image
            src={imageSrc}
            height={65}
            width={65}
            alt={altText}
            className="my-0"
            
          />
      </div>
      <div className="text-base mt-2">{label}</div>
    </div>
  );
}

export default TechstackCard;
