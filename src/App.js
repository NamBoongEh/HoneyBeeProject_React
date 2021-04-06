import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/page/Home';
import Login from './components/page/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Register2 from './components/page/Register2';
import Register1 from './components/page/Register1';
import TermsOfService from './components/page/TermsOfService';
import MyPageEdit from './components/page/MyPageEdit';
import ReLogin from './components/page/ReLogin';
import FreeBoard from './components/page/FreeBoard';
import FreeBoardRead from './components/page/FreeBoardRead';
import FreeBoardWrite from './components/page/FreeBoardWrite';
import Reply1 from './components/search/Reply1';
import ReReply1 from './components/search/ReReply1';
import ReReply2 from './components/search/ReReply2';
import Board from './components/page/Board';
import BoardWrite from './components/page/BoardWrite';
import BoardRead from './components/page/BoardRead';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path={'/home'} component={Home} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register1'} component={Register1} />
        <Route exact path={'/register2'} component={Register2} />
        <Route exact path={'/tos'} component={TermsOfService} />
        <Route exact path={'/mypageedit'} component={MyPageEdit} />
        <Route exact path={'/relogin'} component={ReLogin} />
        <Route exact path={'/freeboard'} component={FreeBoard} />
        <Route exact path={'/freeboardread'} component={FreeBoardRead} />
        <Route exact path={'/freeboardwrite'} component={FreeBoardWrite} />
        <Route exact path={'/reply1'} component={Reply1} />
        <Route exact path={'/rereply1'} component={ReReply1} />
        <Route exact path={'/rereply2'} component={ReReply2} />
        <Route exact path={'/board'} component={Board} />
        <Route exact path={'/boardwrite'} component={BoardWrite} />
        <Route exact path={'/boardread'} component={BoardRead} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
