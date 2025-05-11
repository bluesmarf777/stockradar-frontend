import type { NextApiRequest, NextApiResponse } from "next";

type CoinData = {
  name: string;
  symbol: string;
  price: number;
  change: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch("https://stockrader-backend.onrender.com/api/coin-alerts");
  const data = await response.json();
  res.status(200).json(data);
}
