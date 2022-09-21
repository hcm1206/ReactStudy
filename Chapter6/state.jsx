// state는 리액트 컴포넌트의 '상태' 또는 '변경 가능한 데이터'를 일컫는 말
// state가 바뀔 때마다 컴포넌트가 재랜더링(새로 생성하여 화면에 표시)되기 때문에 렌더링이나 데이터 흐름에 관계 있는 값만 state에 포함
// state는 JavaScript 객체


import React from "react";

// 좋아요 버튼을 나타내는 리액트 클래스 컴포넌트
class LikeButton extends React.Component {
    constructor(props) { // 생성자
        super(props);
        this.state = { // 이 컴포넌트의 state를 정의
            liked: false // state로 좋아요 상태(liked) 변수 선언, 초기에는 좋아요가 켜지지 않은(false) 상태
        };
    }
}

// state는 직접 변경이 불가하고 setState() 함수로 변경해야 문제가 생기지 않음