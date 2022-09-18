// JSX를 사용하여 리액트 컴포넌트 생성하기

// Hello라는 이름의 리액트 컴포넌트 생성(JSX)
class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}

// ReactDOM을 이용하여 리액트 컴포넌트를 화면에 렌더링
ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);