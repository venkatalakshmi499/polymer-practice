import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './radio-element.js';

class PracticeElement extends  PolymerElement{
    static get template(){
        return html`
        <h1>Hello {{name}}! This is a Practice Element</h1>
        <hr/>
        <radio-element name="{{name}}"</radio-element>
          `
    }
  //     _itemSelected (e){
  //   var selectedItem = e.target.selectedItem;
  //   if (selectedItem) {
  //     console.log("selected: " + selectedItem.innerText);
  //   }
  // }
    static get properties(){
      return{
        item:{
          type:Array,
          value:['hi','hello']
        },
        name: {
          type: String,
          value: "Yash",
          notify: true
        }
      }
    }
}

window.customElements.define('practice-element',PracticeElement);
