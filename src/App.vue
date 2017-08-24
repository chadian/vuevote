<template>
  <div id="app">
    <h1>Welcome to vuevote</h1>
    <vote-question
      v-on:choiceMade="choiceMade"
      :question="question"
      :choices="choices"></vote-question>
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
  },
  methods: {
    choiceMade(choice) {
      alert(`You have chosen ${choice.name}`);
    }
  }
}
</script>

<style lang="scss">
</style>
