import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import "@polymer/paper-radio-button/paper-radio-button.js";
import "@polymer/paper-radio-group/paper-radio-group.js";
import '@polymer/iron-dropdown/iron-dropdown.js';
/**
 * `radio-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class RadioElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        iron-dropdown{
          border:1px solid gray;
          background:white;
          font-size:2em;
        }
      </style>
      <h2>Hello [[name]]!</h2>
    
     <paper-radio-group selectedAttribute="name" selected="small" id="rad">
        <paper-radio-button name="small"  >Small</paper-radio-button>
        <paper-radio-button name="medium">Medium</paper-radio-button>
        <paper-radio-button name="large">Large</paper-radio-button>
      </paper-radio-group>  
      <button on-click="_openRadio">get radio button value</button>
      <iron-dropdown id="dropdown" horizontal-align="right"  vertical-align="top">
      <div slot="dropdown-content">Hello!</div>
      </iron-dropdown>
      <h2>My name is <span>{{fullName}}</span></h2>

      `;
  }
  _openRadio(){
    this.$.rad.selected="large";
    // this.$.dropdown.open();
    console.log(this.$.rad.selected);
    this.name = "XYZ";
  }
  
  static get properties() {
    return {
      // sm:{
      //   type:String,
      //   value:document.getElementsByClassName("small")
      // },
      // md:{
      //   type:String,
      //   value:document.getElementsByClassName("medium")
      // },
      // la:{
      //   type:String,
      //   value:document.getElementsByClassName("large")
      // },
      // active:{
      //   type:Boolean,
      //   observer:'_activeChanged'
      // },
      first: {
        type: String,
        value: "monika"
      },
      last: {
        type: String,
        value: "kethi"
      },
      fullName:{
        type:String,
        computed:'computeFullName(first,last)'
      },
      name: {
        type: String,
        notify:false
      },
     prg:{
      type:String,
      value:document.querySelector('#rad')
     }
    
    }
//      prg.addEventListener('paper-radio-group-changed', e => {
//     alert('paper-radio-group-changed');
// });
    //  sm.addEventListener("click",_e=>{
    //   console.log("small");
    // })
    
    
  }
    computeFullName(first,last){
      return first+''+last;
    }
    // _activeChanged(newValue,oldValue){
    //     this.toggleClass('highlight',newValue);
    // }
    static get observer(){
      return [
        'nameChanged(first,last)'
      ]
    }
    
     nameChanged(first, last) {
      console.log('new name:', first, last);
      }
    
   
}

window.customElements.define('radio-element', RadioElement);
