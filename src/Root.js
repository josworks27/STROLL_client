import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

var location = [];

function init() {
  window.navigator.geolocation.getCurrentPosition(current_position);
}
function current_position(position) {
  location.push(position.coords.latitude);
  location.push(position.coords.longitude);
}
window.addEventListener("load", init);
const Root = () => (
  <BrowserRouter>
    <App location={location} />
  </BrowserRouter>
);

export default Root;
