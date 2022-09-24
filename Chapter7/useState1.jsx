// useState는 함수 컴포넌트에서 state를 사용하기 위한 훅

import React, { useState } from "react";

// 버튼을 클릭하면 카운트를 하나씩 증가시키고 현재 카운트를 보여주는 컴포넌트

function Counter(props) {
    var count = 0;

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => count++}>
                클릭
            </button>
        </div>
    );
}

// 하지만 이렇게 하면 재렌더링이 일어나지 않아 새로운 카운트 값이 화면에 표시되지 않음
// 따라서 state를 이용하여 값이 바뀔 때마다 재렌더링이 되도록 해야 함
// 함수 컴포넌트에는 해당 기능이 없으므로 useState()를 사용하여 state를 선언하고 업데이트 해야 함