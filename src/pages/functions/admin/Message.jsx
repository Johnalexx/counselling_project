import '../../../Conversation.css'
import Avatar1 from '../../../images/avatars/icon-avatar.png'

export default function Message({own}){
    return(
        <div className={own ? "message own": "message"}>
            <div className="messageTop">
                <img className="messageImg" src={Avatar1} alt=""/>
                <p className="messageText">Hello, How are you?</p>
            </div>
            <div className="messageBottom">30 Minutes Ago</div>
        </div>
    )
}