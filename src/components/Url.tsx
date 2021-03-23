import React, { useState } from "react";
import UrlForm from "./UrlForm";

const Url: React.FC = () => {
  const [urlCreated, setUrlCreated] = useState<string>("");

  return (
    <main>
      <UrlForm submitAction={(urlData) => setUrlCreated(urlData)} />
      {urlCreated ? (
        <>
          <p className="text-center text-white text-xl py-10">{urlCreated}</p>
          <button
            className="mx-auto block px-3 py-1 font-bold text-xl text-white rounded bg-green-500 hover:bg-green-400"
            onClick={() => navigator.clipboard.writeText(urlCreated)}
          >
            COPY
          </button>
        </>
      ) : (
        ""
      )}
    </main>
  );
};

export default Url;
