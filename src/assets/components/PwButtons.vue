<template>
  <div>
    <h3 class="page-header">Buttons &amp; Links</h3>
    <p>Buttons can use <code>btn-sm</code> <code>btn-lg</code> classes to achieve desired sizes.</p>
    <p class="pb-10 pt-5 is-bold">Normal buttons</p>
    <button class="btn btn-default">Button default</button>
    <button class="btn btn-primary">Button primary</button>
    <button class="btn btn-success">Button success</button>
    <button class="btn btn-danger">Button danger</button>
    <button class="btn btn-black">Button black</button>
    <button class="btn btn-outlined">Button outlined</button>
    <div class="pt-10"></div>
    <button class="btn btn-default bg-foreground--lighten-3" disabled>Button disabled</button>
    <button class="btn btn-flat">Button flat</button>
    <p class="pb-10 pt-20 is-bold">Large buttons</p>
    <button class="btn btn-default btn-lg">Button default</button>
    <button class="btn btn-primary btn-lg">Button primary</button>
    <p class="pt-15 pb-10">Button blocks</p>
    <div class="row">
      <div class="col-md-6 pb-10">
        <button class="btn btn-primary btn-block btn-lg">Button block primary</button>
      </div>
      <div class="col-md-6 pb-10">
        <button class="btn btn-success btn-block btn-lg">Button block success</button>
      </div>
    </div>
    <p class="pt-15 pb-10 is-bold">Button pagination</p>
    <ul class="pagination">
      <li><button class="btn btn-default"><< Prev</button></li>
      <li><button class="btn btn-flat">1</button></li>
      <li><button class="btn btn-flat btn-active">2</button></li>
      <li><button class="btn btn-flat" disabled>...</button></li>
      <li><button class="btn btn-flat">6</button></li>
      <li><button class="btn btn-default">Next >></button></li>
    </ul>
    <p class="pt-15 pb-10 is-bold">Button group</p>
    <div class="btn-group">
      <button type="button" class="btn btn-default">All</button>
      <button type="button" class="btn btn-default">Internal</button>
      <button type="button" class="btn btn-primary">Customers</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
