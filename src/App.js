import React, { useState, useEffect } from 'react';
import tripData from "./stub_data.json";
import './App.css';

function handleClick(el) {
  el.classList.toggle('Active');
}

function Carousel(props, label) {
  const children = props.slice();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  useEffect(() => {
    setLength(children.length)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            {"("}
          </button>}
        <div className="carousel-content-wrapper">
          <div className={label + " carousel-content"}>

          {children.map(
              item => (
                <div key={item.id + " - " + item.label} className="Accordians" style={{ transform: `translateX(-${currentIndex * 103.5}%)` }} onClick={({ target }) => handleClick(target)}>
                  {
                    item.label
                  }
                </div>
              )
            )}

          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={next} className="right-arrow">
          {")"}
          </button>}
      </div>
    </div>
  );
}

function DestinationCarousel(props) {
  const children = props.slice();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  useEffect(() => {
    setLength(children.length)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>}
        <div className="carousel-content-wrapper">
          <div className={"Destination carousel-content"}>

          {children.map(
              item => (
                <div key={item.id + item.country} className="DestAccordians Accordians" style={{ transform: `translateX(-${currentIndex * 103.5}%)` }} onClick={({ target }) => handleClick(target)}>
                  {<p>{item.label}</p>}
                  {<p>{item.description}</p>}
                  {Carousel(item.acommodation, "Accomodation")}
                </div>
              )
            )}

          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>}
      </div>
    </div>
  );
}

function App() {

  return (
    <div className="App">

      <header className="App-header">
        header
      </header>

      <div>
        {DestinationCarousel(tripData)}
      </div>

      <footer className="App-footer">
        footer
      </footer>

    </div>
  );
}

export default App;
