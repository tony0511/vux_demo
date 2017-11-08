<template>
  <div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

// **** 首页、抽屉、导航动画等参考 ./Vux_Demo_App.vue ****
export default {
  components: {
    ...mapState({
      route: state => state.route,
      path: state => state.route.path,
      demoTop: state => state.vux.demoScrollTop,
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction,
    }),
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions([
      'updateDemoPosition',
    ]),
  },
};
</script>

<style scoped lang="scss">
</style>
