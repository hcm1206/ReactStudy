import { useEffect } from "react";

// useEffect() 훅은 하나의 컴포넌트에 여러 개 사용 가능

function UserStatusWithCounter(props) {
    const [count, setCount] = useState(0);
    useEffect(() => { // useEffect() 함수 1
        document.title = `총 ${count}번 입력했습니다.` // 문서 타이틀 변경
    });

    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => { // useEffect() 함수 2
        ServerAPI.subscribUserStatus(props.user.id, handleStatusChange); // 사용자 상태 구독
        return () => {
            ServerAPI.unsubscribeUserStatus(props.user.id, handleStatusChange); // 사용자 상태 구독 해지
        };
    });

    function handleStatusChange(status) {
        setIsOnline(status.isOnline);
    }
}