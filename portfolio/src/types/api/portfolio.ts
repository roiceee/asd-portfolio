// {
//     "id": 1,
//     "user_id": 2,
//     "created_at": "2024-03-17T03:05:18.000000Z",
//     "updated_at": "2024-03-17T03:05:18.000000Z",
//     "path": "http://localhost:8000/storage/portfolios/Gu9RIBtXd2Qs5XBkQxlxn1ZfFrKGTiXaYeEEnHtn.pdf",
//     "name": "AIM_Practice1_Villasis.pdf"
// }

interface Portfolio {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  path: string;
  name: string;
}

export type { Portfolio };
