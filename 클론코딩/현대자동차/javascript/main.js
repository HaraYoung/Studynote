function close(x){
    x.style.display='none';
};
function open(xy){
    xy.style.display='block';
}
/*nav바 회사소개 hover시 숨겨둔 hidden 화면에 표시 */
const nav_hidden= document.querySelector('.hidden');
const company =document.querySelector('.nav-span');
company.addEventListener('mouseover', (e)=> {
    open(nav_hidden);
});
/*회사소개 외 부분에 마우스 올렸을때 hidden창 닫기 */
document.querySelectorAll('.nav-a').forEach((v,i)=>{
    v.addEventListener('mouseover', (e)=> {
        close(nav_hidden);
    });
});
// X이미지 클릭시 hidden창 닫기
document.getElementById('trans').addEventListener('click',(e)=>{
    close(nav_hidden);
});
