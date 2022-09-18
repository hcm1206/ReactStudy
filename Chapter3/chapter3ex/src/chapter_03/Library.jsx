// Book 컴포넌트의 상위 컴포넌트 Library 생성
// 책 이름(문자열)과 책 페이지 속성(정수)을 각각 매개변수로 하여 Book 컴포넌트에 전달
// 정수를 전달할 때 문자열이 아닌 JS 정수 값이라는 것을 인지시키기 위해 중괄호{}를 쳐 줌

import React from "react";
import Book from "./Book";

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library;