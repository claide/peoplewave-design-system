<template>
  <div>
    <h3 class="page-header">Avatars</h3>
    <p class="mb-15">
      Avatar sizes <code>95x95, 58x58, 44x44, and smallest 26x26</code> in pixels.
    </p>
    <avatar image="https://randomuser.me/api/portraits/men/35.jpg" :size="95" class="pw-avatar__lg mr-20"></avatar>
    <avatar image="https://randomuser.me/api/portraits/men/35.jpg" :size="58" class="pw-avatar__md mr-20"></avatar>
    <avatar image="https://randomuser.me/api/portraits/men/35.jpg" :size="44" class="pw-avatar__sm mr-20"></avatar>
    <avatar image="https://randomuser.me/api/portraits/men/35.jpg" :size="26" class="pw-avatar__xs mr-20"></avatar>
  </div>
</template>

<script>
import Avatar from 'vue-avatar-component'

export default {
  components: { Avatar }
}
</script>

