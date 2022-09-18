// JSX를 이용하지 않고 리액트 컴포넌트 생성하기

// Hello라는 이름의 리액트 컴포넌트 생성(JSX 없음)
class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

// ReactDOM을 이용하여 리액트 컴포넌트를 화면에 렌더링
ReactDOM.render(
    React.createElement(Hello, { toWhat: 'World' }, null),
    document.getElementById('root')
)