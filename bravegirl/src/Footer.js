import React from "react";
import { getFooterCopy, getFullYear } from './utils';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="App-footer">
        <div className="row">
            <h4> BraveGirls</h4>
            <p className="footer-text">&copy; {getFullYear()}&nbsp;
                  {getFooterCopy(true)}. All Rights Reserved.</p>
          </div>
        </div>
  );
}