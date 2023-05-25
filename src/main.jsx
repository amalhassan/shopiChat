import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from '@shopify/polaris';
import en from "@shopify/polaris/locales/en.json"; 
import '@shopify/polaris/build/esm/styles.css';
import {PolarisVizProvider} from '@shopify/polaris-viz';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider i18n={en}>
      <PolarisVizProvider>
        <App />
      </PolarisVizProvider> 
    </AppProvider> 
  </React.StrictMode>,
)
