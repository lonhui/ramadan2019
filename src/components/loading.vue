<template>
    <div :class="{'loading':count,'loading-2':!count}" @touchmove.prevent>
        <div id="Loading">
            <div class="loader-inner ball-beat">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="number">
                {{count? (count/11*100).toFixed(0)+"%" :"Loading"}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:["count"],
}
</script>

<style scoped>
.loading{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 3.6rem;
    height: 6.4rem;
    background-color: #548A1B;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.loading-2{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 17, 27, 0.8);
}
.number{
    color: #fff;
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-align:center;
} 
#Loading {
    width: 3.6rem;
    height: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
@-webkit-keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75); 
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
@keyframes ball-beat {
    50% {
        opacity: 0.2;
        -webkit-transform: scale(0.75);
        transform: scale(0.75); 
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1); 
    } 
}
.ball-beat > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100% !important;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat 0.7s 0s infinite linear;
    animation: ball-beat 0.7s 0s infinite linear;
}
.ball-beat > div:nth-child(2n-1) {
    -webkit-animation-delay: 0.35s !important;
    animation-delay: 0.35s !important; 
}
</style>