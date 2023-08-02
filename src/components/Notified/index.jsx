import { useEffect, useState } from 'react';
import './notified.module.css';

const Notified = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 10000; // Temps de chargement simulé en millisecondes

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`notified-page ${isLoading ? 'show' : 'hide'}`}>
      <h1>Votre correspondant a été informé de votre présence. Vous pouvez maintenant quitter cette page.</h1>
      <p>Pour sonner à nouveau, re-scannez le QR Code</p>
    </div>
  );
};

export default Notified;
