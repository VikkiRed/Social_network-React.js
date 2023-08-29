import './styles/reset.css';
import './styles/main.css';


import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Profile from './components/profile/Profile';
import { Routes, Route } from 'react-router-dom';
import DialoguesContainer from './components/dialogues/DialoguesContainer';
import UsersContainer from './components/users/UsersContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/profile" 
              element={<Profile />}/>
            <Route path="/dialogues" 
              element={<DialoguesContainer />} />
            <Route path="/users" 
              element={<UsersContainer />} />
          </Routes>
        </div>
        
      </div>



  );
}

export default App;
