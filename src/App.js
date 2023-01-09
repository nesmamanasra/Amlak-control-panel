import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import Dashboard from './components/dashboard/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div class="wrapper">
      <Header/>
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
