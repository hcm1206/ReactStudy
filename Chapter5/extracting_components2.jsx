// Avatar 이미지 부분을 Avatar 컴포넌트로 추출하여 분리한 상태
// author 부분을 user로 바꾸었는데 보편적으로 사용하기 위해 props 이름을 살짝 바꾼 것 (재사용성)

function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <Avatar user={props.author}/>
                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
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