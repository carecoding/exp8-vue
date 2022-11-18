<script>
import axios from 'axios'
export default {
  name: 'App.vue',
  data(){
    return {
      sensors: [
        // {id: 1, name: 'sensor 1'},
        // {id: 2, name: 'sensor 2'},
      ]
    }
  },
  created(){
    this.getAllSensors()
  },
  methods:{
    async getAllSensors(){
      // console.log('clicked')
      const res = await axios.get("https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/api/sensors")
      // console.log(res)
      this.sensors = res.data 
      // console.log(this.sensors)
    },
    async deleteSensor(id){
      const deletedres = await axios.delete(`https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/api/sensors/${id}`)
      // console.log(deletedres)
      const getres = await axios.get("https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/api/sensors")
      // console.log(res)
      this.sensors = getres.data       
    },
    async addOneSensor(id){
      const deletedres = await axios.post(`https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/api/sensors`,
      {
        name: "Sensor New"
      })
      // console.log(deletedres)
      const getres = await axios.get("https://carecoding-cautious-doodle-g9x7qgrpq59cw954-8000.preview.app.github.dev/api/sensors")
      // console.log(res)
      this.sensors = getres.data       
    }
  }
}
</script>

<template>
  <header>
    <button @click="getAllSensors">Get All Sensors</button>
    <button @click="addOneSensor">Add One Sensor</button>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <ul>
      <li v-for="sensor in sensors" :key="sensor.id">
        {{sensor.id }} {{sensor.name}}
        <button @click="deleteSensor(sensor.id)">X</button>
      </li>
    </ul>
  </header>

</template>

<style scoped>
button{
  background-color: aquamarine;
  color: red;
}
</style>
