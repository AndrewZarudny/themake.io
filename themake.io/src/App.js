// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Form from './components/form';

const Andrew = {
  name: 'Andrew',
  lastname: 'Zarudnyi',
  title: 'Project Manager / E-Commerce Specialist',  
  email: 'andrew@themake.io',
  summary: '',
  description:'',
  image: 'https://avatars.git'
}

function App() {
  return (
    <div className="App">
      <Header person={Andrew}/>
      <div className='row'>
        <div className='col-6'>
          <Form />
          </div>
      </div>
      
    </div>
  );
}


export default App;
