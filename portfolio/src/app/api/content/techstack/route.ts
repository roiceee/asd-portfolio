export async function GET() {
  const techstackRes = await fetch(`${process.env.API_URL}/api/techstack`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const techstackData = await techstackRes.json();

  return techstackData;
}
