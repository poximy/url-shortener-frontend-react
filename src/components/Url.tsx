import React from "react";

const Url: React.FC = () => {
  return (
    <form>
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
