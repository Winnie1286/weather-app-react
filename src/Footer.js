import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="foot">
        Coded by Winnie Wong and is open-sourced on
        <a
          href="https://github.com/Winnie1286/Weather-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub.
        </a>
        Hosted on Netlify.
      </p>
    </div>
  );
}
