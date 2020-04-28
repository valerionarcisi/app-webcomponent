(function () {
  'use strict'
  class FetchProvinceCovid extends HTMLElement {
    constructor () {
      super()

      const template = document.createElement('template')
      template.innerHTML = `
        <style id="fetch-province-covid">
        </style>
        <div id="container-item-province-covid">
        </div>
        `

      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(template.content.cloneNode(true))
      this._data = null

      this.$items = this._shadowRoot.querySelector('#container-item-province-covid')
    }

    fetchCovidProv () {
      const self = this
      fetch('https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json')
        .then(function (response) {
          if (response.status === 200) {
            return response.text()
          }
        }).then(function (response) {
          self.data = JSON.parse(response)
          self._renderItems()
        })
    }

    connectedCallback () {
      this.fetchCovidProv()
    }

    _renderItems () {
      let html = ''
      for (const key in this.data) {
        const { denominazione_provincia: city, totale_casi: casi } = this.data[key]
        html += `<item-prov-covid city="${city}" casi="${casi}"></item-prov-covid>`
      }

      this.$items.innerHTML = html
    }

    get data () {
      return this._data
    }

    set data (value) {
      this._data = value
    }
  }

  window.customElements.define('fetch-province-covid', FetchProvinceCovid)
})()
