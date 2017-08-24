<template>
  <vote-question
    v-on:choiceMade="choiceMade"
    :question="question"
    :choices="choices"></vote-question>
</template>

<script>
import VoteQuestion from './vote-question.vue';
export default {
  name: 'app',
  data() {
    return JSON.parse(this.$route.params.token);
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
