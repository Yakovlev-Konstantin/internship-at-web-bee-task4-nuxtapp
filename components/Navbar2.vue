<template>
  <!-- 2nd navbar -->
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto navbar-nav-2nd">
        <li class="nav-item me-1">
          <!-- <a
            id="activity"
            class="nav-link highlighted-link"
            href="activity.html"
            onclick="goToPage('activity.html')"
          >
            <i class="fas fa-bars"></i>
            <span>Activity</span>
          </a> -->
          <NuxtLink
            :class="{ active: isActive('/activity') }"
            class="nav-link"
            to="/activity"
          >
            <i class="fas fa-bars"></i>
            <span>Activity</span>
          </NuxtLink>
        </li>
        <li class="nav-item me-1">
          <!-- <a
            id="map"
            class="nav-link"
            href="map.html"
            onclick="goToPage('map.html')"
          >
            <i class="fas fa-calendar-alt"></i>
            <span>Map</span>
          </a> -->
          <NuxtLink
            :class="{ active: isActive('/map') }"
            class="nav-link"
            to="/map"
          >
            <i class="fas fa-calendar-alt"></i>
            <span>Map</span>
          </NuxtLink>
        </li>
        <li class="nav-item me-1">
          <!-- <a
            id="time"
            class="nav-link"
            href="time.html"
            onclick="goToPage('time.html')"
          >
            <i class="fas fa-cog"></i>
            <span>Time</span>
          </a> -->
          <NuxtLink
            :class="{ active: isActive('/time') }"
            class="nav-link"
            to="/time"
          >
            <i class="fas fa-cog"></i>
            <span>Time</span>
          </NuxtLink>
        </li>
        <li class="nav-item me-1">
          <!-- <a
            id="time"
            class="nav-link"
            href="time.html"
            onclick="goToPage('time.html')"
          >
            <i class="fas fa-cog"></i>
            <span>Time</span>
          </a> -->
          <NuxtLink
            :class="{ active: isActive('/TodoListExample') }"
            class="nav-link"
            to="/TodoListExample"
          >
            <i class="fas fa-cog"></i>
            <span>Todo List</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item me-1">
          <a class="nav-link" href="#">
            <i class="fas fa-sticky-note"></i>
            <span>Notes</span>
          </a>
        </li>
        <li class="nav-item me-1">
          <a class="nav-link" href="#">
            <i class="fas fa-user"></i>
            <span>Friends</span>
          </a>
        </li>
        <li class="nav-item me-1">
          <a class="nav-link" href="#">
            <i class="fas fa-images"></i>
            <span>Photos</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="fas fa-cog"></i>
          </a>
          <ul
            class="dropdown-menu .dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path
    },
  },
}
</script>

<style scoped>
a.active {
  /* opacity: 0.2; */
  color: #2375e1;
  border-bottom: 4px solid #2375e1;
}
</style>
