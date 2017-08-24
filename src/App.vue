<template>
  <div id="app">
    <h1>Welcome to vuevote</h1>
    <vote-question :question="question" :choices="choices"></vote-question>
  </div>
</template>

<script>
import VoteQuestion from './vote-question.vue';

export default {
  name: 'app',
  data () {
    return {
      question: 'Who should be President?',
      choices: [
        { id: '0', name: 'Bernie Sanders', },
        { id: '1', name: 'Hiliary Clinton', },
        { id: '2', name: 'Orange Clown' },
      ]
    }
  },
  components: {
    VoteQuestion
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
