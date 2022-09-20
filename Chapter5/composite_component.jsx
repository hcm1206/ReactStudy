
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// 
function App(props) { 
    return (
        // App 컴포넌트 내부에 Welcome 컴포넌트 3개를 포함
        <div> 
            <Welcome name="Mike" />
            <Welcome name="Steve" />
            <Welcome name="Jane" />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
