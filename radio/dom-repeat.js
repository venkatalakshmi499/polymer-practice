import{html,PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
class DomRepeat extends PolymerElement{
    static get properties(){
        return{
            employees:{
                type:Array,
                value(){
                    return[
                        {given:'akhil',family:'smith'},
                        {given:'ally',family:'johnson'},
                    ];
                }
               
            }
        };
    }
    constructor(){
        super()
        this.push('employees',{given:'lilly',family:'vally'});
        this.set('employees.2.family','mathew');
    }
    static get template(){
        return html`
        <div>Employee list: </div>
        <template is="dom-repeat" items="{{employees}}">
        <div><br/>#[[index]]</div>Given name: <span>[[item.given]]</span></div><div>Family name:<span>[[item.family]]</span></div>
        </template>
        `
    }

}
window.customElements.define('dom-repeats',DomRepeat);