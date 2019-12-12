<template>
  <div class="planner">
    <div id="settings">
      <div id="sizePicker">
        <label>Grid size: </label>
        <input
          @keypress.enter="setGridSize()"
          class="gridSizeInput"
          type="number"
          v-model="x"
        />
        <input
          @keypress.enter="setGridSize()"
          class="gridSizeInput"
          type="number"
          v-model="y"
        />
        <button class="gridSizeButton" @click="setGridSize()">Set</button>
      </div>
      <div id="blockPicker">
        <div
          class="blockButton bigGrass"
          :class="{ selected: pickedBlockType === 'grass' }"
          @click="pickedBlockType = 'grass'"
        ></div>
        <div
          class="blockButton bigCobbleStone"
          :class="{ selected: pickedBlockType === 'cobbleStone' }"
          @click="pickedBlockType = 'cobbleStone'"
        ></div>
      </div>
    </div>
    <div
      id="grid"
      @mousedown.left="holdingLeftMouseButton = true"
      @mouseup="holdingLeftMouseButton = false"
    >
      <div class="row" v-for="(row, index) in grid" :key="index">
        <div
          @mouseenter="changeBlockType(block)"
          class="block"
          :class="[block.type]"
          v-for="(block, index2) in row"
          :key="index2"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planner",
  data() {
    return {
      holdingLeftMouseButton: false,
      pickedBlockType: "grass",
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
    },
    changeBlockType(block) {
      if (this.holdingLeftMouseButton) {
        block.type = this.pickedBlockType;
      }
    }
  },
  created() {
    this.setGridSize();
  }
};
</script>
<style>
@import "../assets/blocks.css";
</style>
