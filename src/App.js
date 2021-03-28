import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/page/Home';
import Login from './components/page/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Register2 from './components/page/Register2';
import Register1 from './components/page/Register1';
import TermsOfService from './components/page/TermsOfService';
import MyPage from './components/page/MyPage';
import ReLogin from './components/page/ReLogin';

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
        <Route exact path={'/mypage'} component={MyPage} />
        <Route exact path={'/relogin'} component={ReLogin} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
