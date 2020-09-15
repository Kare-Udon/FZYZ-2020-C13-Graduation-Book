$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['mainpage', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p13', 'ending']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) {
            if(direction =='down'){
                console.log("down");
                typed.stop();
            };
            if(nextIndex == 1 && direction == 'up'){
                console.log("mainpage");
                typed.start();
            };
        },
        afterLoad: function (anchorLink, index) {},
        afterRender: function () {},
    });
    var options = {
        strings: [
            '「时光穿梭机」',
            '向下滑动开启'
        ],
        typeSpeed: 120, //打印速度
        startDelay: 400, //开始之前的延迟300毫秒
        backSpeed: 80,
        loop: true, //是否循环
    };
    var typed = new Typed('#typed', options);
});