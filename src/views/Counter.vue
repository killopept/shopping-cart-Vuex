<template>
  <div class = "demoVuex">
    <h1>vuex counter example</h1>
    <div>Clicked: {{$store.state.moduleCouter.count}} times, count is {{ evenOrOdd }},{{counted}}</div>
    <br>
    <button @click = "increment">+</button>
    <button @click = "decrement">-</button>
    <button @click = "incrementIfOdd">increment if odd</button>
    <button @click = "incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// export default {
//   name: 'Counter',
//   computed: {
//     ...mapGetters('moduleCouter',[ // 状态
//       'evenOrOdd'
//     ]),
//     counted(){
//       var it = this.$store.state.moduleCouter.test + new Date().getTime()
//       return it
//     }
//   },
//   methods: mapActions('moduleCouter',[ // 方法
//     'increment',
//     'decrement',
//     'incrementIfOdd',
//     'incrementAsync',
//   ])
// }
export default {
  name: 'Counter',
  computed: {
    ...mapGetters([ // 状态
      'evenOrOdd'
    ]),
    counted(){
      var it = this.$store.state.moduleCouter.test + new Date().getTime()
      return it
    }
  },
  methods: mapActions([ // 方法
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync',
  ])
}
</script>