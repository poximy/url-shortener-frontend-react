import React, { useState } from "react";

interface Props {
  submitAction: (urlData: string) => void;
}

interface textProps {
  urlText: string;
  urlTextChange: (urlText: string) => void;
}

interface IUrl {
  _id?: string;
  url: string;
}

const UrlText: React.FC<textProps> = ({ urlText, urlTextChange }) => {
  return (
    <input
      className="rounded-l bg-gray-300 px-6 py-3"
      type="text"
      value={urlText}
      placeholder="Insert Url"
      onChange={(e) => urlTextChange(e.target.value)}
    />
  );
};

const UrlForm: React.FC<Props> = ({ submitAction }) => {
  const [urlText, setUrlText] = useState<string>("");

  // Send a request and gets back a IUrl with complete data
  const postUrl = async () => {
    const postData: IUrl = { url: urlText};
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
      alert("Insert Url");
      return;
    }

    const newUrl = await postUrl();
    submitAction(newUrl);
    setUrlText("");
  };

  return (
    <form onSubmit={onSubmit} className="justify-center flex">
      <UrlText urlText={urlText} urlTextChange={(text) => setUrlText(text)} />
      <button
        className="text-xl bg-green-500 hover:bg-green-400 rounded-r uppercase px-6 py-3 text-white font-bold"
        type="submit"
      >
        MINIFY
      </button>
    </form>
  );
};

export default UrlForm;
