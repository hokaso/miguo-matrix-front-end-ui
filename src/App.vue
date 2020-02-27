<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  updated() {
    window.scroll(0, 0);
  },
}
</script>
