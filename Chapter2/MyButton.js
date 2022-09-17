// 리액트 함수 컴포넌트
// 그냥 이렇게 생겨먹은 놈임 
// 이게 뭔지는 나중에 설명해준다 함

function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// ReactDOM의 render 함수를 이용하여 리액트 컴포넌트를 index.html 파일의 DOM 컨테이너에 렌더링
// 구현한 리액트 함수를 html 페이지에 구현하는 거인듯

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);