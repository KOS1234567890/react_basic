import React from 'react'
import {useLocation,useNavigate,Link} from 'react-router-dom'

function Router() {
    const location = useLocation();
    const navigate = useNavigate();
    let {state,pathname} = location;
    
    console.log(state,pathname);
    let move = ()=>{
        navigate('/css');
    }
return (
    <>
        <h2>Router</h2>
        * 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다. <br/><br/>
        * 모듈설치 ( npm install react-router-dom )<br/>
        * import &#123;Link,BrowserRouter,Route,Routes&#123; from 'react-router-dom';<br/>

        <h2>Link , useLocation</h2>
        * 브라우저에 URL값을 통해 값 전달 <br/>
        ㄴ Link컨포넌트에 state 속성을 이용함 (state = '값')<br/><br/>
        
        * 브라우저에서 state값 받기<br/>
        ㄴreact-router-dom 에 있는 useLocation 훅을 사용함<br/>
        ㄴ const 변수명 = useLocation();<br/>

        <button><Link to='/'>Home</Link></button> <br/>
        <button onClick={move}>CSS활용</button><br/><br/>

        <h2>useNavigate(이동,값 전달), useLocation(전달 값 확인)</h2>
        *import &#123;useLocation,useNavigate,Link&#125; from 'react-router-dom'<br/>
        *const 변수명 = useNavigate();<br/>
        ㄴ 변수명('이동할 url',state)<br/><br/>
        * Link는 태그를 활용하여 이동하지만 Navigate는 스크립트 프로그래밍을 통해 이동하고 싶을때 주로 사용함
    </>
  )
}

export default Router

/* 
    useLocation(): 사용하는 것의 정보?
    let state = location.state;
    let {state} = location;
 */