// {
// "id": 2,
// "created_at": "2024-03-18T15:51:09.000000Z",
// "updated_at": "2024-03-18T16:12:46.000000Z",
// "user_id": 1,
// "image_path": "http://localhost:8000/storage/techstack/IebTSSK3jA9P3IOyYaTWdwyFwJ1b6X1ttLxqLxUI.png",
// "name": "John Roice Aldezasheesh",
// "order": 4
// }

interface Techstack {
  id: number;
  created_at: string;
  updated_at: string;
  user_id: number;
  image_path: string;
  name: string;
  order: number;
}

export type { Techstack };
