import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
class AjaxPost extends PolymerElement{
    static get template(){
        return html`
         <iron-ajax id="ajaxUser" url="http://localhost:3000/newEmployees"  method="POST" 
        handle-as="json"
        content-type="application/json"
       on-response="handleResponse" 
      on-error="handleError"></iron-ajax>
      <button on-click="send" disabled="[[loading]]">Send</button>
      <h2>Output:</h2>
      <template is="dom-if" if="[[loading]]">Loading...</template>
      <pre>[[json(user)]]</pre>
        `
    }
    static get properties(){
        return {
            Employee:{
                type:Object,
                value:{name:"loki",sapid:5667}
            }
        }
    }
    send(){
        this.$.ajaxUser.body={"name":this.Employee.name,"sapid":this.Employee.sapid};
        this.$.ajaxUser.generateRequest();
    }

    json(obj){
        return JSON.stringify(obj,null,2);
    }
    saveUserCredentials(e){
        console.log('response',e.detail.response);
    }
}
window.customElements.define('ajax-post',AjaxPost);