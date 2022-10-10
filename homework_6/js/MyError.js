Vue.component('my-error', {
  props: ['error'],

  template:
    `<div class="error-message" v-show="error">{{errorText}}</div>`,

  data() {
    return {
      errorText: 'Error: unable to get data from server'
    }
  }
});