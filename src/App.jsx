import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export default function App() {
	const [Wid, setWid] = useState(0);
	const refDiv = useRef(null);

	useEffect(() => {
		//모션작업을 위해서 동적으로 UI 수치값을 변경해서 스타일 반영을 해야할때 변경로직을 useEffect안쪽에서 호출시
		//이미 브라우저에 페인트가 된 이후 실행되기 때문에 화면이 깜박거리는 Layout shift 발생
		//상태값 변경을 통해서 리액트가 랜더링되고 화면에 페이트된후 호출됨됨
		const widSize = refDiv.current.getBoundingClientRect().width;
		console.log(widSize);
		setWid(widSize);
	}, []);

	useLayoutEffect(() => {
		//상태값 변경을 통해서 리액트가 렌더링되고 화면에 페인트되기 직전에 호출됨
		if (refDiv.current) {
			const widSize = refDiv.current.getBoundingClientRect().width;
			console.log('useLayoutEffect', widSize);
			setWid(widSize);
		}
	}, []);

	return (
		<>
			<div ref={refDiv} style={{ width: '50%', backgroundColor: 'orange', padding: '50px' }}>
				해당 요소의 너비와 높이는 가변형
			</div>
			<p>{Wid}</p>
		</>
	);
}
/*
리액트 프로젝트가 구동되는 흐름
1. 리액트 컴포넌트가 JSX를 반환
2. 리액트 자체적으로 가상돔을 생성하면서 기존 돔 트리와 비교
3. 변경된 부분이 반영된 실제 돔 트리 생성(리액트에서의 랜더링)
4. 실제 브라우저가 변경된 돔트리 구조에 맞게 화면에 그림(layout계산, paint화면에 출력)
   컴포넌트가 일단 랜더링된 이후 재호출되기 직전(useLayoutEffect)
5. 이미 출력된 돔 트리의 내용을 다시 비교해서 추후 컴포넌트가 재 호출됨
   컴포넌트가 랜더링된 이후 실행되는 시점(useEffect)
6. 추가 작업을 통해 state값 기반으로 다시 재랜더링(1-3단계 반복)
*/
