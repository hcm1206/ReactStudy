// pure 함수
// 같은 input 값에 대해서는 항상 같은 output 값이 리턴되고 input 값이 변경되지 않음
function sum(a, b) {
    return a + b;
}

// impure 함수
// input 값이 함수 내에서 변경되는 케이스
function withdraw(account, amount) {
    account.total -= amount;
}

// 리액트 컴포넌트는 pure 함수의 역할을 해야 함
// 입력값으로 들어온 props를 컴포넌트 내에서 변경할 수 없고, 같은 props 값이 들어오면 결과는 항상 동일해야 한다는 뜻