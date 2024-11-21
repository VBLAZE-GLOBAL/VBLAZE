import React from "react";
import "./BrandLogoSlider.css"; // Make sure to include the CSS for styling

const BrandLogoSlider = () => {
  return (
    <div className="logos">
      <div className="logo_items">
        {/* Random Logo URLs from logoipsum */}
        <img src="https://logoipsum.com/logo/1" alt="Brand 1" />
        <img src="https://logoipsum.com/logo/2" alt="Brand 2" />
        <img src="https://logoipsum.com/logo/3" alt="Brand 3" />
        <img src="https://logoipsum.com/logo/4" alt="Brand 4" />
        <img src="https://logoipsum.com/logo/5" alt="Brand 5" />
        <img src="https://logoipsum.com/logo/6" alt="Brand 6" />
        <img src="https://logoipsum.com/logo/7" alt="Brand 7" />
        <img src="https://logoipsum.com/logo/8" alt="Brand 8" />
        <img src="https://logoipsum.com/logo/9" alt="Brand 9" />
        <img src="https://logoipsum.com/logo/10" alt="Brand 10" />
        <img src="https://logoipsum.com/logo/11" alt="Brand 11" />
        <img src="https://logoipsum.com/logo/12" alt="Brand 12" />
      </div>
    </div>
  );
};

export default BrandLogoSlider;
