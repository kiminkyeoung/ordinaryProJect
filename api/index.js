const express = require('express');
const app = express();

//WEBACCESS TAG 호출
app.post('/getTagValues', function(req, res) {
    var myUserName = "admin";
    var myPassword = "vetec1";
    var myProjName = "BOM";
    var role = req.query.role
    role = role.split('_')[1]
    var myTagList = ["NodeStatus",
        role + "_Dmd_Time_S", role + "_kW_User_Peak", role + "_kW_Now_MD", role + "_kW_Pdc", role + "_kW_Base",
        role + "_kW_Peak_Before_M", role + "_kW_Peak_Day", role + "_kW_Peak_Mon", role + "_kW_Peak_Year", role + "_STA_Warning",
    ];
    var userPass = btoa(myUserName + ":" + myPassword);
    var dataParam = new Object();
    var tagObjectList = new Array();
    for (var i = 0; i < myTagList.length; i++) {
        var tagObject = new Object();
        tagObject["Name"] = myTagList[i];
        tagObjectList.push(tagObject);
    }
    dataParam["Tags"] = tagObjectList;
    var url = "http://112.216.32.4/WaWebService/Json/GetTagValue/" + myProjName;
    request({
        url: url,
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + userPass,
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: dataParam,
        json: true
    }, function(error, response, body) {
        //res.send(body["Values"]);
        res.json(body);
    });
});

//WEBACCESS TAG 호출 set
app.post('/setValue', function(req, res) {
    var myUserName = "admin";
    var myPassword = "vetec1";
    var myProjName = "BOM";
    var myTagList = [{ "Name": "SP1_ALARM_TEST", "Value": 0 }];
    myTagList[0].Value = 22;
    var userPass = btoa(myUserName + ":" + myPassword);
    var dataParam = new Object();
    var tagObjectList = new Array();
    for (var i = 0; i < myTagList.length; i++) {
        var tagObject = new Object();
        tagObject = myTagList[i];
        tagObjectList.push(tagObject);
    }
    dataParam["Tags"] = tagObjectList;
    var url = "http://112.216.32.4/WaWebService/Json/SetTagValue/" + myProjName;
    request({
        url: url,
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + userPass,
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: dataParam,
        json: true
    }, function(error, response, body) {
        var today = new Date();
        var resultStr = "전송 성공---------->" + today;
        res.send(resultStr);
    });
});

//사용자알람설정(select)
app.get('/AlarmSetting', async function(req, res) {
    console.log("Alarm 업데이트")
    console.log(req.query)
    var id = req.query.id;
    var AlarmEnable = req.query.AlarmEnable;
    var DoNotDisturbStartTime = req.query.DoNotDisturbStartTime
    var DoNotDisturbEndTime = req.query.DoNotDisturbEndTime
    var AlarmClear = req.query.AlarmClear
    var AlarmStep1 = req.query.AlarmStep1
    var AlarmStep2 = req.query.AlarmStep2
    var AlarmStep3 = req.query.AlarmStep3
    let conn;
    try {
        if (id === null || id == "") {
            res.json({ code: 2 })
        } else {
            conn = await pool.getConnection();
            const result = await conn.query('CALL usp_set_peak_alarm(?, ?, ?, ?, ?, ?, ?, ?)', [id, AlarmEnable, DoNotDisturbStartTime, DoNotDisturbEndTime, AlarmClear, AlarmStep1, AlarmStep2, AlarmStep3]);
            res.json({ code: 1 })
        }
    } catch (error) {
        res.json({
            message: '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
        });
    } finally {
        if (conn) {
            conn.end();
        }
    }
})

//사용자알람설정(UPDATE)
app.get('/getAlarmInfo', async function(req, res) {
    console.log("Alarm select")
    let conn;
    try {
        conn = await pool.getConnection();
        var query = `SELECT AlarmEnable,DoNotDisturbStartTime,DoNotDisturbEndTime,AlarmClear,AlarmStep1,AlarmStep2,AlarmStep3  FROM tbl_bom_peak_alarm WHERE UserID= '${req.query.id}'`;
        var queryResult = await conn.query(query);
        console.log(queryResult[0])
        res.json({
            code: 1,
            value: queryResult
        })
    } catch (error) {
        res.json({
            message: '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
        });
    } finally {
        if (conn) {
            conn.end();
        }
    }


})

//알람히스토리 검색(select)
app.get('/getAlarm', async function(req, res) {
    console.log("Alarm 검색")
    console.log(req.query.id)
    let conn;
    try {
        conn = await pool.getConnection();
        //var query =`SELECT Priority,Description,Action,DayOfWeek,LogDate,LogTime FROM tbl_bom_alarm WHERE UserID= '${req.query.id}'`;
        const result = await conn.query('CALL usp_get_peak_alarm_list(?)', [req.query.id]);
        res.json({
            code: 1,
            value: result[0]
        })
    } catch (error) {
        res.json({
            message: '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
        });
    } finally {
        if (conn) {
            conn.end();
        }
    }

})


//모듈로 사용할 수 있도록 export
//앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app인스턴스에게 전달됨
module.exports = {
    path: '/api',
    handler: app
}