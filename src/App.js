import './App.css';
import Header from './components/Header/Header.jsx';
import LeftInfo from './components/LeftInfo/LeftInfo';
import RightInfo from './components/RightInfo/RightInfo';
import GitHubIcon from '@mui/icons-material/GitHub';

function App() {
  return (
    <div className="App">
       <Header />
       <div className='main-content-main-div'>
            <LeftInfo />
            <RightInfo />
       </div>
       <footer>
        <div className='container mx-auto footer-div'>
          <span className='footer-content-span'>
            <a href="http://example.com">
              <GitHubIcon />
            </a>
          </span>
          
        </div>
       </footer>
    </div>
  );
}

export default App;
