<template>
  <div id="vueSubApp">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueSubApp',
  mounted () {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      import('qiankun').then((qiankun) => {
        qiankun.start()
      })
    }
  }
}
</script>

<style>
.loading{
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top:100px;
}
.loading span{
 display: inline-block;
 wIDth: 8px;
 height: 100%;
 border-radius: 4px;
 background: lightgreen;
 animation: load 1s ease infinite;
}
@keyframes load{
  0%,100%{
    height: 40px;
    background: lightgreen;
  }
  50%{
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.loading span:nth-child(2){
  animation-delay:0.2s;
}
.loading span:nth-child(3){
  animation-delay:0.4s;
}
.loading span:nth-child(4){
  animation-delay:0.6s;
}
.loading span:nth-child(5){
  animation-delay:0.8s;
}
</style>
