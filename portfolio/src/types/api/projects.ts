// [
//     {
//         "id": 2,
//         "created_at": "2024-03-17T03:22:37.000000Z",
//         "updated_at": "2024-03-17T03:22:37.000000Z",
//         "user_id": 2,
//         "title": "asdfasdf",
//         "description": "zxcvzxcv",
//         "demo_link": "asdfasdf",
//         "github_link": "zxcvzxcvasdf"
//     }
// ]

interface Project {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  demo_link: string;
  github_link: string;
  image_path: string;
  image_name: string;
}

export type { Project };
