import React from "react";
import Carousel from "./components/carousel/Carousel";



function App() {
  const slides = [
    "https://picsum.photos/id/1032/900/400",
    "https://picsum.photos/id/1033/900/400",
    "https://picsum.photos/id/1037/900/400",
    "https://picsum.photos/id/1035/900/400",
    "https://picsum.photos/id/1036/900/400",
  ];

  return (
    <div>
      <div className="container">
     <Carousel slides={slides} interval={3000} controls={true} indicators={true} autoPlay={false}  />
     
      </div>
     
    </div>
  );
}

export default App;
