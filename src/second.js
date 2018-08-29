import { PolymerElement, html }  from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class Seconds extends PolymerElement {
    static get template(){
        return html `
            <style include="shared-styles">
                :host {
                    display: block;
                    padding: 30px;
                }
            </style>

            <div class='card'>
                <div class="square">23</div>
                <h1> Seconds view </h1>
                <p> I am so bored that i am learning something new. Also Hungery but don't have money"</p>
            </div>
        `;
    }
}
window.customElements.define('my-second-view', Seconds);