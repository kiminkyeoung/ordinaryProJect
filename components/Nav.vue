<template>
  <div id="lite_leftMenu">
    <ul>
      <nuxt-link to="/dashboard" tag="li">
        <img src="~assets/images/Lite/icon-dashboard.png" alt="dashboard" />
      </nuxt-link >
      <nuxt-link to="/alarm" tag="li">
        <img src="~assets/images/Lite/icon-alert.png" alt="alert" style="height:35px"/>
      </nuxt-link >
      <li>
        <a href="#/dashboard" title="Report" onclick="alert('해당메뉴 사용을 원할 경우,\n관리자에게 문의바랍니다.')">
          <img src="~assets/images/Lite/icon-report.png" alt="dashboard" />
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav'
  }
</script>