import { useEffect, useState } from "react";

type CoinData = {
  name: string;
  symbol: string;
  price: number;
  change: number;
};

export default function Home() {
  const [coins, setCoins] = useState<CoinData[]>([]);

  useEffect(() => {
    fetch("/api/alerts")
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return (
    <div className="min-h-screen bg-white text-black px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">🔥 급등·급락 코인</h1>
      {coins.map((coin, index) => (
        <div
          key={index}
          className={`rounded-xl p-4 mb-4 shadow-md ${coin.change > 0 ? "bg-red-100" : "bg-blue-100"}`}
        >
          <div className="text-lg font-semibold">{coin.name} ({coin.symbol})</div>
          <div>현재가: {coin.price.toLocaleString()}원</div>
          <div className={`font-bold ${coin.change > 0 ? "text-red-600" : "text-blue-600"}`}>
            {coin.change > 0 ? "▲" : "▼"} {coin.change}%
          </div>
        </div>
      ))}
    </div>
  );
}
