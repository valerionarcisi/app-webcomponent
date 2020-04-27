'use strict'

class App extends HTMLElement {
  constructor () {
    super()

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

    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(templateLayout.content.cloneNode(true))
  }
}

window.addEventListener('DOMContentLoaded', function () {
  this.customElements.define('app-project', App)
})
