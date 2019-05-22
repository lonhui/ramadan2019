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