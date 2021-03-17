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
  const [aliasText, setAliasText] = useState<string>("");
  const [alias, setAlias] = useState<boolean>(false);

  // Send a request and gets back a IUrl with complete data
  const postUrl = async () => {
    const postData: IUrl = { url: urlText };
    const url = "http://127.0.0.1:8000/";

    const res = await fetch(url + (alias ? "?alias=true" : "?alias=false"), {
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

    if (alias && !aliasText) {
      alert("Insert an Alias");
      return;
    }

    const newUrl = await postUrl();
    submitAction(newUrl);
    setUrlText("");
    setAliasText("");
    setAlias(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="url-text">
        <label>Url</label>
        <input
          type="text"
          value={urlText}
          placeholder="Insert Url"
          onChange={(e) => setUrlText(e.target.value)}
        />
      </div>
      <div className="alias">
        <label>Alias</label>
        <input
          type="checkbox"
          checked={alias}
          onChange={(e) => setAlias(e.currentTarget.checked)}
        />
        {alias ? (
          <input
            type="text"
            value={aliasText}
            placeholder="Insert Alias"
            onChange={(e) => setAliasText(e.target.value)}
          />
        ) : (
          ""
        )}
      </div>
      <input type="submit" value="Minify Url" />
    </form>
  );
};

export default UrlForm;
