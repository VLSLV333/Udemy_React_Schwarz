import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="black screen">
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
      </div>
      <header className="background={ the food photo on the video }">
        <div>
          <h2>React Meals</h2>
          <button>Your cart</button>
        </div>
      </header>
      <main>
        <section className="card">
          <h1>Food</h1>
          <p>Choose your favorite meal...</p>
          <p>All our meals are coocked...</p>
        </section>
        <section className="card">
          <div className="foodElement">
            <div className="foodDescription">
              <h2>Name</h2>
              <p>Description</p>
              <p>Price</p>
            </div>
            <div className="Cart adding functionality">
              <label>Amount</label>
              <input min={0} max={100} step={1} type={"number"}></input>
              <button className="add to cart">+Add</button>
              <hr></hr>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
