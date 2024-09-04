import React from "react"
import ReactDOM from "react-dom/client"
import Navbar from './navbar.js'
import './styles.css'
import data from './data.js'
import Card from './card.js'


function App() {
    const cards = data.map(items => {
        return (
            <Card 
                key = {items.id}
                {...items}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)