<template>
  <div>
    <div class="word-box jejumyeongjo">
      <div>
      <H2>선인장 (Duet)</H2>
      <h4>남우현 , Lucia(심규선)</h4>
      <p>햇볕이 잘 드는 그 어느 곳이든</p>
      <p>잘 놓아두고서</p>
      <p>한 달에 한 번만 잊지 말아줘</p>
      <p>물은 모자란 듯하게만 주고</p>
      <p>차가운 모습에 무심해 보이고</p>
      <p>가시가 돋아서 어둡게 보여도</p>
      <p>걱정하진 마</p>
      <p>이내 예쁜 꽃을 피울 테니까</p>
      <p>언젠가 마음이 다치는 날 있다거나</p>
      <p>이유 없는 눈물이 흐를 때면</p>
      <p>나를 기억해</p>
      <p>그대에게 작은 위로가 되어줄게</p>
      <p>내 머리 위로 눈물을 떨궈</p>
      <p>속상했던 마음들까지도</p>
      <p>웃는 모습이 비출 때까지</p>
      <p>소리 없이 머금고 있을게</p>
      <p>그때가 우리 함께 했었던 날</p>
      <p>그때가 다시는 올 수 없는 날이 되면</p>
      <p>간직했었던 그대의 눈물 안고</p>
      <p>봄에 서 있을게</p>
      <p>언젠가 마음이 다치는 날 있다거나</p>
      <p>이유 없는 눈물이 흐를 때면</p>
      <p>나를 기억해</p>
      <p>그대에게 작은 위로가 되어줄게</p>
      <p>그때가 우리 함께 했었던 날</p>
      <p>그때가 다시는 올 수 없는 날이 되면</p>
      <p>간직했었던 그대의 눈물 안고</p>
      <p>봄에 서 있을게</p>
      <p>내 머리 위로 눈물을 떨궈</p>
      <p>속상했던 마음들까지도</p>
      <p>웃는 모습이 비출 때까지</p>
      <p>소리 없이 머금고 있을게</p>
      <p>봄에 서 있을게</p>
      <p>봄에 서 있을게</p>
      <p>봄에 서 있을게</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout:'login',
  data() {
    return{
    }
  },
}
</script>
<style>
  @import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
  .jejumyeongjo * {
    font-family: 'Jeju Myeongjo', serif;
  }
  .word-box {
    overflow:auto;
    text-align:center;
    color:#fff;
    width:500px;
    height:600px;
    margin:20px auto;
    background:url("https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=818&q=80");
    background-size:100%;
    font-size:12px;
  }
  .word-box h2 {
    font-size:20px;
    margin:20px 0 0 0;
  }
  .word-box h4 {
    text-align:right;
    font-size:14px;
    margin:0 20px 50px 0;
  }
  .vb > .vb-dragger {
    z-index: 5;
    width: 12px;
    right: 0;
  }

  .vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
            background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
    transition:
            background-color 100ms ease-out,
            margin 100ms ease-out,
            height 100ms ease-out;
    background-color: rgba(244, 88, 88,.1);
    margin: 5px 5px 5px 0;
    border-radius: 20px;
    height: calc(100% - 10px);
    display: block;
  }

  .vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(244, 88, 88,.3);
  }

  .vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(244, 88, 88,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(244, 88, 88,.5);
    margin: 0px;
    height: 100%;
  }

  .vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(244, 88, 88,.5);
  }
</style>

