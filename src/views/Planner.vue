<template>
  <div class="planner">
    <div id="settings">
      <div id="sizePicker">
        <label>Grid size: </label>
        <input
          @keypress.enter="setGridSize()"
          class="gridSizeInput"
          type="number"
          max="64"
          v-model="x"
        />
        <input
          @keypress.enter="setGridSize()"
          class="gridSizeInput"
          type="number"
          max="64"
          v-model="y"
        />
        <button class="gridSizeButton" @click="setGridSize()">Set</button>
      </div>
      <div id="blockPicker">
        <div
          class="blockButton bigGrass tooltip"
          :class="{ selected: pickedBlockType === 'grass' }"
          @click="pickedBlockType = 'grass'"
        >
          <span class="tooltiptext">Grass</span>
        </div>
        <div
          class="blockButton bigCobbleStone tooltip"
          :class="{ selected: pickedBlockType === 'cobbleStone' }"
          @click="pickedBlockType = 'cobbleStone'"
        >
          <span class="tooltiptext">Cobblestone</span>
        </div>
      </div>
    </div>
    <div id="gridHolder">
      <div
        id="grid"
        @mousedown.left="holdingLeftMouseButton = true"
        @mouseup="holdingLeftMouseButton = false"
      >
        <div class="row" v-for="(row, index) in grid" :key="index">
          <div
            @mousedown.left="changeBlockType(block)"
            @mouseenter="changeBlockTypeByDragging(block)"
            class="block"
            :class="[block.type]"
            v-for="(block, index2) in row"
            :key="index2"
          ></div>
        </div>
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
      x: 32,
      y: 32
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
  watch: {
    // whenever question changes, this function will run
    y: function(newY) {
      this.y = newY > 64 ? 64 : newY;
    },
    x: function(newX) {
      this.x = newX > 64 ? 64 : newX;
    }
  },
  methods: {
    setGridSize() {
      this.$store.dispatch("project/createGrid", { x: this.x, y: this.y });
    },
    changeBlockTypeByDragging(block) {
      if (this.holdingLeftMouseButton) {
        block.type = this.pickedBlockType;
      }
    },
    changeBlockType(block) {
      block.type = this.pickedBlockType;
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
