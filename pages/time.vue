<template>
  <div>
    <!-- rest of the webpage-->
    <div id="content" class="wrapper">
      <!-- left column of cards -->
      <div class="column-left m-4">
        <!-- card "Conservation with James" -->
        <div class="accordion accordion-flush mb-4" id="accordionFlush1">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading1">
              <button
                class="accordion-button collapsed"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#flush-collapse1"
                aria-expanded="false"
                aria-controls="flush-collapse1"
              >
                <div
                  class="
                    d-flex
                    justify-content-between
                    align-items-center
                    w-100
                  "
                >
                  <span class="card-text">Timer</span>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapse1"
              class="accordion-collapse collapse position-relative"
              aria-labelledby="flush-heading1"
              data-mdb-parent="#accordionFlush1"
            >
              <div class="accordion-body m-3">
                <!-- <p id="clock1" class="mb-0"></p> -->
                <p class="mb-0">{{ time }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // dateOfEnter: '',
    }
  },

  computed: {
    time() {
      return this.formatMillisecondsToTimeHHMMSS(this.$store.state.timeSpent)
    },
  },

  mounted() {
    // this.updateCurrLink('/activity')
    // this.time = formatMillisecondsToTimeHHMMSS(timeDiff);
    // this.dateOfEnter = new Date().getTime()
    // setInterval(() => {
    //   this.$store.commit('setTime')
    // }, 100)
  },

  methods: {
    formatMillisecondsToTimeHHMMSS(ms) {
      let ss = (ms / 1000) % 60
      ss = Math.trunc(ss)
      if (ss < 10) ss = '0' + ss
      let mm = (ms / (1000 * 60)) % 60
      mm = Math.trunc(mm)
      if (mm < 10) mm = '0' + mm
      let hh = ms / (1000 * 3600)
      hh = Math.trunc(hh)
      if (hh < 10) hh = '0' + hh
      return hh + ':' + mm + ':' + ss
    },
  },
}
</script>
