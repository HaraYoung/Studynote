function close(x) {
  x.style.display = "none";
}
function open(xy) {
  xy.style.display = "block";
}
//scroll이벤트
window.addEventListener("scroll", (e) => {
  let value = window.scrollY;
  if (value >= 400) {
    open(document.querySelector(".bean-img"));
    open(document.querySelector(".bean-text"));
    document.querySelector(".bean-img").classList.add("animate__slideInLeft");
    document.querySelector(".bean-text").classList.add("animate__slideInRight");
  }
  if (value >= 880) {
    open(document.querySelector(".indo-img"));
    document
      .querySelector(".indo-img")
      .classList.add("animate__fadeIn", "animate__slower");
  }
  const pick_tlt = document.querySelector(".pick-tlt");
  const pick_intxt = document.querySelector(".pick-intxt");
  if (value >= 1500) {
    open(pick_tlt);
    open(pick_intxt);
    open(document.querySelector(".pick-btn"));
    document
      .querySelector(".pick-img")
      .classList.add("animate__fadeIn", "animate__faster");
    pick_tlt.classList.add("animate__slideInLeft");
    pick_intxt.classList.add("animate__slideInLeft", "animate__slow");
  }

  if (value >= 2130) {
    open(document.querySelector(".mag-img"));
    document
      .querySelector(".mag-img")
      .classList.add("animate__fadeIn", "animate__slow");
  }

  if (value >= 2550) {
    open(document.querySelector(".sto-img"));
    document
      .querySelector(".sto-img")
      .classList.add("animate__fadeIn", "animate__slower");
    open(document.querySelector(".sto-tlt"));
    document.querySelector(".sto-tlt").classList.add("animate__slideInRight");
    open(document.querySelector(".sto-txt2"));
    document
      .querySelector(".sto-txt2")
      .classList.add("animate__slideInRight", "animate__slow");
    open(document.querySelector(".sto-btn"));
    document
      .querySelector(".sto-btn")
      .classList.add("animate__slideInRight", "animate__slower");
  }
});

//아이콘 클릭시 input태그 나타남
document.querySelector(".nav-icon").addEventListener("click", (e) => {
  const search = document.querySelector(".search");
  open(search);
  document.querySelector(".img-icon").addEventListener("click", (e) => {
    if (search.value == 0) {
      alert("검색어를 입력하세요");
    } else {
      console.log(search.value);
    }
  });
});

// function style(x,color,bcColor,txtDec){
//   x.style.color=color;
//   x.style.backgroundColor=bcColor;
//   x.style.textDecoration=txtDec;
// }
//이벤트 발생시 nav의 hidden영역이 나타남
document.querySelectorAll(".hover").forEach((v) => {
  const navHidden = document.querySelector(".nav-hidden");
  v.addEventListener("mouseover", (e) => {
    open(navHidden);
  });
  navHidden.addEventListener("mousemove", (e) => {
    //  if(navHidden.style.display=='block'){
    //   v.style('#690','#2c2a29','underline');
    // }
    open(navHidden);
  });
  navHidden.addEventListener("mouseout", (e) => {
    close(navHidden);
  });
});

//공지사항
// function tltInner(x) {
  //   for (var i = 0; i < tlt_txt.txt.length; i++) {
    //     open(tlt);
    //     tlt.innerHTML = tlt_txt.txt[i];
    //     tlt.classList.add("animate__slideInUp", "animate__slow");
    //     index = x;
    //   }}
    
let tlt = document.querySelectorAll(".ani-area>a");
let tlt_area= document.querySelector('ani-area');
let i = 0;
setInterval(()=>{
//function aniTxt(){
  tlt.forEach((v,i)=>{
   if(v.style.display== 'block'){
      close(v)
   }
  });
  if(tlt[i].style.display== 'block'){
    close(tlt[i]);
  }else{
    tlt[i].style.display== 'none'
  }
    i++;
  if(i> 3){
    i=0;
  }


    // close(tlt_area);
    // i++;
    // if(v[i].style.display== 'none'){
    //   open(tlt_area);
    // }
    // if(i> tlt.length){
    //   i=0;
    // }

//   aniTxt()
 },3000);
//프로모션 탭
document.querySelector('.pro-wd').addEventListener('click',(e)=>{
  e.preventDefault();
  open(document.querySelector('.pro-hidden'));
  close(document.querySelector('.open-btn'));
  document.querySelector('.hid-btn').style.display='inline-block';

  if(document.querySelector('.pro-hidden').style.display=='block'){
    document.querySelector('.pro-wd').addEventListener('click',(e)=>{
    close(document.querySelector('.pro-hidden'));
    close(document.querySelector('.hid-btn'));
    document.querySelector('.open-btn').style.display='inline-block';
  }
  )};
});
