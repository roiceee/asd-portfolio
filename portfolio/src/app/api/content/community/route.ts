export async function GET() {
  const data = await fetch(`${process.env.API_URL}/api/community`);
  const res = await data.json();

  return res;
}
