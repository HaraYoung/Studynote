//다른 json 객체를 value로 포함하는경우

//단일 형태의 json
var centerPoint ={
    x: 5,           //x좌표
    y :10           //y좌표
};
//다른 json을 포함하는 json
var circle1= {
    center: centerPoint,        //중심의 좌표
    radius: 5.10                //반지름
};

console.group("circle1");
console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지금: %d", circle1.radius);
console.groupEnd();

//계층적으로 정의된 경우

var circle2={
    center: {       //중심좌표
        x : 5,      //x좌표
        y : 10      //y좌표
    },
    radius: 5.10        //반지름
};

console.group("circle2");
console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
console.log("원의 반지름: %d", circle2.radius);
console.groupEnd();