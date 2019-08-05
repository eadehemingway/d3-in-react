import React from 'react';
import * as d3 from 'd3';

export class App extends React.Component {
  state = {

    };

  render() {
    return (
      <section>
        <div id="chart" />
        <div className="button-container">
          <button
            id="increase"
            className="increase-btn"

          >
            +
          </button>
          <button
            id="decrease"
            className="decrease-btn"

          >
            -
          </button>
        </div>
      </section>
    );
  }
}
