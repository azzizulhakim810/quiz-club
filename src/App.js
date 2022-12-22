import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import Statistics from './components/Statistics/Statistics';
import AllTopics from './components/Topics/AllTopics';




function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/alltopics' element={<AllTopics/>}></Route>
        <Route path='/quiz/:quizId' element={<QuestionAnswer/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
