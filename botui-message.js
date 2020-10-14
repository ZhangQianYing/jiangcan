$(function () {
    var botui = new BotUI("hello-xuxuy");
    botui.message.add({delay: 800, content: "Hi, there👋"}).then(function () {
        botui.message.add({delay: 1100, content: "这里是博主小屋✨ "}).then(function () {
            botui.message.add({delay: 1100, content: "一个积极向上的girl~~"}).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{text: "然后呢？ 😃", value: "sure"}, {text: "少废话！ 🙄", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({delay: 600, content: "😘"}).then(function () {
            secondPart()
        })
    }, end = function () {
        botui.message.add({
            delay: 600,
            content: "告辞了您嘞！"
        })
    }, secondPart = function () {
        botui.message.add({delay: 1500, content: "现就职于上海阪程有限公司"}).then(function () {
            botui.message.add({delay: 1500, content: "一枚标准90后UI设计师"}).then(function () {
                botui.message.add({delay: 1200, content: "将作图看成一种快乐"}).then(function () {
                    botui.message.add({
                        delay: 1500,
                        content: "拥有三年平面设计，熟练使用 ps Ai Pr Ae。"
                    }).then(function () {
                        botui.message.add({delay: 1800, content: "喜欢摄影、接触新事物、学习"}).then(function () {
                            botui.action.button({
                                delay: 1100,
                                action: [{text: "个人简介是什么呢？🤔", value: "what-info"}]
                            }).then(function () {
                                thirdPart()
                            })
                        })
                    })
                })
            })
        })
    }, thirdPart = function () {
        botui.message.add({delay: 1e3, content: "脚下的路如果不是你自己的选择，那旅程的终点在哪，也没人知道 ..."}).then(function () {
            botui.action.button({delay: 1500, action: [{text: "最近有什么计划吗？", value: "why-domain"}]}).then(function (a) {
                fourthPart()
            })
        })
    }, fourthPart = function () {
        botui.message.add({delay: 1e3, content: "想有空好好搞一下摄影，多出去走走,呼吸下新鲜空气！"}).then(function () {
            botui.message.add({delay: 1600, content: "那么，相遇就是缘分，赏个赞吧 ^_^"})
        })
    }
})
