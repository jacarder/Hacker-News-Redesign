import './App.css';
import HeaderFooter from './components/HeaderFooter/HeaderFooter';
import NewsBox from './components/NewsBox/NewsBox';

function App() {
  return (
    <div className="App">
      <HeaderFooter>
        <NewsBox />
      </HeaderFooter>
    </div>
  );
}

export default App;
