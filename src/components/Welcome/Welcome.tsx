import { useEffect, useState } from "react";

export default function Welcome() {
  // const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const images = [
      "/images/bkgImage1.jpg",
      "/images/bkgImage2.jpg",
      "/images/bkgImage3.jpg",
      "/images/bkgImage4.jpg",
    ];

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    document.body.style.backgroundImage = `url(${randomImage})`;

    //  setBackgroundImage(randomImage);
  }, []);

  // const backgroundStyle = {
  //   backgroundImage: `url(${backgroundImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   height: "100vh",
  //   width: "100%",
  //   flex: 1,
  // };

  return (
    <>
      <div>
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
      </div>
    </>
  );
}
