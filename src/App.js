import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPost from './components/post/ListPost';
import ReadPost from './components/post/ReadPost';
import UpdatePost from './components/post/UpdatePost';
import AddPostagem from './components/post/AddPost';
import AddTema from './components/tema/AddTema';
import ReadTema from './components/tema/ReadTema';
import UpdateTema from './components/tema/UpdateTema';
import ListTema from './components/tema/ListTema';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPost />} />
          <Route path="/post" element={<ListPost />} />
          <Route path="/addPost" element={<AddPostagem/>} />
          <Route path="/readPost/:id" element={<ReadPost />} />
          <Route path="/updatePost/:id" element={<UpdatePost />} />
          <Route path="/tema" element={<ListTema />} />
          <Route path="/addTema" element={<AddTema />} />
          <Route path="/readTema/:id" element={<ReadTema />} />
          <Route path="/updateTema/:id" element={<UpdateTema />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
