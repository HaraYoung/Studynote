import React from 'react'

const useMounterRef = () => {
  const mountedRef= React.useRef(false);

  React.useEffect(()=>{     //useEffect의 두번째 원소가 []::화면에 등장할때 실행
      setTimeout(()=>{  //컴퓨터 성능에 따라 실행이 늦을수 있으므로 0.0001초 렉을 걸음
          mountedRef.current= true;
          /*useEffect가 실행->화면에 등장할때 실행
          => mountedRef.current= true라는 것은 []가 실행된 후이므로 화면에 등장한 다음
            */
        });
  },[]);
    return mountedRef;
}

export default useMounterRef