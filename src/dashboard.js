import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-if.js';
import '@polymer/google-map/google-map.js';
import './shared-styles.js';

class MyDashboard extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .green {
          background: deeppink;
          color: white;
        }
        google-map {
          margin: 20px;
          margin-top: 50px;
          height: 300px;
          display: block;
        }
      </style>

      <div class="card">
        <h1>Search Rides</h1>
        <paper-input value={{location}} label="Your Location"></paper-input>
        <br>
        <div align="center">
        <paper-button raised on-click="handleClick" class="green">Search</paper-button>
        </div>
        <google-map fit-to-markers api-key="AIzaSyD3E1D9b-Z7ekrT3tbhl_dy8DCXuIuDDRc">
          <google-map-marker slot="markers" latitude="18.55" longitude="73.92" draggable="true"></google-map-marker>
        </google-map>
      </div>

      <template is="dom-if" if="{{searched}}">
      <div class="card" >
        <p>Found 10 Rides From {{location}}</p>
      </div>
      </template>
    `;
  }

  handleClick() {
    this.searched = true
  }

  static get properties() {
    return {
      location: {
        type: String,
        value: ''
      },
      searched: {
        type: Boolean,
        value: false
      }
    };
  }

}

window.customElements.define('my-dashboard', MyDashboard);
