// 리액트의 엘리먼트
// createElement() 함수를 사용하여 엘리먼트가 생성됨
// 대충 객체 비스무리한거

const element = {
    type: 'h1', // type
    props: { // props
        className: 'greeting',
        children: 'Hello, world!'
    }

    // children

    // createElement() 함수에는 3가지 파라미터가 들어감
    // type(유형) : HTML 태그(ex. <div>, <span> 등등) 또는 다른 리액트 컴포넌트
    // props(속성)
    // children(자식 엘리먼트) : 현재 엘리먼트의 자식 엘리먼트
}