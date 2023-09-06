import './App.css';
import img from './img/image-profil.jpg'
import IconButton from './components/button.jsx'
import { FaGithub, FaLinkedin, FaPaperclip } from 'react-icons/fa'; // Importez l'icône LinkedIn également si nécessaire

function App() {
  return (
    <div className='flex items-center mt-16 flex-col'>
      <div className='w-28 h-28 rounded-full overflow-hidden'>
        <img src={img} alt=''/>
      </div>
      <div className='mt-5 font-semibold'>@MorganeDassonville</div>
      <div className='my-3 flex flex-col'>
        <IconButton label="GitHub" icon={FaGithub} url={'https://github.com/Jun080'} />
        <IconButton label="LinkedIn" icon={FaLinkedin} url={'https://github.com/Jun080'} />
        <IconButton label="CV" icon={FaPaperclip} />
      </div>
    </div>
  );
}

export default App;
