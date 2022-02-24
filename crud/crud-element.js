import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';

/**
 * `crud-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CrudElement extends PolymerElement {
  static get template() {
    return html`
    <iron-form>
        <form>
            <paper-input type="text" name="name" required label="Name" ></paper-input>
            <paper-input type="text" name="SapId" required label="SapId"></paper-input>
           <vaadin-date-picker label="Dob" placeholder="Placeholder"></vaadin-date-picker>

        </form>
    </iron-form>

      `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'crud-element',
      },
    };
  }
}

window.customElements.define('crud-element', CrudElement);
