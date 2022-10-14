import './App.css';
import { Header } from './commponents/header/header';
import dataFromHeader from './commponents/data/headerData.json'
import { MainComponent } from './commponents/main/main';
import mainData from './commponents/data/mainData.json'
import { Footer } from './commponents/footer/footer';

function App() {

  const heading = dataFromHeader.headerData.heading1;
  const author = dataFromHeader.headerData.author;
  const thisYear = new Date().getFullYear();
  return (
    <div className='App'>
      <Header heading1={heading} author={author}/>
      <MainComponent user={mainData.userData}/>
      <Footer date={thisYear}/>
    </div>
  )
}

export default App;
