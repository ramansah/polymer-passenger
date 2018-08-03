import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/polymer/lib/elements/dom-if.js';
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
      </style>

      <div class="card">
        <h1>Search Rides</h1>
        <paper-input value={{location}} label="Your Location"></paper-input>
        <br>
        <div align="center">
        <paper-button raised on-click="handleClick" class="green">Search</paper-button>
        </div>
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
