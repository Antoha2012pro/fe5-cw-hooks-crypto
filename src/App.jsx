import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocalStorage } from "./shared/hooks/useLocalStorage";
import Header from "./components/Header";
import CoinCard from "./components/CoinCard";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useLocalStorage("FAVORITES_COINS", []);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
      );
      if (!response.ok) {
        throw new Error("Не вдалося завантажити дані");
      }

      const data = await response.json();

      setCoins(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favorite) => favorite !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-3">
        {coins.map((coin) => (
          <CoinCard
            key={coin.id}
            coin={coin}
            isFavorite={favorites.includes(coin.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
