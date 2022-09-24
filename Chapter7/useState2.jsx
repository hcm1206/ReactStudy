import React, { useState } from "react";

// useState()를 사용하여 카운트 값을 state로 관리
// state 변수명 : count, set 함수 : setCount
// 버튼이 눌리면 setCount 함수를 호출하여 count를 1 증가
// count의 값이 변경되면 컴포넌트가 재렌더링되면서 화면에 새로운 카운트 값 표시

function Counter(props) {
    const [count, setCount] = useState(0); // state 변수명 : count, set 함수 : setCount, count 초깃값 : 0

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}