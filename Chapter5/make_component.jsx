// 컴포넌트는 함수 컴포넌트, 클래스 컴포넌트로 구분

// 함수 컴포넌트
function WelcomeFunction (props) {
    return <h1>안녕, {props.name}</h1>;
}


// 클래스 컴포넌트
class WelcomeClass extends React.Component { // React 컴포넌트를 상속받음
    render() {
        return <h1>안녕, {this.props.name}</h1>
    }
}

// HTML div 태그로 인식됨 (DOM 태그 사용)
const hemlElement = <div />;

// 리액트 컴포넌트(WelcomeClass)로 인식됨 (사용자 정의 컴포넌트 사용)
const reactElement = <WelcomeClass name="영희"/>;

// 엘리먼트 렌더링
ReactDOM.reander(
    element,
    document.getElementById('root')
);