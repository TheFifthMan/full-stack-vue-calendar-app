<template>
  <div id="app">
      <CalendarWeek />
      <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek.vue"
import CalendarEntry from "./components/CalendarEntry.vue"

export default {
  name: 'app',
  components: {
    CalendarWeek,
    CalendarEntry
  }
}
</script>


<style lang="scss">
html, body {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>
