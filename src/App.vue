<template>
  <div id="app" class="main-content">

    <pw-header></pw-header>

    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="pwave-doc-section">
            <pw-typography></pw-typography>
            <pw-colours></pw-colours>
            <pw-buttons></pw-buttons>
          </div>
        </div>

        <div class="col-md-3">
          <ul class="side-nav hidden-sm hidden-xs pt-30">
            <li class="side-nav-item">
              <a href="#typography-and-texts">Typography &amp; texts</a>
            </li>
            <li class="side-nav-item">
              <a href="#colours">Colours</a>
            </li>
            <li class="side-nav-item">
              <a href="#buttons-links">Buttons &amp; links</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import PwHeader from '../src/assets/components/PwHeader'
import PwTypography from '../src/assets/components/PwTypography'
import PwColours from '../src/assets/components/PwColours'
import PwButtons from '../src/assets/components/PwButtons'
import Anchorjs from 'anchor-js'

export default {
  name: 'app',
  components: {
    PwHeader, PwTypography, PwColours, PwButtons
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const anchors = new Anchorjs()
    anchors.options = {
      placement: 'left'
    };
    anchors.add('.page-header')
  }
}
</script>

<style lang="scss">

@import '../src/assets/scss/style.scss';

</style>
