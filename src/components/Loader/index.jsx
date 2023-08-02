import { useEffect, useState } from 'react';
import './loader.module.css';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 10000; // Temps de chargement simulé en millisecondes

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-page ${isLoading ? 'show' : 'hide'}`}>
      <div className="loader"></div>
      <h1>Votre correspondant est informé de votre présence. Merci de patienter...</h1>
    </div>
  );
};

export default Loader;
