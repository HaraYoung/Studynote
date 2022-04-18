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
    }else{
        console.log(search.value);
    }
  });
});

//네비 메뉴 마우스오버시 히든 영역 나타남
// function navEvent(x) {
//   const navHidden = document.querySelector(".nav-hidden");
//   x.addEventListener("mouseover", (e) => {
//     open(navHidden);

//     navHidden.addEventListener("mousemove", (e) => {
//       open(navHidden);
//     });
//   });
//   navHidden.addEventListener("mouseout", (e) => {
//     close(navHidden);
//   });
// }
// navEvent(document.querySelector(".coffee"));
// navEvent(document.querySelector(".menu"));
// navEvent(document.querySelector(".nav-store"));
// navEvent(document.querySelector(".respon"));
// navEvent(document.querySelector(".nav-rew"));
// navEvent(document.querySelector(".nav-new"));

// document.querySelectorAll('.nav-main>a').forEach((v,i)=>{
//    const navHidden = document.querySelector(".nav-hidden");
//     v.addEventListener('mouseover',e=>{
//         e.preventDefault();
//         open(navHidden);
//     })
//     v.addEventListener('mouseout',e=>{
//         e.preventDefault();
//         close(navHidden);

//     })
// })
