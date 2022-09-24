import React, { useMemo } from "react";

// useMemo 훅은 의존성 배열의 변수가 변했을 때만 create 함수를 호출하여 결괏값 반환, 변하지 않았다면 기존 함수 결괏값 반환

const memorizedValue = useMemo(
    () => {
        // 연산량이 높은 작업을 수행하여 결과를 반환
        return computeExpensiveValue(); // 괄호 안에 의존성 변수(배열) 입력, 없으면 렌더링이 일어날 때마다 함수 실행
    },
    [] // 대괄호 안에 의존성 변수(배열) 입력
);

// useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행
// 의존성 배열이 없으면 렌더링이 일어날 때마다 매번 함수 실행