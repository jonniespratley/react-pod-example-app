import React from "react";
import Datamap from "react-datamaps";

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
    const { style } = this.props;
    return (
      <div style={style}>
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
          bubbles={this.props.data || this.props.bubbles}
          bubbleOptions={{
            popupTemplate: (geo, data) => {
              return `
                  <div class="hoverinfo slds-p-around_small">
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
  bubbles: [
    {
      name: "San Jose",
      radius: 15,
      country: "USA",
      latitude: 37.2966853,
      longitude: -122.0975973,
      fillKey: "error"
    }
  ],
  data: null,
  onClick: null,
  style: {
    minHeight: 500
  }
};
export default Page;
