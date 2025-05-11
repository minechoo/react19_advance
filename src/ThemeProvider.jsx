import { createContext, useReducer } from "react";
// 전역 컨텍스트에 담길 초기 상태값
const initialState = { isLight: true }

// 전달된 action객체에 따라 전역 컨텍스트 변경하는 리듀서 함수
function reducer(state, action){
  //action 객체의 isLight값의 불린형일때만 전역 상태값 변경
  //그렇지 않으면 오류내용 출력
  if(typeof action.isLight === 'boolean') return {isLight: action.isLight}
  else console.error('액션객체에 isLight에는 참조형 자료가 전달되어야 합니다')
}

// 전역 컨텍스트 생성
const ThemeContext  = createContext()

// 루트 컴포넌트인 App을 감싸줄 Provider 컴포넌트
export function ThemeProvider({children}){
  const [GlobalState, dispatch] = useReducer(reducer, initialState)
  // useReducer훅으로 리듀서 함수와 초기 상태값을 인수로 전달해 전역 상태값과, dispatch함수 반환
  return(
    // 전역 상태와 dispatch함수를 wrapping하고 있는 children요소인 App에 전달
    <ThemeContext.Provider value={{GlobalState, dispatch}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext}