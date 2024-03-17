import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  //get blog article data

  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/portfolio-blogs/${params.slug}?populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
          "Content-Type": "application/json",
        }
      }
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(undefined);
  }
}
