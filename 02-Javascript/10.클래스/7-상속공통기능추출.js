class Protoss{
    constructor (name, hp, dps){
        this._name= name;
        this._hp= hp;
        this._dps= dps; //초당 공격력(damage per Second)
        console.log ("[%s] 체력: %d, 공격력: %d", name, hp, dps);
    }
    //객체가 수행해야하는 동작을 함수로 정의
    move(position){
        console.log(this._name+ "(이)가"+ position+ "까지 이동합니다.");
    }
    attack(target){
        console.log(this._name+ "(이)가"+ target+ "(을)를 공격합니다. 데미지: "+this._dps);
    }
}

class Zealet extends Protoss{
    sword(target){
        this.attack(target);
        console.log("-> 검으로 찌르기:)");
    }
}
class Dragoon extends Protoss{
    fire(target){
        this.attack(target);
        console.log("-> 원거리 공격");
    }
}

let z1 =new Zealet ("질럿1", 300, 20);
z1.move("본진");
z1.sword("본진");

let z2 =new Zealet("질럿2", 300, 25);
z1.move("멀티");
z1.sword("멀티");

let d1 =new Dragoon("드라군1", 250, 40);
d1.move("본진");
d1.fire("본진");

let d2 =new Dragoon("드라군2", 250, 40);
d2.move("멀티");
d2.fire("멀티");

