<template>
  <div class="question">
    {{question}}
    <ul class="choices">
      <li v-for="choice in choices" v-on:click="choose(choice)">
        {{choice.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['question', 'choices'],
  methods: {
    choose: function(choice) {
      alert(`You voted for ${choice.name}`);
    }
  }
}
</script>
