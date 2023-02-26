import React, { useState, useEffect } from 'react';
import tripData from "./stub_data.json";
import './App.css';

function Carousel(props, label) {

  const children = props.slice();

  const [acommBoxExpanded, setAccomBoxExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const toggleDiv = (e) => {
    setAccomBoxExpanded(!acommBoxExpanded);
    e.stopPropagation();
  };

  const next = (e) => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
    e.stopPropagation();
  }

  const prev = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
    e.stopPropagation();
  }

  useEffect(() => {
    setLength(children.length)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={(e) => prev(e)} className="left-arrow">
            {"("}
          </button>}
        <div className="carousel-content-wrapper">
          <div className={label + " carousel-content"}>

          {children.map(
              item => (
                <div key={item.id + " - " + item.label} className={acommBoxExpanded ? "Active Accordians" : "Accordians"} style={{ transform: `translateX(-${currentIndex * 103.5}%)` }} onClick={(e) => toggleDiv(e)}>
                  {
                    item.label
                  }
                </div>
              )
            )}

          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={(e) => next(e)} className="right-arrow">
          {")"}
          </button>}
      </div>
    </div>
  );
}

function DestinationCarousel(props) {

  const children = props.slice();

  const [destBoxExpanded, setDestBoxExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const toggleDiv = (e) => {
    setDestBoxExpanded(!destBoxExpanded );
    e.stopPropagation();
  };

  const next = (e) => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => (prevState + 1))
    }
    e.stopPropagation();
  }

  const prev = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
    e.stopPropagation();
  }

  useEffect(() => {
    setLength(children.length)
  }, [children])

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={(e) => prev(e)} className="left-arrow">
            &lt;
          </button>}
        <div className="carousel-content-wrapper">
          <div className={"Destination carousel-content"}>

          {children.map(
              item => (
                <div key={item.id + item.country} className={destBoxExpanded ? "Active DestAccordians Accordians" : "DestAccordians Accordians"} style={{ transform: `translateX(-${currentIndex * 103.5}%)` }} onClick={(e) => toggleDiv(e)}>
                  {<div className="DestAccordiansHeader">{item.label}</div>}
                  {<div className="DestAccordiansTagline">{item.description + " " + item.label}</div>}
                  {<div className="DestAccordiansBullets">{item.description + " " + item.label + " "  + item.description + " " + item.label + " "  +  item.description + " " + item.label + " "  +  item.description + " " + item.label + " "  +  item.description + " " + item.label + " "  +  item.description}</div>}
                  {Carousel(item.acommodation, "Accomodation")}
                </div>
              )
            )}

          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={(e) => next(e)} className="right-arrow">
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
