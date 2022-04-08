//'data-include' 속성을 갖는 모든 요소에 대한 탐색
Array.from(document.querySelectorAll('*[data-include]')).map(async(v, i)=> {
//forEach로도 가능
//ex) data-include='inc/header.html'
    const include= v.dataset.include;
    let html= null;
    try{
        //inc/header.html파일의 코드를 가져옴
        const response= await axios.get(include);
        html= response.data;
    }catch(e){
        console.error(e);
    }
    if(html!= null){
        //v의 안에 넣는것이 아닌 v자체를 교환
        v.outerHTML= html;
    }
})