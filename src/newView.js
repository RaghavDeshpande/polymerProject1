import { PolymerElement, html }  from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
class MyNewView extends PolymerElement{
  static get template() {
    return html`
    <style include="shared-styles">
       :host{
         display: block;
         padding: 10px;
       }
     </style>
     <div class="card">
      <div class="circle">1</div>
      <h1>New View</h1>
      <p>New View!</p>
      </div>
     `;
  }
}
window.customElements.define('new-view', MyNewView);