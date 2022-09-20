import React from "react";

function App(props) {
    return (
        <Profile // type(리액트 엘리먼트)
            name="김철수" // props(이름)
            introduction="안녕하슈" // props(소개)
            viewCount={1500} // props(조회수)
        />
    );
}


// App 컴포넌트 안에서 Profile 컴포넌트 사용
// Profile 컴포넌트의 속성으로 name, introduction, viewCount 전달
// 속성의 값들은 모두 Profile 컴포넌트의 props로 전달



// JSX 없이 Profile 컴포넌트 코드 작성

React.createElement(
    Profile, // type
    {
        name: "김철수", // props
        introduction: "안녕하슈",
        viewCount: 1500
    },
    null // children(없으니까 null)
)