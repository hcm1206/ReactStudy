// JSX를 이용한 함수
// user가 입력되면 해당 유저 이름 문자열을 이용하여 인사말 생성
// user가 입력되지 않으면 정해진 문자열로 인사말 생성

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

// JSX를 사용할 때 HTML 태그의 속성 값으로 JS 값을 입력하고 싶다면

const element1 = <div tabIndex="0"></div>; // 큰따옴표 사이에 문자열을 넣거나
const element2 = <img src={user.avatarUrl}></img> // 중괄호 사이에 JS 코드를 입력하면 됨