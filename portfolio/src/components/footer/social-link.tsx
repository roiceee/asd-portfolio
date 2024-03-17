import Image from "next/image";

interface SocialLinkProps {
  link: string;
  imageSrc: any;
  altText: string;
  size?: number
}

function SocialLink({ link, imageSrc, altText, size }: SocialLinkProps) {
  return (
    <a className="hover:scale-110" href={link} target="_blank">
      <Image src={imageSrc} alt={altText} height={size ? size : 30} width={size ? size : 30} />
    </a>
  );
}

export default SocialLink;
