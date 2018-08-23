<template>
  <ul class="side-nav hidden-sm hidden-xs pt-30">
    <li class="side-nav-item">
      <a href="#typography-and-texts" v-smooth-scroll="{ duration: 1000, offset: -50 }"
        @click="setActive('typography')"
        :class="{ active: isActive('typography') }"
      >Typography &amp; texts</a>
    </li>
    <li class="side-nav-item">
      <a href="#colours" v-smooth-scroll="{ duration: 1000, offset: -50 }"
        @click="setActive('colours')"
        :class="{ active: isActive('colours') }"
      >Colours</a>
    </li>
    <li class="side-nav-item">
      <a href="#buttons-links" v-smooth-scroll="{ duration: 1000, offset: -50 }"
        @click="setActive('buttons')"
        :class="{ active: isActive('buttons') }"
      >Buttons &amp; links</a>
    </li>
    <li class="side-nav-item">
      <a href="#forms" v-smooth-scroll="{ duration: 1000, offset: -50 }"
        @click="setActive('form')"
        :class="{ active: isActive('form') }"
      >Forms</a>
    </li>
    <li class="side-nav-item">
      <a href="#avatars" v-smooth-scroll="{ duration: 1000, offset: -50 }"
        @click="setActive('avatars')"
        :class="{ active: isActive('avatars') }"
      >Avatars</a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'typography'
    }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style>

</style>
