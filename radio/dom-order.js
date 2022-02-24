import {html,PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
class DomOrder extends PolymerElement{
    static get properties(){
        return {
            menuItems:{
                type:Array,
                value(){
                    return[
                        {name:'pizza',ordered:0},
                        {name:'frenchfries',ordered:0},
                        {name:'burger',ordered:0}
                    ];
                }
            }
        };
    }
    order(e){
        e.model.set('item.ordered',e.model.item.ordered+1);
    }
    cancel(e){
        e.model.set('item.ordered',e.model.item.ordered-1);
    }
    static get template(){
        return html`
        <template is="dom-repeat" id="menu" items="{{menuItems}}">
        <div>
        <span>{{item.name}}</span>
        <span>{{item.ordered}}</span>
         <button on-click="order">Order</button>
         <button on-click="cancel">Cancel Order</button>
        </div>
        </template>
       `;
    }
}
window.customElements.define('dom-order',DomOrder);