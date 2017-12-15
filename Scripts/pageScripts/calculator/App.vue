<template>
  <div v-if="posts" class="container">
      <h2>{{ posts.calculator.name }}</h2>
      {{ posts.calculator.description }}
      <div v-for="step in posts.steps" :step.sync="step">
          <CalcStep v-bind:steps="step" />
      </div>   
      <Ground />

          <!-- <div v-for="step in posts.steps" :step.sync="step">
              <h2>{{ step.name }}</h2> 
              {{ step.description }}
          </div> -->
      
  </div>
</template>

<script>
import CalcStep from './CalcStep.vue'
import Ground from './Ground.vue'

export default {
    name: 'Calc',
    props: ['posts'],
    components: { CalcStep, Ground }
}
</script>