import React from 'react';
import './App.css';
import { AppProvider } from '@shopify/polaris'; 
import '@shopify/polaris/build/esm/styles.css';
import Nav from './components/Nav/Nav'
import { Marketing } from './pages/Marketing.jsx'

function App() {
  return (
    <AppProvider i18n={{
      Polaris: {
        ResourceList: {
          sortingLabel: 'Sort by',
          defaultItemSingular: 'item',
          defaultItemPlural: 'items',
          showing: 'Showing {itemsCount} {resource}',
          Item: {
            viewItem: 'View details for {itemName}',
          },
        },
        Common: {
          checkbox: 'checkbox',
        },
      },
    }}>
      <Nav />
      <Marketing />
    </AppProvider>   
  )
}

export default App
