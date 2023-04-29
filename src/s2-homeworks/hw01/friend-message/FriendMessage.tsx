import React from 'react'
import s from './FriendMessage.module.css'
import avatar from "../avatar.png";

export type FriendMessagePropsType = {
    message: { id: number };

}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div>
                    <img src={avatar}
                id={'hw1-friend-avatar-' + props.message.id} 
                className={s.friendImg}/> 
                <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}
                    >
                        {/*создаёт студент*/}

                        {'18.00'}
                    </div> 
                    </div>
            
            <div className={s.friendImageAndText}>

                <div className={s.friendText}>

                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {'Rose'}
                    </div>
                    <div
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}

                        {'Hi!How are you?'}
                    </div>

                   
                </div>
            </div>
            
        </div>
    )
}

export default FriendMessage
