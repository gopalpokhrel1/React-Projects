import React from "react";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="textsection">
          <h1 className="header">Step into Comfort, Stride with Style!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            nemo accusamus dolor id blanditiis? Molestias quasi ex velit tenetur
            dignissimos et alias maxime ducimus quaerat.
          </p>
           <div className="last">
          <button>Shop Now</button>
          <p>Category</p>
          </div>
        </div>

        <div className="photo">
            <img src="/images/photo.png" alt="Photo" />
        </div>
      </div>
    </>
  );
}
