// JSX를 사용할 때 HTML/XML 코드 사이에 중괄호를 이용하여 JS 함수 사용 가능

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Changmin',
    lastName: 'Hyeon'
};

const element = (
    <h1>
        Hello, {formatUser(user)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);