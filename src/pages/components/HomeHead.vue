<template>
 <div class="header">
        <div class="header-left back-icon">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市<span class="iconfont arrow-icon">&#xe600;</span>
        </div>
 </div>
</template>

<script>
export default {
    name:'HomeHead'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/varibles.styl';
 .header
   line-height :0.86rem 
   display :flex
   background:$bgColor
   color :#fff
   .header-left 
     width:0.64rem;
     float: left
   .back-icon
      text-align :center
      font-size:0.4rem
   .header-input
     flex:1
     height:.64rem
     line-height :.64rem
     color:#ccc
     margin-top:.12rem
     margin-left :.2rem
     padding-left :.2rem
     border-radius :0.1rem
     background :#fff
        
   .header-right
     width :1.24rem
     float :right
     text-align :center
     .arrow-icon
       font-size :0.0020rem
       position relative
       top: -4%;
       left: 6%;
</style>