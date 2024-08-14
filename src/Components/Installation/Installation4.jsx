import React, { useState, useEffect } from "react";

const Installation4 = () => {
  const [img, setImg] = useState();

  const image = () => {
    if (window.innerWidth < 800) {
      setImg("assets/s43m.png");
    } else {
      setImg("assets/s43.png");
    }
  };

  useEffect(() => {
    image();
    window.addEventListener("resize", image);

    return () => {
      window.removeEventListener("resize", image);
    };
  });

  return (
    <>
      <div className="siteName1">
        <div className="sn2">
          <div className="installTitle2">
            Eagle Nest Hotel Dharamshala 5 kld with TTP Unit STP
          </div>
          <div className="snImg">
            <img src="/assets/s41.png" />
          </div>
        </div>

        <div className="sn2">
          <div className="installTitle2">
            Chhatarpur farm house || Capacity - 1 KLD Sewage Treatment Plant
            Used for Garden
          </div>
          <div className="snImg">
            <img src="/assets/s42.png" />
          </div>
        </div>
      </div>

      <div className="installTitle2">
        Trees N Tiger Resort Tadoba Nagpur || 15 kld stp plant photos
      </div>
      {img && <img className="s43" src={img} />}

      <div className="siteName2">
        <div className="sn2">
          <div className="installTitle2">
            The Waxpol Hotel Kanha || Capacity - 3 KLD Sewage Treatment
            PlantUsed for Garden
          </div>
          <div className="snImg">
            <img src="/assets/s44.png" />
          </div>
        </div>

        <div className="sn2">
          <div className="installTitle2">
            The Waxpol Hotel Kanha || Capacity - 3 KLD Sewage Treatment
            PlantUsed for Garden
          </div>
          <div className="snImg">
            <img src="/assets/s45.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Installation4;
