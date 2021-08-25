import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import './App.css'

function App() {

    if (!localStorage.getItem('username')) return <LoginForm/>

    return <ChatEngine
        height={'100vh'}
        projectID={'11e84bec-b51e-4b66-ac42-6a2200fa800b'}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
}

export default App