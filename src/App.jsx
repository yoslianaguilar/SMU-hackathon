import React from 'react';
import { Layout } from './components/Layout.jsx';
import firebase, { db, auth } from './Firebase';


console.log(db, auth.currentUser);

const App = () => {
  return (
    <Layout>
      
    </Layout>
  );
}

export default App;
