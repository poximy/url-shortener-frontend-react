import React from "react";
import Url from "./components/Url";

const App: React.FC = () => {
  return (
    <>
      <header className="mt-12 mb-20 text-center">
        <h1 className="text-green-500 text-bold text-5xl">Minifiy URL</h1>
      </header>
      <Url />
    </>
  );
};

export default App;
