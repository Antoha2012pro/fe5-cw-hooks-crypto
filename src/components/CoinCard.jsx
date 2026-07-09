import React from "react";

const CoinCard = ({ coin, isFavorite, onToggleFavorite }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <div className="bg-slate-900 rounded-xl p-5 shadow-sm border border-slate-700 flex flex-col justify-between hover:border-slate-600 transition-all">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <img className="size-8" src={coin.image} alt={coin.name} />
          <div>
            <h3 className="text-white font-semibold">{coin.name}</h3>
            <span className="text-xs text-slate-400 uppercase font-mono">
              {coin.symbol}
            </span>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(coin.id)}
          className={`text-xl transition-all duration-400 ${
            isFavorite
              ? "text-amber-400"
              : "text-slate-500 hover:text-slate-400"
          }`}
        >
          ★
        </button>
      </div>
      <div className="mt-2">
        <p className="text-2xl font-bold text-white">
          ${coin.current_price.toLocaleString()}
        </p>
        <p
          className={`text-sm font-medium mt-1 ${
            isPositive ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {isPositive ? "▲" : "▼"}{" "}
          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
