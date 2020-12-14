<template>
<header id="header">
			<div class="m_show fl">
				<a v-b-modal.alarmSetting  @click="showModal = true">
					<img src="~assets/images/Lite/m/icon-alert.png" alt="알람설정"/>
				</a>
			</div>
			<div class="logo">
        <nuxt-link to="/dashboard" tag="a">
        	<img src="~assets/images/Lite/logo.png" alt="peakbom_logo" class="m_hidden" />
					<img src="~assets/images/Lite/m/logo.png" alt="peakbom_logo" class="m_show" />
        </nuxt-link>
			</div>
			<div class="etcRight">
        <a @click="logout" class="logout">
					<img src="~assets/images/Lite/icon-logout.png" alt="로그아웃" class="m_hidden"/>
					<img src="~assets/images/Lite/m/icon-logout.png" alt="로그아웃" class="m_show" />
        </a>
			</div>
			<div class="etcRight m_hidden">
				<a v-b-modal.alarmSetting  @click="showModal = true">
					<img src="~assets/images/Lite/icon-alert.png" alt="알람설정" style="margin:-5px 20px 0 0;"/>
				</a>
			</div>
			<b-modal id="alarmSetting" ref="alarmSetting"  title="사용자 알람설정" hide-footer>
          <form>
            <table class="alert-setting-table">
              <tr>
                <td>알람수신</td>
                <td>
                  <label class="switch">
                    <input type="checkbox" v-model="alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
            </table>
            <hr>
            <table v-bind:class="alert.AlarmEnable ? 'alert-setting-table' : 'alert-setting-table disable-table'">
              <tr>
                <td>정상(경고상태 해제)</td>
                <td class="right">
                  <label class="switch">
                    <input type="checkbox" v-model="alert.AlarmClear" :disabled="!alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>1단계 알람</td>
                <td class="right">
                  <label class="switch">
                    <input type="checkbox" v-model="alert.AlarmStep1" :disabled="!alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>2단계 알람</td>
                <td class="right">
                  <label class="switch">
                    <input type="checkbox" v-model="alert.AlarmStep2" :disabled="!alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
              <tr>
                <td>3단계 알람</td>
                <td class="right">
                  <label class="switch">
                    <input type="checkbox" v-model="alert.AlarmStep3" :disabled="!alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
            </table>
            <hr>
            <table v-bind:class="alert.AlarmEnable ? 'alert-setting-table' : 'alert-setting-table disable-table'">
              <tr>
                <td>방해금지시간 설정</td>
                <td>
                  <label class="switch">
                    <input type="checkbox" v-model="alert.DoNotDisturb" :disabled="!alert.AlarmEnable">
                    <span class="slider round"></span>
                  </label>
                </td>
              </tr>
            </table>
								<table v-show="alert.DoNotDisturb" v-bind:class="alert.AlarmEnable ? 'alert-setting-table' : 'alert-setting-table disable-table'">
									<tr>
										<td>시작시간</td>
										<td>종료시간 </td>
									</tr>
									<tr>
										<td><div style="position:relative"><date-picker v-model="alertTime.DoNotDisturbStartTime" :config="TimeOptions" :disabled="!alert.AlarmEnable">></date-picker></div></td>
										<td><div style="position:relative"><date-picker v-model="alertTime.DoNotDisturbEndTime" :config="TimeOptions" :disabled="!alert.AlarmEnable">></date-picker></div></td>
									</tr>
								</table>
          </form>
          <div class="modal-footer">
            <nuxt-link to="/alarm" tag="button" class="btn btn-outline-secondary" style="float:left;">알람히스토리확인</nuxt-link>
            <b-button  variant="outline-success" @click="alarmSetting">적용</b-button>
            <b-button  variant="outline-secondary" @click="getAlarmInfo">닫기</b-button>
          </div>
			</b-modal>
		</header>
</template>
<script>
import moment from 'moment'
import axios from 'axios'
export default {
  name: 'app-header',
  components : {
    moment,
    axios
  },
  data () {
    return {
      id:'',
      alert: {
        AlarmEnable : true, 
        AlarmClear : true,
        AlarmStep1 : true,
        AlarmStep2 : true,
        AlarmStep3 : true,
        DoNotDisturb : true,
      },
      alertTime: {
        DoNotDisturbStartTime: moment(new Date()).format('HH:mm'),
        DoNotDisturbEndTime:moment(new Date()).format('HH:mm')
      },
      TimeOptions: {
        format:'HH:mm'
      } 
    }
  },created() {
    this.id = this.$store.getters.ID;
    this.role = this.$store.getters.Role;
    this.roleChk()
  },
  methods: {
    //SSO연동 시 들어온 role값체크
    roleChk: function() {
        var vm = this;
        if(this.role != null) {
          var rolechk =this.role.split("_")[1];
          var role_solution = rolechk.replace(/[0-9]/g, "")
        }
        if(role_solution != "PL") { 
          this.$router.push({name: 'login', query: {code:'rolechk'}}) 
        }else {
          vm.getAlarmInfo()
        }
    },
    getUserInfo: async function() {
      var vm = this;
      axios.get('/api/user/info')
      .then(function (res) {
        if(res.data.code ===1) {
          var temp = res.data.value
          vm.id = temp.id
          //아이디 값에 해당하는 설정된 알람정보 가져오는 쿼리 실행
          vm.getAlarmInfo()
          }
      })
    },
    //사용자알람설정(select)
    getAlarmInfo: async function() {
      var vm = this;
      axios({
            method: 'GET',
            url : '/api/getAlarmInfo',
            params : {
                id : vm.id
            }
      })
      .then(function (res) {
        console.log(res)
        vm.alert.AlarmEnable =JSON.parse(res.data.value[0].AlarmEnable)
        vm.alertTime.DoNotDisturbStartTime = res.data.value[0].DoNotDisturbStartTime
        vm.alertTime.DoNotDisturbEndTime = res.data.value[0].DoNotDisturbEndTime
        vm.alert.AlarmClear = JSON.parse(res.data.value[0].AlarmClear)
        vm.alert.AlarmStep1 = JSON.parse(res.data.value[0].AlarmStep1)
        vm.alert.AlarmStep2 = JSON.parse(res.data.value[0].AlarmStep2)
        vm.alert.AlarmStep3 = JSON.parse(res.data.value[0].AlarmStep3)
        if(vm.alertTime.DoNotDisturbStartTime === "00:00:00" && vm.alertTime.DoNotDisturbEndTime === "00:00:00") {
          vm.alert.DoNotDisturb = false
        }
        //완료후 닫기
        vm.$refs['alarmSetting'].hide()
      })
    },
    //사용자알람설정(UPDATE)
    alarmSetting : async function() {
      var vm = this;
      //방해금지시간 설정 없을 경우 초기화 셋팅
      if(vm.alert.DoNotDisturb) {
        var DoNotDisturbStartTime = this.alertTime.DoNotDisturbStartTime + ":00"
        var DoNotDisturbEndTime = this.alertTime.DoNotDisturbEndTime + ":00"
      }else {
        var DoNotDisturbStartTime = "00:00:00"
        var DoNotDisturbEndTime = "00:00:00"
      }
      axios({
            method: 'GET',
            url : '/api/alarmSetting',
            params : {
                id : vm.id,
                AlarmEnable : vm.alert.AlarmEnable,
                DoNotDisturbStartTime : DoNotDisturbStartTime,
                DoNotDisturbEndTime : DoNotDisturbEndTime,
                AlarmClear : vm.alert.AlarmClear,
                AlarmStep1 : vm.alert.AlarmStep1,
                AlarmStep2 : vm.alert.AlarmStep2,
                AlarmStep3 : vm.alert.AlarmStep3,
            }
      }).then(function(res) {
        if(res.data.code == 1) {
          alert("알람설정이 완료되었습니다.")
          vm.$refs['alarmSetting'].hide()
        }else {
          alert("알람설정이 실패되었습니다. 재로그인 후 시도해보세요. 문제가 지속될 경우 담당자에게 연락바랍니다.")
          vm.$refs['alarmSetting'].hide()
        }
      })
      .catch(function(error) {
          console.log("api/AlarmSetting 에러발생")
          console.log(error)
        });
      },
      logout : async function() {
        axios.get('/api/user/logout');
        this.$router.push('/login'); 
      }
    },
    watch : {
    '$route' (to, from) {
        this.$refs['alarmSetting'].hide()
    }
  }
}
</script>
<style scoped>
.disable-table td {color:#ccc}
.disable-table td {color:#ccc}
.disable-table td .slider {background-color:#eee}
.disable-table td input:checked + .slider {background-color: #eee;}
.disable-table td input:focus + .slider { box-shadow: 0 0 1px #eee;}
</style>