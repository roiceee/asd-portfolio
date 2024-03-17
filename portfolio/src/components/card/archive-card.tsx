"use client";
import { ArchivePreviewPage } from "@/types/archivetypes";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  data: ArchivePreviewPage;
  className?: string;
}

export default function ArchiveCard({ data, className }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={`prose my-12 md:my-0 h-fit md:border-l pl-8 ${className}`}
    >
      <h2>Archive</h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 md:gap-x-10">
        <Link href={`${pathname}`}>All</Link>
        {data.data.map((archive) => (
          <Link
            key={`archive-${archive.id}`}
            href={`${pathname}?archive=${archive.id}`}
          >
            {archive.attributes.archive}
          </Link>
        ))}
      </div>
    </aside>
  );
}
