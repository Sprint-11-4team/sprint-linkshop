import React, { useState, useEffect } from "react";
import "../banner.css";
import { bannerDesktop, bannerPhone, bannerTablet } from "../../images/icons";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState("");

  useEffect(() => {
    const updateBannerImage = () => {
      const width = window.innerWidth;

      if (width >= 1920) {
        setBannerImage(bannerDesktop);
      } else if (width >= 744) {
        setBannerImage(bannerTablet);
      } else {
        setBannerImage(bannerPhone);
      }
    };

    updateBannerImage();

    window.addEventListener("resize", updateBannerImage);

    return () => window.removeEventListener("resize", updateBannerImage);
  }, []);

  return (
    <div className="banner">
      <img src={bannerImage} alt="상단 배너" className="banner-image" />
    </div>
  );
};

export default Banner;
