import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
// stylesheet
import './App.css';

const App = () => {
    return (
        // Chat Engine component
        <ChatEngine
            height="100vh"
            // retrieved from chatengine.io
            projectID="2871ba63-0851-49dd-a5ec-4f93819f58e8"
            // admin username
            userName="carina"
            // admin password
            userSecret="123123"
            // new prompt
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            // message sound
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// ADDITIONAL: add infinite scrolls, logout, more customizations... here
export default App;
