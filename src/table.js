import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class MyTable extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .route {
          font-weight: bold;
        }
        .name {
          color: #333;
        }
        span {
          margin: 0px 10px;
        }
      </style>

      <h3>{{title}}</h3>
      <template is="dom-repeat" items="{{data}}">
        <p>
          <span class="route">{{item.route}}</span>
          <span class="name">{{item.name}}</span>
          <span class="time">{{item.time}}</span>
        </p>
      </template>
    `;
  }

  static get properties() {
    return {
      title: {
        type: String
      },
      data: Array
    };
  }

}

window.customElements.define('my-table', MyTable);
