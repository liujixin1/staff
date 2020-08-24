<template>
    <div class="loading">
        <div class="content">
            <div class="main">
                <div class="top"></div>
                <!-- <img class="loadingImg" src="../assets/loading.gif"> -->
                <van-loading  class="loadingImg" type="spinner" color="#666666" />
                <div class="loadingText">加载中...</div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .main{
        width: 2.7rem;
        height: 3rem;
        background: rgba(255,255,255,.9);
        margin: 0 auto;
        border-radius: 0.1rem;
         box-shadow: 0 0 0.1rem rgba(0,0,0,.3); 
    }
    .top{
        height: 0.5rem;
        width: 100%;
    }
    .loadingImg{
        width: 1rem;
        height: 1rem;
        display: block;
        margin: 0 auto;
        text-align: center;
    }
    .loadingText{
        font-size: 0.32rem;
        font-weight: bold;
        text-align: center;
        color: #666;
        margin-top: 0.5rem;
    }
</style>