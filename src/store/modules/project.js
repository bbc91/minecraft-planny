const state = () => ({
    grid: []
});

const getters = {

};

const actions = {
    createGrid({ state, commit }, { x, y }) {

        let grid = []

        for (var i = 0; i < x; i++) {
            grid[i] = [];
            for (var j = 0; j < y; j++) {
                grid[i][j] = {
                    type: 'empty'
                };
            }
        }

        commit('setGrid', grid);
    }
};

const mutations = {
    setGrid(state, grid) {
        state.grid = grid;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}