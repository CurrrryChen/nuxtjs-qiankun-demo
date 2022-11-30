<template>
  <div>
    <div class="default-header">
      <nuxt-link to="/about">
        about
      </nuxt-link>
      |
      <nuxt-link to="/vueSubApp">
        vueSubApp
      </nuxt-link>
      |
      <nuxt-link to="/test">
        test
      </nuxt-link>
    </div>
    <nuxt />
    <h1 class="default-footer">footer</h1>
  </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>

<style scoped>
.default-header{
  text-align: center;
  background: lightcoral;
  line-height: 2;
}
.default-footer{
  background: lightcoral;
  text-align: center;
}
</style>
