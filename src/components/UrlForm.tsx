import React, { useState } from "react";

interface Props {
  submitAction: (urlData: string) => void;
}

interface IUrl {
  _id?: string;
  url: string;
}

const UrlForm: React.FC<Props> = ({ submitAction }) => {
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
    return url + data._id;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!urlText) {
      alert("Insert Text");
      return;
    }

    const newUrl = await postUrl();
    submitAction(newUrl);
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

export default UrlForm;