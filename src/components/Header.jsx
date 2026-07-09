import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4 px-6 shadow-md mb-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide flex items-center gap-2">
          <span className="text-emerald-400">🪙</span> CryptoTicker
        </h1>
        <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
          Live Data
        </span>
      </div>
    </header>
  );
};

export default Header;
