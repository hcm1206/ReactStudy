// JSX를 사용할 때 HTML/XML 코드 사이에 중괄호를 이용하여 JS 변수 사용 가능

const name = '홍길동';
const element = <h1>안녕, {name}</h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
    );