import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './table.js'
import './shared-styles.js';

class MyRides extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="card">
        <my-table title="Active Bookings" data='{{rides}}'/>
      </div>
    `;
  }

  static get properties() {
    return {
      rides: Array
    };
  }

  constructor() {
    super();
    this.rides = [
      {
        route: '105A',
        name: 'Raman Sah',
        time: '09:30 AM'
      },
      {
        route: '115A',
        name: 'Raman Sah',
        time: '07:30 PM'
      }
    ]
  }
}

window.customElements.define('my-rides', MyRides);
