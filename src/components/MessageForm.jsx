// Form used for sending messages

import { useState } from 'react'; 
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState(''); //initial value of message is equial to an empty string
  const { chatId, creds } = props;

  const handleChange = (event) => {
    // stores value of the input 
    setValue(event.target.value);
    // typing...
    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    // prevents a browser refresh once you submit the form
    event.preventDefault();

    const text = value.trim(); // trim removes the leading and trailing white space
    // if the text is longer than 0, we can send the message
    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue(''); // after message is sent, the value is reset to an empty string
  };
  const handleUpload = (event) => { // event contains image 
    sendMessage(creds, chatId, { files: event.target.files, text: '' }); // text = empty string
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit} //pressing enter sends message
      />
      <label htmlFor="upload-button"> 
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      {/* image input */}
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      {/* send button */}
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;