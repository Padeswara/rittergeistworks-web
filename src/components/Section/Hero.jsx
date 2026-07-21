import React, { useState } from "react";

import user from "../../assets/images/user.png";
import user1 from "../../assets/images/user-1.png";
import user2 from "../../assets/images/user-2.png";
import user3 from "../../assets/images/user-3.png";

function Hero() {
  const images = [user, user1, user2, user3];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full h-screen bg-[#09090b] pt-30">
      <div className="w-full h-full p-20">
        <div className="w-auto h-full px-40 flex justify-center items-center gap-10">
          <div className="w-auto h-1/2 flex justify-center items-center">
          <img src={images[currentImage]} alt="Hero" onClick={changeImage} className="w-full max-w-150 cursor-pointer transition-transform duration-300 hover:scale-110"/>
          </div>

          <div>
            <h1 className="text-6xl font-bold leading-tight text-white font-lexend">
              Welcome to{" "}<span className="text-[#7c191e]">Rittergeistworks.</span>
            </h1>

            <h3 className="mt-2 max-w-xl text-lg leading-8 text-gray-300 font-lexend">
              Where creativity meets code. I design and develop immersive web
              experiences with a focus on performance, accessibility, and
              timeless aesthetics.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;