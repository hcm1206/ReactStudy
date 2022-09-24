import React, { useState, useEffect } from "react";

function UserStatus(props) {
    const [isOnline, setIsOnline] = useState(null); // state 변수명 : isOnline, set 함수 : setIsOnline, isOnline 초깃값 : null

    function handleStatusChange(status) { // status 매개변수를 입력받아 해당 status로 상태를 바꾸는 함수
        setIsOnline(status.isOnline); // status 매개변수의 isOnline 상태로 이 컴포넌트의 isOnline 변수를 바꿈
    }

    useEffect(() => { 
        ServerAPI.subscribeUserStatus(props.user.id, handleStatusChange); // ServerAPI를 이용하여 사용자 상태 구독
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange); // ServerAPI를 이용하여 사용자 상태 구독 해지(컴포넌트가 마운트 해제 될 때 호출(실행))
        };
    });
// 위 함수에서 리턴 함수는 componentWillUnmount() 함수의 역할과 동일


    if (isOnline === null) { // isOnline이 초기값(null)이면
        return "대기 중..."; // "대기 중..." 문자열 출력
    }
    return isOnline ? '온라인' : '오프라인'; // isOnline이 null이 아니고 True/False이면 각각 '온라인'/'오프라인' 문자열 출력


}
