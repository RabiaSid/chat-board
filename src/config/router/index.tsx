import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import SignUp from '../../pages/auth/sign-up';
import SignIn from '../../pages/auth/sign-in';
import ChatBot from '../../pages/chat-bot';

export default function AppRouter() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="chat-bot/*" element={<ChatBot />} />
        </Routes>
    </Router>
    </>
  )
}
