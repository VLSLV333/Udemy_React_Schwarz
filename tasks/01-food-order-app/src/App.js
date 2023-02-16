import React from "react";
import Header from "./Components/Header/Header";
import './App.css'
import Main from "./Components/Main/Main";

function App() {
  return (
    <React.Fragment>
      {/* <div className="black screen">
      </div>
      <div className="card    modal cart">
        <div className="ordered item">
          <div>
            <h2>Food name</h2>
            <p className="inline-block">Price</p>
            <p className="inline-block">Quantity</p>
          </div>
          <div>
            <button>-</button>
            <button>+</button>
          </div>
          <hr></hr>
        </div>
        <div className="total">
          <h2>Total amount</h2>
          <p>$ total price</p>
        </div>
        <button>Close</button>
        <button>Order</button>
      </div> */}
      <Header/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
