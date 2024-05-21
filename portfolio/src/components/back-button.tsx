import Link from "next/link";

interface Props {
  text?: string;
  className?: string;
}

export default function BackButton({ text, className }: Props) {
  return (
    <Link href={"/blog/1"} className={className}>
      {text ? (
        text
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 hover:text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      )}
    </Link>
  );
}
