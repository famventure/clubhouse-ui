import React, { useState, useEffect } from 'react';
import './App.css';

function handleClick(el) {
  el.classList.toggle('Active');
}

function Carousel(props) {
  const children = props.label.slice();

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
          <div className={props.category + " carousel-content"}>
            {props.label.map(
              x => (x.display.map(
                item => (<div key={item + x} className="Accordians" style={{ transform: `translateX(-${currentIndex * 103.5}%)` }} onClick={({ target }) => handleClick(target)}>
                  {item}
                </div>)
              ))
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

  let destination = {
    category: "Destination",
    label:
      [
        {
          display: ["Barcelona - Spain"],
          accomodation: ["Cotton House Inn", "Hotel Barcelona Dos", "Hotel Barcelona 3"],
        },
        {
          display: ["Lisbon - Portugal"],
          accomodation: ["Portugal House Inn", "Hotel Portugal Dos"],
        },
        {
          display: ["Casablanca - Morocco"],
          accomodation: ["Casablanca House Inn", "Hotel Casablanca Dos", "Hotel Casablanca 3", "Casablanca 4 hotel"],
        },
      ]
  };
  let acommodation = {
    category: "Accomodation",
    label:
      [
        {
          display: ["Cotton House Inn"],
        },
        {
          display: ["Hotel Dos"],
        },
        {
          display: ["Hotel 3"],
        },
      ]
  };
  let entertainment = {
    category: "Entertainment",
    label:
      [
        {
          display: ["Sagrada Familia Guided Tour", "Mercado de la Boqueria", "Picasso Museum", "Spotify Camp Nou - FC Barcelona vs some other soccer team"],
        },
      ]
  };

  return (
    <div className="App">

      <header className="App-header">
        header
      </header>

      <div>
        {Carousel(destination)}
        {Carousel(acommodation)}
        {Carousel(entertainment)}
      </div>

      <footer className="App-footer">
        footer
      </footer>

    </div>
  );
}

export default App;
