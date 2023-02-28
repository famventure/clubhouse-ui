import React from 'react';
import './App.css';


class AccomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      accomData: [],
      destBoxExpanded: false,
      currentIndex: 0,
      length: 0,
      destID: props.destID,
    };
  }

  componentDidMount() {
    fetch("https://xryp-e5xj-oseo.n7.xano.io/api:-VCn350s/get-all-curatedhotels-4-destid?recordid=" + this.state.destID, {'mode': 'no-cors'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            accomData: result.returnResult1.slice(),
            length: result.returnResult1.count,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  toggleDiv = (e) => {
    this.setState({
      destBoxExpanded: !this.state.destBoxExpanded,
    })
    e.stopPropagation();
  };

  next = (e) => {
    if (this.state.currentIndex < (this.state.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      })
    }
    e.stopPropagation();
  }

  prev(e) {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      })
    }
    e.stopPropagation();
  }


  render() {
    const { error, isLoaded, tripData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {this.state.currentIndex > 0 &&
              <button onClick={(e) => this.prev(e)} className="left-arrow">
                {"<"}
              </button>}
            <div className="carousel-content-wrapper">
              <div className={"Accordians carousel-content"}>

                {this.state.accomData.map(
                  item => (
                    <div key={item.id + " - " + item.label} className={this.state.acommBoxExpanded ? "Active AccomAccordiansHeader Accordians" : "AccomAccordiansHeader Accordians"} style={{ transform: `translateX(-${this.state.currentIndex * 103.5}%)` }} onClick={(e) => this.toggleDiv(e)}>
                      {
                        item.label
                      }
                    </div>
                  )
                )}

              </div>
            </div>
            {this.state.currentIndex < (this.state.length - 1) &&
              <button onClick={(e) => this.next(e)} className="right-arrow">
                {">"}
              </button>}
          </div>
        </div>
      );
    }
  }
}

class DestCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tripData: [],
      destBoxExpanded: false,
      currentIndex: 0,
      length: 0,
    };
  }

  componentDidMount() {
    fetch("https://xryp-e5xj-oseo.n7.xano.io/api:-VCn350s/destinations_list")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tripData: result.slice(),
            length: result.length,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };

  toggleDiv = (e) => {
    this.setState({
      destBoxExpanded: !this.state.destBoxExpanded,
    })
    e.stopPropagation();
  };

  next = (e) => {
    if (this.state.currentIndex < (this.state.length - 1)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      })
    }
    e.stopPropagation();
  }

  prev(e) {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      })
    }
    e.stopPropagation();
  }

  render() {
    const { error, isLoaded, tripData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {this.state.currentIndex > 0 &&
              <button onClick={(e) => this.prev(e)} className="left-arrow">
                &lt;
              </button>}
            <div className="carousel-content-wrapper">
              <div className={"Destination carousel-content"}>

                {tripData.map(
                  item => (
                    <div key={item.id} className={this.state.destBoxExpanded ? "Active DestAccordians Accordians" : "DestAccordians Accordians"} style={{ transform: `translateX(-${this.state.currentIndex * 103.5}%)` }} onClick={(e) => this.toggleDiv(e)}>
                      {<div key={item.id + item.City} className="DestAccordiansHeader">{item.Name}</div>}
                      {<div key={item.id + item.Neighborhood} className="DestAccordiansTagline">{item.Neighborhood}</div>}
                      <ul>
                        {Object.entries(item.bulletPoints).map(([key, value]) => (
                          <li key={key}>"{value}"</li>
                        ))}
                      </ul>
                      <AccomCarousel destID={item.id} />
                    </div>
                  )
                )}

              </div>
            </div>
            {this.state.currentIndex < (this.state.length - 1) &&
              <button onClick={(e) => this.next(e)} className="right-arrow">
                &gt;
              </button>}
          </div>
        </div>
      );
    }
  }

}

function App() {

  return (
    <div className="App">

      <header className="App-header">
        header
      </header>

      <div>
        <DestCarousel />
      </div>

      <footer className="App-footer">
        footer
      </footer>

    </div>
  );
}

export default App;
