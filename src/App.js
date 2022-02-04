import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <Header />
        <main>
          <Homepage />
        </main>
      </div>
    </div>
  );
}

export default App;
