import React from 'react'
import './App.css';
import firebase from './firebase';
import Child from './Child';

function App() {
    window.addEventListener("load", () => {
        const messaging = firebase.messaging();
        messaging
            .requestPermission()
            .then(() => {
                console.log("permission granted");
            })
            .catch(() => console.log("permission denied"));
    });
    return (
        <div className="App">
            <Child />
        </div>
    );
}

export default App;
