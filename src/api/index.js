import request from "@/util/request"
// 问题列表
export function questionsList() {
    return request({
        url: '/choose/getProblems',
        method: 'post',
        headers:{"Content-Type":"application/json"}
    })
}

// 验证答案
export function verifyAnswer(data) {
    return request({
        url: '/choose/doChoose',
        method: 'post',
        data
    })
}

//获取转盘奖品列表
export function getTurntableList(){
    return request({
        url: "/lottery/getLotterys",
        method: "post"
    })
}

//抽奖
export function lottery(){
    return request({
        url: "/lottery/doLottery",
        method: "post"
    })
}

// 抽奖之后的信息填写
export function setRechargeInfo(data) {
    return request({
        url: '/lottery/doGiveWinning',
        method: 'post',
        headers:{"Content-Type":"application/json"},
        data
    })
}