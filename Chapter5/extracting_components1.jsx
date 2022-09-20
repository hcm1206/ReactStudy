// 추출 전 원본 컴포넌트
// 댓글을 표시하기 위한 Comment 컴포넌트
// 내부에 작성자의 프로필 이미지, 이름, 댓글 내용, 작성일 컴포넌트 포함

function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">
                <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
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
