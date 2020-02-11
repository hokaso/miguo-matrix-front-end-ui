<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
  >
    <head-nav v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import HeadNav from './HeadNav'
  export default {
    components: { HeadNav },
    computed: {
      ...mapGetters([
        'permission_routes',
      ]),
      activeIndex() {
        const route = this.$route
        const {meta, path} = route
        // if set path, the sidebar will highlight the path you set
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
    }
  }
</script>
