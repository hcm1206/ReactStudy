import React, {useState, useEffect} from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    // DOM이 변경된 이후에 이 이펙트 함수를 실행하라는 뜻
    // 렌더링 될 때마다 이펙트 실행
    // componentDidMount(), componentDidUpdate() 생명주기 함수와 동일한 기능

    useEffect(() => { // 이펙트 함수
        document.title = `총 ${count}번 클릭했습니다.`; // 브라우저 타이틀에 state를 이용하여 카운트 횟수 출력(Document title 업데이트)
    }); // 의존성 배열이 없으므로 컴포넌트 업데이트마다 실행됨

    return (

        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}