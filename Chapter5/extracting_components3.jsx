// user-info 부분을 UserInfo 컴포넌트로 추출하여 분리한 상태

// UserInfo 컴포넌트에 Avatar 컴포넌트도 포함

// Comment 컴포넌트가 UserInfo 컴포넌트 포함
// UserInfo 컴포넌트가 Avatar 컴포넌트 포함

// 컴포넌트를 기능 단위로 구분하는 것이 좋고 나중에 재사용이 가능한 형태로 추출하는 것이 좋음

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.author} />
            <div className="comment-text">
                {props.text}
            </div>
            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props) {
    return (
        <div className="user-info">
            <Avatar user={props.user} />
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}