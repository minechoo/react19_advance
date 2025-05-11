import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider'

export default function ToggleTheme() {
  //토글버튼 클릭시 전역상태값의 변경하기위해 useContext로 부터 GlobalState, dispatch함수 반환받아옴
  const { GlobalState, dispatch} =  useContext(ThemeContext)
  return (
    //버튼을 클릭시마다 기존 전역상태의 IsLight값에 담겨있는 boolean데이터 반환처리
    <button onClick={()=> dispatch({isLight: !GlobalState.isLight})}>
      {GlobalState.isLight ? "Light" : "Dark"}
    </button>
  )
}

