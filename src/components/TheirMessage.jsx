// Messages sent by others

const TheirMessage = () => {
    // determine whether this is the first message by a user
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
                />
            )}
            {/* if message is an image... */}
            {message.attachments && message.attachments.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                )
                : ( // if message is text... 
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )}
        </div>
    );
};

export default TheirMessage;
