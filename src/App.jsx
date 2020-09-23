import React from 'react';
import firebase, { db, auth } from './Firebase';


console.log(db, auth.currentUser);

const App = () => {
  return (
    <div className="App">
      <h1>Página principal de Unimarc Recetas</h1>
    </div>
  );
}

export default App;
