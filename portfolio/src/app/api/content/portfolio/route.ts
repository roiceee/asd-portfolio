import { Portfolio } from "@/types/api/portfolio";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/portfolio`);
  const data: Portfolio = await res.json();

  // if null add empty string

  if (data.path === null) {
    data.path = "";
  }

  if (data.name === null) {
    data.name = "Lorem ipsum";
  }

  return data;
}
