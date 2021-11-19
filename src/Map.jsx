import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 26.84,
      lng: 80.94
    },
    zoom: 12
  };

  render(props) {
    return (
      <>
     
      <div style={{ height: '75vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys="AIzaSyDQ279YpjomiJRSgGC_BUrw-N1PfdomNNU"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={26.8467}
            lng={80.9462}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

export default Map;