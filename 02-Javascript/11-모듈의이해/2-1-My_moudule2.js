//exports의 하위속성 추가: 변수,json,함수
module.exports.name= "노드";
module.exports.property= {id:"nodejs", type:"javascript"};
module.exports.say= function(){
    console.log("Hello World");
};

//exports 속성으로 객체 추가
module.exports.home= {
    postcode: "12345",
    address: "서울시 강남구 역삼동",
    getAddress: function(){
        console.log(this.postcode+" " +this.address);
    }
};

/*module화 된것들 json형태로 묶어보면
{
    name= "노드",
    property= {id:"nodejs", type:"javascript"},
    say= function(){
    console.log("Hello World");
    },
    home= {
        postcode: "12345",
        address: "서울시 강남구 역삼동",
        getAddress: function(){
            console.log(this.postcode+" " +this.address);
            }
        }
}
*/