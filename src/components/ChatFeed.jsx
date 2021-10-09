import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    // If a chats exist, look for the active chat
    const chat = chats && chats[activeChat];
    // functional component for generating messages
    const renderMessages = () => {
        // fetches messages
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            // if there are messages, find the last message
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            // is this my message? 
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{ width: '100%' }}> 
                    <div className="message-block"> 
                        {isMyMessage
                            // if this is my message, render component MyMessage
                            ? <MyMessage message={message} />
                            // if this is not my message, render component TheirMessage
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
                    </div>
                    {/* if this is my message, chat bubble will be on the right at 18px
                    // if this is not my message, chat bubble will be on the left at 68px */}
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            );
        });
    };

    if (!chat) return <div />;

    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    );
};

export default ChatFeed;