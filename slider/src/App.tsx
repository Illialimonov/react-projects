import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageSlider from "./ImageSlider";

function App() {
  const imageUrls = [
    "https://cdn.mos.cms.futurecdn.net/uW9uHvW5LUYBaoZuSyEsXP-415-80.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3BfG2IcF-2BNXb5OUBWWfK7DAbOuuBrdQA&s",
    "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
  ];

  return <ImageSlider url={imageUrls} />;
}

export default App;
