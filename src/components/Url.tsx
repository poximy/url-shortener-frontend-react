import React, { useState } from "react";

interface IUrl {
  _id?: string;
  urlId?: string;
  url: string;
}

const Url: React.FC = () => {
  const [urlText, setUrlText] = useState<string>("");

  // Send a request and gets back a IUrl with complete data
  const postUrl = async () => {
    const postData: IUrl = { url: urlText };
    const url = "http://127.0.0.1:8000/";

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const data: IUrl = await res.json();
    data.urlId = url + data._id;
    return data;
  };

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
