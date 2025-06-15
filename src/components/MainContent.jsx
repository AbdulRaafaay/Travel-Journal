import "./MainContent.css"

export default function MainContent (props) {
    return (
        <main className="content">
            <img src={props.e.img.src} alt={props.e.img.alt} className="main-picture"></img>
            <div className="main-section">
                <div className="top-section">
                    <img src="./src/images/marker.png" alt="location" className="marker" ></img>

                    <p className="country">{props.e.country}</p>
                    <a href={props.e.googleMapsLink} className="google-link">View on Google Maps</a>
                </div>
                <div className="bottom-section">
                    <h1 className="title">{props.e.title}</h1>

                    <p className="date">{props.e.dates}</p>

                    <p className="para">{props.e.text}</p>
                </div>
            </div>
        </main>
    )
}