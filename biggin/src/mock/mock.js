import Mock from 'mockjs';


Mock.mock('/login', (dataList) => {
    let newBod = dataList.body && JSON.parse(dataList.body)
    // if(newBod.username === "wangbin"){
    //     return {
    //         code:1
    //     }
    // }
    return {
        code: newBod.username === 'wangbin' ? 1 : 0
    }
})



Mock.mock('/getEat', () => {
    return {
        code: 1,
        data: [
            {
                name: '卫龙',
                id: 1-1,
                count: 0,
                price: 2,
                type:"EatData"
            },
            {
                name: '李小鹏',
                id: 1-2,
                count: 0,
                price: 0.5,
                type:"EatData"
            },
            {
                name: '薯片',
                id: 1-3,
                count: 0,
                price: 6,
                type:"EatData"
            },
            {
                name: '小小酥',
                id: 1-4,
                count: 0,
                price: 8,
                type:"EatData"
            },
            {
                name: '老北京鸡蛋',
                id: 1-5,
                count: 0,
                price: 2,
                type:"EatData"
            }
        ]
    }
})



Mock.mock('/getDrink', () => {
    return {
        code: 1,
        data: [
            {
                name: '黑卡',
                id: 2-1,
                count: 0,
                price: 6,
                type:"DrunkData"
            },
            {
                name: '红牛',
                id: 2-2,
                count: 0,
                price: 6,
                type:"DrunkData"
            },
            {
                name: '可口可乐',
                id: 2-3,
                count: 0,
                price: 3,
                type:"DrunkData"
            },
            {
                name: '脉动',
                id: 2-4,
                count: 0,
                price: 4,
                type:"DrunkData"
            },
            {
                name: '怡宝',
                id: 2-5,
                count: 0,
                price: 2,
                type:"DrunkData"
            }
        ]
    }
})




