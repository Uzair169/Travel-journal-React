import React from "react"

export default function Card(props) {
    return (
        <div className="journal-entry">
            <img src={props.coverImg} alt={props.title} />
            <div className="entry-content">
                <div className="location">
                    <p className="card--place">📍{props.location}</p>
                    <a href={props.link} ><u>View on Google Maps</u></a>
                </div>
                <h1 className="card--title">{props.title}</h1>
                <p className="dates">{props.date}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}