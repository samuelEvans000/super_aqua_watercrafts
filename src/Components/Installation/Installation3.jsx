import React,{useState, useEffect}  from "react";

const Installation3 = () => {

const [img, setImg]= useState()

const image = () =>{
  if(window.innerWidth < 800){
    setImg('assets/s32m.png')
  }else{
    setImg('assets/s32.png')
  }
}

useEffect(() => {
  image(); 
  window.addEventListener("resize", image); 
  
  return () => {
    window.removeEventListener("resize", image);
  };
}, []);


  return (
    <div className="siteName3">
      <div className="installTitle1">
        Navik Wallness LLP Chhatarpur ,Khajuraho. 20 kld
      </div>
      <img className="s31" src="/assets/s31.png" />
      <div className="installTitle1">
        Pink Villa Resort Meerut 15 kld STP Plant<br></br> STP Plant
        Installation photos
      </div>
      {img && <img src={img} alt="Responsive Image" />}
    </div>
  );
};

export default Installation3;
