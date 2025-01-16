import React, { useState } from 'react';
import poissonImage from './poisson.jpg'; // Remplacer par le chemin de votre image
import attiekéImage from './attieke.jpg';
import pimentImage from './pimente.jpg';
import tomateImage from './tomate.jpg';
import oignonImage from './oignon.jpg';

function App() {
  // ... autres états ...

  function handleAttiekéChange(event) {
        setAttieké(parseInt(event.target.value));
    }

  const handleAssaisonnementChange = (event) => {
    const { name, value } = event.target;
    setAssaisonnements(prevAssaisonnements => ({
      ...prevAssaisonnements,
      [name]: parseInt(value)
    }));
  };

  return (
    <div>
      {/* Choix des poissons */}
      <img src={poissonImage} alt="Poisson" />
      {/* ... */}

      {/* Choix de l'attiéké */}
      <img src={attiekéImage} alt="Attiéké" />
      <label>Prix de l'attiéké (FCFA):</label>
      <input type="number" value={attieké} onChange={handleAttiekéChange} />

      {/* Choix des assaisonnements */}
      <img src={pimentImage} alt="Piment" />
      <label>Prix du piment (FCFA):</label>
      <input type="number" name="piment" value={assaisonnements.piment || 0} onChange={handleAssaisonnementChange} />
      {/* ... similaire pour tomate et oignon ... */}

      {/* ... reste du code ... */}
    </div>
  );
}