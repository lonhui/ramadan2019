import request from "@/util/request"

export function apiPost(param) {
    return request({
        url: '/sys/role/info',
        method: 'get',
        param
    })
}

export function apiGet(data) {
    return request({
        url: '/sys/role/info',
        method: 'post',
        data
    })
}