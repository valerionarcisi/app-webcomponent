(function () {
  'use strict'
  const template = document.createElement('template')
  template.innerHTML = `
<style>
  label {
    color: red;
  }
</style>
<button>Click to see counter</button>
<div>
<label></label>
</div>
`
  class ButtonCounter extends HTMLElement {
    constructor () {
      super()
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))
      this.addEventListener('click', this._onClick.bind(this))
      this._counter = 0

      this.$textCounter = this._shadowRoot.querySelector('label')
    }

    get counter () {
      return this._counter
    }

    _onClick (e) {
      e.preventDefault()
      e.stopPropagation()
      this._counter++
      this._renderCounter()
    }

    _renderCounter () {
      this.$textCounter.innerHTML = this.counter
    }
  }
  window.customElements.define('button-counter', ButtonCounter)
})()
