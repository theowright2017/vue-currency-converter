import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#whole-container',
    data: {
      currencies: {},
      rates: {},
      conversionAmount: 0,
      currencyToConvertTo: "",
      newAmount: 0
    },


    methods: {
      fetchInfo: function () {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then((data) => {
          this.currencies = data;
        });
      },

      convertTo: function (amount) {
        event.preventDefault();
      // i cant write the correct function as i dont know how to access the value of a key that constantly changes.....................

      }

    },

    // computed: {
    //
    // },
    mounted() {
      this.fetchInfo();
    }
  })
});
