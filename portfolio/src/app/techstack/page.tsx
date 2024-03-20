import PageSection from "@/components/containers/page-section";
import TechStack from "@/components/techstack-card/techstack";
import { Techstack } from "@/types/api/techstack";

export default async function Page() {
  const techstack = await fetch(`${process.env.API_URL}/api/techstack`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const techstackData: Techstack[] = await techstack.json();
  return (
    <main className="text-center">
      <PageSection title="Techstack">
        {/* just a heading that states that i use these stuff regularly */}

        <div className="my-4 text-xl">
          I use these technologies on a case to case basis.
        </div>

        <TechStack techstack={techstackData} />
      </PageSection>
    </main>
  );
}
