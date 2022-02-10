//파라미터 받기
function Student(kor, eng, math){
    this._kor= kor;
    this._eng= eng;
    this._math=math;
}

Student.prototype={
    sum:function(){
        return this._kor+ this._eng+ this._math;
    },
    avg:function(){
        return this.sum() /3;
    }
};

const grade= [
    ["철수",92 ,81, 77],
    ["영희", 72, 95, 98],
    ["민혁", 80, 86, 84]
];
/*
for (const item of grade){
    const s = new Student(item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.",
    item[0],s.sum(),s.avg());
}
*/
//하드코딩
const s1= new Student(92, 81, 77);
const s2= new Student(72, 95, 98);
const s3= new Student(80, 86, 84);
console.log("철수의 총점은 %d점, 평균은 %d점 입니다",s1.sum(), s1.avg());
console.log("영희의 총점은 %d점, 평균은 %d점 입니다",s2.sum(), s2.avg());
console.log("민혁의 총점은 %d점, 평균은 %d점 입니다",s3.sum(), s3.avg());






//문제2

function Rectangle(){
    this._width= null;
    this._height= null;
}

Rectangle.prototype={
    get width(){
        return this._width;
    },
    set width(param){
        this._width=param;
    },
    get height(){
        return this._height;
    },
    set height(param){
        this._height=param;
    },
    getAround: function(){
        return this.width* 2+ this.height* 2; 
    },
    getArea: function(){
        return this.width* this.height; 
    },
};

const rect= new Rectangle();
rect.width= 10;
rect.height=5;
console.log("둘레의 길이: %d, 넓이: %d", rect.getAround(), rect.getArea());