import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
class AjaxExample extends PolymerElement{
    static get template(){
        return html`
         <iron-ajax id="getEmployees" url="http://localhost:3000/Employees"  method="GET"  handle-as="json"
      on-response="handleResponse" on-error="handleError"></iron-ajax>
       <button on-click="getResult">Get Results</button>
        `
    }
    static get properties(){
        return{
            properties:{
                ajaxResponse:{
                    type:String,
                    value:[],
                },
            }
        }
    }
    getResult(e){
        this.$.getEmployees.generateRequest();
    }
    handleResponse(e){
        console.log(e.detail.response);
    }
}
window.customElements.define('ajax-example',AjaxExample);