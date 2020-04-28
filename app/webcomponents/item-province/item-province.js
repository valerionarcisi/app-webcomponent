
(function () {
  'use strict'
  class ItemProvinceCovid extends HTMLElement {
    constructor () {
      super()

      const template = document.createElement('template')
      template.innerHTML = `
            <style id="item-province-covid">
            </style>
            <div>
            <label class="city"></label>
            <label class="casi"></label>
            </div>
            `
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))
      this._city = this.getAttribute('city')
      this._casi = this.getAttribute('casi')

      this._shadowRoot.querySelector('.city').innerHTML = this._city
      this._shadowRoot.querySelector('.casi').innerHTML = this._casi
    }

    get city () {
      return this._city
    }

    set city (val) {
      this._city = val
    }

    get casi () {
      return this._casi
    }

    set casi (val) {
      this._casi = val
    }
  }
  window.customElements.define('item-prov-covid', ItemProvinceCovid)
})()
