import '../../../ChatRoom.css'
import '../../../Conversation.css'
import Avatar1 from '../../../images/avatars/icon-avatar.png'

export default function Conversation(){
    return(
        <div className="conversation">
            <img className="conversationImg" src={Avatar1} alt=""/>
            <span className="conversationName">Ruben Dias</span>
        </div>
    )
}