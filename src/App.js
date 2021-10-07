import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
// stylesheet
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            // retrieved from chatengine.io
            projectID="2871ba63-0851-49dd-a5ec-4f93819f58e8"
            // admin username
            userName="carina"
            // admin password
            userSecret="123123"
            // new prompt
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}
        />
    :
    }
export default App