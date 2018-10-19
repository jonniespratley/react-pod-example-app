import React from "react";
import Datamap from "react-datamaps";
const radius = 20;
const bubbles = [
  {
    name: "San Jose",
    radius,
    country: "USA",
    latitude: 37.2966853,
    longitude: -122.0975973,
    fillKey: "error"
  },
  {
    name: "New York",
    radius: 15,
    country: "USA",
    latitude: 38.9541077,
    longitude: -77.496101,
    fillKey: "bubbleFill"
  },
  {
    name: "London",
    radius,
    country: "UK",
    latitude: 51.501364,
    longitude: -0.1440787,
    fillKey: "bubbleFill"
  },
  {
    name: "Buenos Aires",
    radius: 10,
    latitude: -34.6157142,
    longitude: -58.5033602,
    fillKey: "error"
  },
  {
    name: "Sydney",
    radius: 25,
    latitude: -33.8567844,
    longitude: 151.213108,
    fillKey: "bubbleFill"
  },
  {
    name: "Hong Kong",
    radius: 15,
    latitude: 22.3574372,
    longitude: 113.8408289,
    fillKey: "bubbleFill"
  }
];
class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  addClickHandlers = ref => {
    if (ref && ref.map) {
      ref.map.svg.selectAll(".datamaps-bubble").on("click", bubble => {
        if (this.props.onClick) {
          this.props.onClick(bubble);
        }
      });
    }
  };
  render() {
    return (
      <div>
        <Datamap
          ref={this.addClickHandlers}
          scope="world"
          responsive
          geographyConfig={{
            popupOnHover: false,
            highlightOnHover: false
          }}
          fills={{
            defaultFill: "#abdda4",
            //defaultFill: "#ccc",
            bubbleFill: "#123456",
            USA: "blue",
            error: "red"
          }}
          bubbles={this.props.bubbles || this.props.data}
          bubbleOptions={{
            popupTemplate: (geo, data) => {
              return `
                  <div class="hoverinfo">
                  Name: ${data.name} <br/>
                   IP: ${data.ip}
                  </div>
              `;
            }
          }}
        />
      </div>
    );
  }
}
Page.defaultProps = {
  bubbles: null,
  data: null,
  onClick: null
};
export default Page;
