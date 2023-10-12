import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'


function App() {

  return (
    <div>
    <Navigation/>
    <div className='main_container'>
    <ContactHeader/>
    <ContactForm/>
    </div>
    </div>

  );
}

export default App
