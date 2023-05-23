import React from 'react';
import './App.css';
import { AppProvider } from '@shopify/polaris'; 
import '@shopify/polaris/build/esm/styles.css';
import Nav from './components/Nav/Nav'
function App() {
  return (
    <AppProvider>
          <Nav />
    </AppProvider>   
  )
}

export default App
