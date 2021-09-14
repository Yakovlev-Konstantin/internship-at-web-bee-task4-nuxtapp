export const state = () => ({
  dateOfEnter: new Date().getTime(),
  timeSpent: 0,
})

export const mutations = {
  setDateOfEnter(state) {
    // state.dateOfEnter = new Date().getTime()
  },

  setTime(state) {
    const timeCurr = new Date().getTime()
    const timeDiff = timeCurr - state.dateOfEnter

    state.timeSpent = timeDiff
  },
}

export const actions = {
  startTimer(context) {
    context.commit('setDateOfEnter')

    setInterval(() => {
      context.commit('setTime')
    }, 100)
  },
}
