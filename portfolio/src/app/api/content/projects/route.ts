export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/projects`);
  const data = await res.json();

  return data;
}
