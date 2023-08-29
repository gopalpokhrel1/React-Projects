import React from "react";

export default function Navigation() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
        </ul>

        <button>Login</button>
      </nav>
    </>
  );
}
