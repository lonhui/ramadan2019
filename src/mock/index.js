const Mock = require("mockjs")
const Random = Mock.Random

const DataList = function () {
    let list = []
    for(let i = 0;i < 10;i++){
        let newObject = {
            id:Random.id(),//问题的id
            activeId:Random.id(),//活动id
            title:Random.sentence(1,2),//题目
            startTime:Random.datetime(),//开始时间
            text1:Random.sentence(5),//答案1
            text2:Random.sentence(5),//答案2
            corretNum:Random.natural(1, 2),//正确答案 1/2
            choose1Num:Random.natural(1, 500),//选择答案1的人数
            choose2Num:Random.natural(1, 500),//选择答案2的人数
            status:Random.natural(1, 2),//题目的状态
            hasChoose:Random.boolean(),//用户是否已经选择过
            ChooseNum:Random.natural(1, 2),//用户选择的是哪个答案
            canShowProbelm:Random.natural(0, 1)//题目  0 - 不可以显示  1 - 可以显示
        }
        list.push(newObject)
    }
    return {
        code:0,
        message:"success",
        data:list
    }
}

const verifyAnswer=function(){
    return{
        code:0,
        message:"success",
        data:{
            corret:Random.boolean()
        }
    }
}

Mock.mock('/choose/getProblems',"post",DataList)
Mock.mock('/choose/doChoose',"post",verifyAnswer)