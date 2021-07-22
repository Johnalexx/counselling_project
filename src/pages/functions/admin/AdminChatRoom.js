import React from 'react'
import {Link} from 'react-router-dom'
import '../../../ChatRoom.css'
import ClientAvatar from '../../../images/avatars/icon-avatar.png'
import AdminAvatar from '../../../images/avatars/avatar.jpg'

function AdminChatRoom() {
    return (
        <div>
            <h2>Admin ChatRoom</h2>
            {/* Comment out the content div class to make the chatroom a full view */}
            {/* <div className="content"> 

            </div>*/}
             <div className="content">
                    <div className="chatroom-card">
                        <div className="chatroom-chat-header header-elements-inline">
                            <h5 className="chatroom-title">JARON 2029</h5>
                        </div>
                        <div className="chatroom-chat-body">
                            <ul className="chatroom-media-list chatroom-media-chat chatroom-media-chat-scrollable mb-3">
                                <li className="chatroom-media chat-content-divider justify-content-center text-muted mx-0">
                                    Wednesday, July 21 2021
                                </li>
                                {/* Single CLient Chat */}
                                <li className="chatroom-media">
                                    <div className="mr-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={ClientAvatar} alt="client-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                    <div className="chatroom-media-body">
                                        <div className="media-chat-item">
                                            I need help with something that doesnt concern me or you
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                            Wednesday, 2:15pm
                                        </div>
                                    </div>
                                </li>
                                {/* Single Admin Chat*/}
                                <li className="chatroom-media media-chat-item-reverse">
                                    <div className="chatroom-media-body">
                                    <div className="media-chat-item">
                                        What do you need help with?
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                            Wednesday, 2:16pm
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={AdminAvatar} alt="admin-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                </li>
                                {/* Single CLient Chat */}
                                <li className="chatroom-media">
                                    <div className="mr-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={ClientAvatar} alt="client-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                    <div className="chatroom-media-body">
                                        <div className="media-chat-item">
                                           I need to call Johnalexx
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                            1 Hour Ago
                                        </div>
                                    </div>
                                </li>
                                {/* Single Admin Chat*/}
                                <li className="chatroom-media media-chat-item-reverse">
                                    <div className="chatroom-media-body">
                                    <div className="media-chat-item">
                                        For What?
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                            30 Minutes Ago
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={AdminAvatar} alt="admin-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                </li>
                                {/* Single CLient Chat */}
                                <li className="chatroom-media">
                                    <div className="mr-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={ClientAvatar} alt="client-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                    <div className="chatroom-media-body">
                                        <div className="media-chat-item">
                                           I want to call him
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                            15 Minutes Ago
                                        </div>
                                    </div>
                                </li>
                                {/* Single Admin Chat*/}
                                <li className="chatroom-media media-chat-item-reverse">
                                    <div className="chatroom-media-body">
                                    <div className="media-chat-item">
                                        ...
                                        </div>
                                        <div className="font-size-sm text-muted mt-2">
                                           
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <Link to="/">
                                            <img class="rounded-circle" src={AdminAvatar} alt="admin-avatar" width="40" height="40"/>
                                        </Link>
                                    </div>
                                </li>

                                {/* Text Area */}
                                <textarea name="enter-message" class="form-control mb-3" rows="3" cols="1" placeholder="Enter your message..."></textarea>
                                {/* Other Functions */}
                                <div className="d-flex align-items-center">
                                    <div class="list-icons list-icons-extended">
                                        <Link to="#" className="list-icons-item" data-original-title="Send Photo">
                                            <i class="icon-file-picture"></i>
                                        </Link>
                                        <Link to="#" className="list-icons-item" data-original-title="Send Video">
                                            <i class="icon-file-video"></i>
                                        </Link>
                                        <Link to="#" className="list-icons-item" data-original-title="Send File">
                                            <i class="icon-file-plus"></i>
                                        </Link>
                                    </div>
                                    <button type="button" class="btn bg-teal-400 btn-labeled btn-labeled-right ml-auto">
                                        <b><i class="icon-paperplane"></i></b>
                                         Send
                                    </button>
                                </div>

                            </ul>
                        </div>
                    </div>
            </div>
            </div>
    )
}

export default AdminChatRoom
