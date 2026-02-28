import React from "react";
import sum from "./sum";

export default function App() {
  const result = sum(8, 9);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Calculator</h1>
      <p> <strong>{result}</strong></p>
    </div>
  );
}