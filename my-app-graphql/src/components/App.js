import React from 'react';
import logo from '../../src/logo.svg';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1. get to know GraphQL
        </p>
        <a
          className="App-link"
          href="https://graphql.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GraphQL
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>2. maybe use Prisma...?</p>
        <a
          className="App-link"
          href="https://www.prisma.io/with-graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started with GraphQL & Prisma
        </a>

      </header>
    </div>
  );
}

export default App;
