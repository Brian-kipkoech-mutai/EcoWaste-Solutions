import React from "react";

function TrashCan
    ({ children }) {
  return (
    <div style={{ position: "relative", width: "300px", height: "350px" }}>
      <svg width="300" height="350" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 10 40 
             Q 150 10, 290 40 
             L 240 320 
             Q 150 350, 60 320 
             Z"
    
                  strokeWidth="1"
        className=" fill-slate-100"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "50px",
          width: "70%",
        //   textAlign: "center",
          color: "black",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default TrashCan;
