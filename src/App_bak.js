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
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <div className="carousel-content-wrapper">
          <div className={props.category + " carousel-content"} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {props.label.map(x => x.display.map(item => <div key={item + x} className="Accordians" onClick={({ target }) => handleClick(target)}>{item}</div>))}
          </div>
        </div>
        <button onClick={next} className="right-arrow">
          &gt;
        </button>
      </div>
    </div>
  );
}

function App() {
  let destination = {
    label: "Destination",
    display: ["Barcelona - Spain"],
  };
  let acommodation = {
    label: "Accomodation",
    display: ["Cotton House Inn"],
  };
  let entertainment = {
    label: "Entertainment",
    display: ["Sagrada Familia Guided Tour", "Mercado de la Boqueria", "Picasso Museum", "Spotify Camp Nou - FC Barcelona vs some other soccer team"],
  };


  let destination2 = {
    category: "Destination",
    label:
      [
        {
          display: ["Barcelona - Spain"],
        },
        {
          display: ["Lisbon - Portugal"],
        },
        {
          display: ["Casablanca - Morocco"],
        },
      ]
  };

  return (
    <div className="App">

      <header className="App-header">
        header
      </header>

      {Carousel(destination2)}

      <footer className="App-footer">
        footer
      </footer>

    </div>
  );
}

export default App;
