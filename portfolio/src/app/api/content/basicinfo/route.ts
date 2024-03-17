import { BasicInfo } from "@/types/api/basic-info";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/basicinfo`);
  const data: BasicInfo = await res.json();

  //if a field is empty or null, put lorem

  if (data.name === "" || !data.name) {
    data.name = "lorem ipsum";
  }
  if (data.title === "" || !data.name) {
    data.title = "lorem ipsum";
  }
  if (data.description === "" || !data.name) {
    data.description = "lorem ipsum";
  }
  if (data.linkedin === "" || !data.name) {
    data.linkedin = "lorem ipsum";
  }
  if (data.github === "" || !data.name) {
    data.github = "lorem ipsum";
  }
  if (data.mail === "" || !data.name) {
    data.mail = "lorem ipsum";
  }
  if (data.image_name === "" || !data.name) {
    data.image_name = "lorem ipsum";
  }
  if (data.image_path === "" || !data.name) {
    data.image_path = "lorem ipsum";
  }

  return data;
}
