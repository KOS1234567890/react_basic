import React from 'react'
import logo from '../logo.svg'
function Image() {
  return (
    <>
        src폴더안에 이미지 출력 <br />
        <img src={logo} alt=""/>
        public 폴더안에 이미지 출력(추천) <br />
        <img src="./logo512.png" alt=""/>
    </>
  )
}

export default Image