// {
// "id": 2,
// "created_at": "2024-03-16T17:05:56.000000Z",
// "updated_at": "2024-03-17T03:02:44.000000Z",
// "user_id": 2,
// "name": "John Roice Aldeza",
// "title": "kl;kl;",
// "description": "kl;kl;kl;",
// "linkedin": "jhljkl",
// "github": "jkljkl",
// "mail": "jkljkljkl",
// "image_name": "Event Thumbnail 2.png",
// "image_path": "http://localhost:8000/storage/images/rBj0kyWstS9Sz5QBee3VuLggUQncMQZdlYYoQ5pJ.png"

// }

interface BasicInfo {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  name: string;
  title: string;
  description: string;
  linkedin: string;
  github: string;
  mail: string;
  image_name: string;
  image_path: string;
}

export type { BasicInfo };
