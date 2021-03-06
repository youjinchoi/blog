import React, { Component } from 'react';

class Timestamp extends Component {
    render() {
        const now = new Date();
        const diff = now.getTime() - this.props.timestamp;
        if (diff < 3600000) { // < 1시간
            const minute = Math.floor(diff/60000);
            return minute < 2 ? "1 minute ago" : minute + " minutes ago"; // n분전
        } else if (diff < 86400000) {   // < 24시간
            const hour = Math.floor(diff/3600000);
            return hour < 2 ? "1 hour ago" : hour + " hours ago"; // n시간전
        } else {
            const date = new Date(this.props.timestamp);
            return (date.getMonth()+1) + "/" +  date.getDate() + "/" + date.getFullYear(); // YYYY년 mm월 DD일
        }
    }
}

export default Timestamp;