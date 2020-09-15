import React from "react";
import {Link} from "react-router-dom"

export default function Error() {
  return <section className="error-page section">
    <div className="error-container">
      <h1>Oops! it's a dead end /</h1>
      <h1>ooh! awo olabika osembye</h1>
      <Link to="/" className="btn btn-primary"> back Home/ dayo Ewasokelwako</Link>
    </div>
  </section>;
}
