import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심 식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [], // notifications 빈 배열을 생성자에서 추가하여 state로 적용
        }
    };


    componentDidMount() { // 생명주기 함수
        const { notifications } = this.state;
        timer = setInterval(() => { // 매 1초마다 아래 작업 수행
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications,
                });
            }
            else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() { // 책에 없는 코드인데 github에 소스코드 업데이트라고 해서 추가되어있음. 없으면 제대로 작동 안 됨
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}
                            id={notification.id}
                            message={notification.message} 
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
