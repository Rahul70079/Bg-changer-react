import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("white");
  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "black", "pink"];
  return (
    <div
      style={{
        height: "100vh",  
        width: "100vw",    
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "background 0.5s ease",
      }}
    >
      <h1 style={{ color: bgColor === "black" ? "white" : "black" }}>
        Full Display Background Changer
      </h1>
      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setBgColor(color)}
            style={{
              padding: "10px 20px",
              margin: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: color,
              color: color === "yellow" || color === "pink" ? "black" : "white",
              fontWeight: "bold",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            {color.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
