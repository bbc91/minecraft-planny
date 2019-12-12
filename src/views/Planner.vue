<template>
  <div class="planner">
    <div id="settings">
      <div>
        <label>Grid size: </label>
        <input class="gridSizeInput" type="number" v-model="x" />
        <input class="gridSizeInput" type="number" v-model="y" />
        <button class="gridSizeButton" @click="setGridSize()">Set</button>
      </div>
    </div>
    <div id="grid">
      <div class="row" v-for="(row, index) in grid" :key="index">
        <div class="block" v-for="(block, index2) in row" :key="index2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planner",
  data() {
    return {
      x: 12,
      y: 12
    };
  },
  computed: {
    test() {
      return this.$store.state.test;
    },
    grid() {
      return this.$store.state.project.grid;
    }
  },
  methods: {
    setGridSize() {
      this.$store.dispatch("project/createGrid", { x: this.x, y: this.y });
    }
  },
  created() {
    this.setGridSize();
  }
};
</script>
