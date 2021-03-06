import ButtonCounter from './button-counter'
import FetchProvinceCovid from './fetch-province'

const templateLayout = document.createElement('template')
templateLayout.innerHTML = `
  <style>
  .layout {
    display: 'flex',
    minHeight: '100vh'
    background-color:red,
  }
  </style>
  <div class="layout">
    <button-counter></button-counter>
    <fetch-province-covid></fetch-province-covid>
    <slot name="child"></slot>
  </div>`

export default class AppProject extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateLayout.content.cloneNode(true))
  }
}
window.customElements.define('app-project', AppProject)
