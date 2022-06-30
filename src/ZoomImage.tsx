import React,{ useEffect, useRef } from "react";

export interface ImageProps{
    src:string,
    alt:string
}

const ZoomImage = (src:ImageProps ) => {
  const imgRef = useRef(null)

  useEffect(() => {
    let Drift;
    if (typeof window !== "undefined") {
      Drift = require("drift-zoom").default;
    }
    new Drift(imgRef.current, {
      zoomFactor: 4
    });
  }, []);

  const styles ={
    image :{
      transition:"all 1s ease-in-out",
      cursor:"crosshair",
      maxWidth:"50%",
      height:"auto"
    } as React.CSSProperties,
  }

  return (
    <div className="zoom-image">
      <img
        style={styles.image}
        ref={imgRef}
        src={src.src}
        data-zoom={src.src}
        alt="Zoom here :)"
      />
    </div>
  );
};

export default ZoomImage;
