<template>
    <div>
        <h1>这里是less组件</h1>
        <hr>
        <h4>这里是小组件</h4>
        <hr>
        <div class="less">
            <div class="kiki"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.hehe(@w,@cyan){
    border-radius: 30px;
    border: @w solid @cyan;
}
.less{
    background: @color;
    width: @width;
    height: @height;
    .hehe(2px,darkcyan)
}
.kiki{
    background:darkcyan;
    width: 30px;
    height: 30px;
    margin: 70px auto;
    border-radius:15px;
    
}

@width:100px;
@height:@width+100px;
@color:black;

</style>
