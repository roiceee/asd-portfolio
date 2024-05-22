import BackButton from "@/components/back-button";
import ArchiveCard from "@/components/card/archive-card";
import BlogCard from "@/components/card/blog-card";
import { ArchivePreviewPage } from "@/types/archivetypes";
import { BlogPreviewPage } from "@/types/blogtypes";
import Link from "next/link";

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: Props) {
  const generateURL = () => {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_URL}/api/blog/${params.slug}`
    );

    if (searchParams.archive) {
      const archive = Array.isArray(searchParams.archive)
        ? searchParams.archive[0]
        : searchParams.archive;
      url.searchParams.append("archive", archive);
    }

    return url;
  };

  const res: Response | undefined = await fetch(generateURL().toString(), {
    cache: "no-store",
  });

  const data: BlogPreviewPage | undefined = await res.json();

  const archiveRes: Response | undefined = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/blog/archives`,
    { cache: "no-store" }
  );

  const archiveData: ArchivePreviewPage | undefined = await archiveRes.json();

  if (!data || !archiveData || !data.data) {
    return (
      <section className=" md:flex gap-12">
        <section className="prose">
          <h2>No blog posts found.</h2>
          <BackButton text="Go Back" className="btn btn-sm" />
        </section>
      </section>
    );
  }

  if (data.data.length === 0) {
    // return no post found with button to go back
    return (
      <section className=" md:flex gap-12">
        <section className="prose">
          <h2>No blog posts found.</h2>
          <BackButton text="Go Back" className="btn btn-sm" />
        </section>
        <ArchiveCard data={archiveData} />
      </section>
    );
  }

  return (
    <main>
      {searchParams.archive && (
        <div className="mb-6 flex items-center gap-2 text-xl">
          <div>Archive:</div>
          {archiveData.data
            .filter((data) => {
              return data.id === Number(searchParams.archive);
            })
            .map((data) => {
              return (
                <h3 className="font-semibold" key={data.id}>
                  {data.attributes.archive}
                </h3>
              );
            })}
        </div>
      )}
      <section className=" md:flex gap-12">
        <section>
          <section>
            {data.data.map((post) => (
              <div key={`blog-${post.id}`}>
                <BlogCard
                  title={post.attributes.title}
                  date={new Date(post.attributes.date_published)}
                  excerpt={post.attributes.excerpt}
                  tags={post.attributes.portfolio_blog_tags.data.map(
                    (tag) => tag.attributes.tag
                  )}
                  url={`/blog/article/${post.id}`}
                />
                <hr className="my-8" />
              </div>
            ))}
          </section>
          <div>
            <div className="flex w-full text-primary text-xl font-bold">
              {Number(params.slug) > 1 && (
                <div className="mr-auto">
                  <Link
                    href={`/blog/${Number(params.slug) - 1}${
                      searchParams.archive
                        ? `?archive=${searchParams.archive}`
                        : ""
                    }`}
                  >
                    <span>Previous</span>
                  </Link>
                </div>
              )}
              {Number(params.slug) < data.meta.pagination.pageCount && (
                <div className="ml-auto">
                  <Link
                    href={`/blog/${Number(params.slug) + 1}${
                      searchParams.archive
                        ? `?archive=${searchParams.archive}`
                        : ""
                    }`}
                  >
                    <span>Next</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        <ArchiveCard data={archiveData} />
      </section>
    </main>
  );
}
