import Vue from 'vue'
import VueRouter from 'vue-router'

import Vote from './vote.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/:token', component: Vote }
];

const router = new VueRouter({ routes })

new Vue({
  router,
}).$mount('#app');

const voteData = {
  question: 'Who should be President?',
  choices: [
    { id: '0', name: 'Bernie Sanders', },
    { id: '1', name: 'Hiliary Clinton', },
    { id: '2', name: 'Orange Clown' },
  ]
};

const voteDataEncoded = window.encodeURIComponent(JSON.stringify(voteData));
router.push(`/${voteDataEncoded}`);
