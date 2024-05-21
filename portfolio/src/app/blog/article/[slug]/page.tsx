import BackButton from "@/components/back-button";
import { ArticleResponse } from "@/types/articletypes";
import { formatDate } from "@/util/date";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/article/${params.slug}`,
    { next: { revalidate: 180 } }
  );

  const data: ArticleResponse | undefined = await res.json();

  if (!data) {
    return {};
  }

  return {
    title: data.data.attributes.title,
    description: data.data.attributes.excerpt,
    date: data.data.attributes.date_published,
  } as Metadata;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/article/${params.slug}`,
    { next: { revalidate: 180 } }
  );

  const data: ArticleResponse | undefined = await res.json();

  if (!data) {
    return <div>Not found</div>;
  }

  return (
    <main className="prose max-w-2xl mx-auto my-12">
      <section className="mb-8">
        <BackButton />
      </section>

      <h1>{data.data.attributes.title}</h1>
      <section className="mb-12">
        <h4>{data.data.attributes.author}</h4>
        <p>Published on {formatDate(data.data.attributes.date_published)}</p>
      </section>
      <section>
        <BlocksRenderer content={data.data.attributes.content} />
      </section>
      {data.data.attributes.portfolio_blog_tags.data.length !== 0 && (
        <section>
          <h3>
            Tags:
            {data.data.attributes.portfolio_blog_tags.data.map((tag, i) => (
              <span key={tag.id} className="mx-1 badge badge-ghost">
                {tag.attributes.tag}
              </span>
            ))}
          </h3>
        </section>
      )}
    </main>
  );
}
