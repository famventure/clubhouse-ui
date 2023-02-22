return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>}
        <div className="carousel-content-wrapper">

          {props.label.map(x => (<div className={props.category + " carousel-content"} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>{x.display.map(item => (<div key={item + x} className="Accordians" onClick={({ target }) => handleClick(target)}>{item}</div>))}</div>))}

        </div>
        {currentIndex < (length - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>}
      </div>
    </div>
  );


  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 &&
          <button onClick={prev} className="left-arrow">
            &lt;
          </button>}
        <div className="carousel-content-wrapper">
          <div className={props.category + " carousel-content"}>
            {props.label.map(x => (x.display.map(item => (<div key={item + x} className="Accordians" style={{ transform: `translateX(-${currentIndex * 100}%)` }} onClick={({ target }) => handleClick(target)}>{item}</div>))))}
          </div>
        </div>
        {currentIndex < (length - 1) &&
          <button onClick={next} className="right-arrow">
            &gt;
          </button>}
      </div>
    </div>
  );