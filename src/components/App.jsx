import React from 'react';
import '../styles/App.css';
import Header from './Header.jsx';
import ToDoList from './Input.jsx';

function App() {
    return (<div className="container">
        <Header />
        <ToDoList />

    </div>

    );
}

export default App;
