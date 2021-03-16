import React, { useState } from "react";

interface IUrl {
  _id?: string;
  urlId?: string;
  url: string;
}

const Url: React.FC = () => {
  const [urlText, setUrlText] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!urlText) {
      alert("Insert Text!");
      return;
    }

    setUrlText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={urlText}
        placeholder="Url"
        onChange={(e) => setUrlText(e.target.value)}
      />
      <input type="submit" value="Minify Url" />
    </form>
  );
};

export default Url;
