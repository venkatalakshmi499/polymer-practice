import{html,PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-if.js';
 
class DomIf extends PolymerElement{
    static get properties(){
        return{
           demoMode:{
               type:Boolean,
               value:false
           }
        }
    }
    _isDemo(demo){
        return demo;
    }
    _isLive(demo){
        return !demo;
    }
    _toggleDemo(){
        this.demoMode=!this.demoMode;
    }

    static get template(){
        return html`
        <button on-tap="_toggleDemo">Toggle Demo Mode</button>
        <template is="dom-if" if="{{_isDemo(demoMode)}}">
        <h1>Demo Mode</h1>
        </template>
        <template is="dom-if" if="{{_isLive(demoMode)}}">
        <h1>Live Mode</h1>
        </template>
        `
    }
}
window.customElements.define('dom-ifff',DomIf);