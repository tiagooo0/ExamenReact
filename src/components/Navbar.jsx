import React from "react";

function Navbar({ count, incrementar, decrementar }) {
  return (
    <nav className="bg-transparent py-4 border-b border-white backdrop-filter backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center space-x-4">
          <a
            href="/"
            className="text-white text-2xl font-semibold tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Examen de APIs
          </a>
          <div className="text-white flex items-center space-x-2">
            <button
              onClick={decrementar}
              className="bg-white text-black px-2 py-1 rounded"
            >
              -
            </button>
            <p>{count}</p>
            <button
              onClick={incrementar}
              className="bg-white text-black px-2 py-1 rounded"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
