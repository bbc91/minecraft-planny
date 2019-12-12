<template>
  <div class="planner">
    <div id="grid">
      <div class="row" v-for="(row, index) in grid" :key="index">
        <div class="block" v-for="(block, index2) in row" :key="index2">
          <div>{{ block.type }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planner",
  data() {
    return {};
  },
  computed: {
    test() {
      return this.$store.state.test;
    },
    grid() {
      return this.$store.state.project.grid;
    }
  },
  created() {
    this.$store.dispatch("project/createGrid", { x: 12, y: 12 });
  }
};
</script>
