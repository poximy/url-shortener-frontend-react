import React, { useState } from "react";
import UrlForm from "./UrlForm";

const Url: React.FC = () => {
  const [urlCreated, setUrlCreated] = useState<string>("");

  return (
    <main>
      <UrlForm submitAction={(urlData) => setUrlCreated(urlData)} />
      {urlCreated ? <p>{urlCreated}</p> : ""}
    </main>
  );
};

export default Url;
