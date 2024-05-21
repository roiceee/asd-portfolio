import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const res = await fetch(
      `${process.env.STRAPI_URL}/api/portfolio-blog-archives`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_READONLY_TOKEN}`,
        },
        cache: "no-store"
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(undefined);
  }
}
