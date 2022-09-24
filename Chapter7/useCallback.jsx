import React from "react";

// 함수와 의존성 배열을 파라미터로 받음

const memoizedCallback = useCallback (
    () => {
        doSomething(); // 괄호 안에 의존성 변수(배열) 입력
    },
    [] // 대괄호 안에 의존성 변수 입력(배열)
);

// 의존성 배열에 있는 변수 중 하나라도 변경되면 Memoized(메모된) 콜백 함수 반환 
// useMemo() 훅과 달리 콜백 함수를 반환

// 메모제이션(Memoization)
// 연산량이 많이 드는 함수의 호출 결과를 저장해두고 같은 입력값으로 함수 호출시 저장된 호출 결과를 바로 반환