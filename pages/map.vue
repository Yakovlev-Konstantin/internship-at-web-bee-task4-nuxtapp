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
                  <span class="card-text">Basic map</span>
                </div>
              </button>
            </h2>
            <div
              id="flush-collapse1"
              class="accordion-collapse collapse position-relative"
              aria-labelledby="flush-heading1"
              data-mdb-parent="#accordionFlush1"
            >
              <div id="map1" class="accordion-body m-3" ref="myMap"></div>
              <div v-if="!loaded" class="loader">loading</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'

export default {
  data() {
    return {
      map: null,
      loaded: false,
    }
  },

  mounted() {
    // this.updateCurrLink('/map')

    const loader = new Loader({
      apiKey: 'AIzaSyAKNTDy-sRIqz7wfDhR2eO1SrlafMKfjfA',
      version: 'weekly',
      libraries: ['places'],
    })

    loader
      .load()
      .then((google) => {
        const geoplace1 = { lat: -25.312, lng: -57.533 }

        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(geoSuccess)
        } else {
          /* This browser does not support geolocation API */
          // console.log('This browser does not support geolocation API')
        }

        function geoSuccess(position) {
          map.setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })

          marker1.setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        }

        const mapOptions = {
          center: geoplace1,
          zoom: 15,
        }

        const map = new google.maps.Map(
          // document.getElementById('map1'),
          // this.$el.querySelector('.my-map'),
          this.$refs.myMap,
          mapOptions
        )

        const marker1 = new google.maps.Marker({
          position: geoplace1,
          // position: { lat: -25.312, lng: -57.533 },
          map,
        })

        map.addListener('idle', () => {
          this.loaded = true
          // let preloaders = this.$el.querySelector('.loader')
          // if (!(preloaders[0] == null)) {
          //   for (let i = 0; i < preloaders.length; i++) preloaders[i].remove()
          // }
        })

        this.map = map
      })
      .then()
      .catch((e) => {
        // do something
      })
  },

  methods: {},
}
</script>
