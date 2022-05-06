import logo from './logo.svg';
import './App.css';
import { PortfolioHeader } from './PortfolioHeader';
import { ExperinceList } from './ExperienceList';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function App() {
  // use i18next to translate the text
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <PortfolioHeader/>
        {window.location.pathname === "/" ? <p className="text-center text-gray-700 text-xl">
          <h1 className="text-center text-gray-700 text-4xl font-bold">Alexandre Spitz</h1>
          Développeur Fullstack et Tech Lead chez <a className="text-blue-500" href="https://ouidou.fr" target="_blank" rel="noopener noreferrer">Ouidou</a>
        </p> : null}
        
        {/* Name of the current page as title centered tailwind*/}
        <h1 className="text-center text-gray-700 text-2xl font-bold mt-16">{t(window.location.pathname.substring(1) ? window.location.pathname.substring(1) : "experience")}</h1>
        
        <Outlet/>
        {/* <ExperinceList/> */}
      </header>
    </div>
  );
}

export default App;
