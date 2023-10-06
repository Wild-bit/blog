import React from "react";
import { getAssetsFile } from "../utils/utils";
function Footer() {
  return (
    <footer>
      <img src={getAssetsFile("logo.png")} alt="" />
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
}

export default Footer;
