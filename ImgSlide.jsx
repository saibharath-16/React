import { useState } from "react";

const images = [
    "https://tse1.mm.bing.net/th?id=OIP.UYagQDMo7CCbBLXOPB5etAHaHa&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIP.Z0PLkCGpEDNcan8n3m-OIAHaFk&pid=Api&P=0&h=180" ,
    "https://tse1.mm.bing.net/th?id=OIP.qNJ-3o_aLdtFRswCO9VLOgHaEK&pid=Api&P=0&h=180" ,
    "https://tse3.mm.bing.net/th?id=OIP.7LNXRUIblBnFCJ_LQni8IwHaFj&pid=Api&P=0&h=180",
];

const ImgSlide=()=>{
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="slider">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image}>
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
export default ImgSlide;