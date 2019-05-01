import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#whole-container',


    //
    //
    //
    // mounted() {
    //   fetch('https://api.exchangeratesapi.io/latest')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   }
    //
      //fetch we dont know how long it will take
      //modern javascript function es6 written in this way
      //usually put into method to reuse

      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    data: {
      currencies: {},
      conversionAmount: 0,
      baseCurrency: "",
      result: null
      //set result to null as has falsey value, so we can do v-if to only display when has value which changes it to truthy
    },


    methods: {
      fetchInfo: function () {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(response => response.json())
        .then((data) => {
          this.currencies = data.rates;
        });
      },

      convertTo: function () {
        event.preventDefault()
        this.result = this.conversionAmount * this.currencies[this.baseCurrency]
        //use [] to access object that has changing variables, because this is using the variable result i.e NZD or GBP and inputting it to ths.currencies
      }
    },
      filters: {
        twoDecimalPlaces: function(number) {
          return number.toFixed(2);
        }
        //filters are essentially functions to be reused throughout, for things like decimal place etc.  in return in html written as
        // {{ result | filterName }}
    },
    // computed: {
    //
    // },
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    mounted() {
      this.fetchInfo();
    }



  })
});
