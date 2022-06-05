import logo from './logo.svg';
import './App.css';
import { PortfolioHeader } from './PortfolioHeader';
import { ExperinceList } from './ExperienceList';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Route, Switch, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'

function App() {
  // use i18next to translate the text
  const { t } = useTranslation();
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <div className="App">
      <header className="App-header">
        <PortfolioHeader />
        {window.location.pathname === "/" ? <p className="text-center text-gray-700 text-xl">
          <h1 className="text-center text-gray-700 text-4xl font-bold">Alexandre Spitz</h1>
          Développeur Fullstack et Tech Lead chez <a className="text-blue-500" href="https://ouidou.fr" target="_blank" rel="noopener noreferrer">Ouidou</a>
        </p> : null}


        <Outlet />
        {/* <ExperinceList/> */}
      </header>
      {/* Footer */}
      <footer className="text-center text-gray-100 bg-gray-800 text-xl mt-8 pt-8">
        {/* Copyright Alexandre Spitz */}

        <p>
          © Alexandre Spitz 2022-2023
        </p>
      </footer>
    </div>
  );
}

export default App;
