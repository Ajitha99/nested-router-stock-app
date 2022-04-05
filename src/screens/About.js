
import "../styles/aboutus.css";

export default function About(){
    return(

        <div className="aboutus-main">
            <h1>Requirements</h1>
            <p>Use React Router to add functionality to an existing application.
Add functionality that lets users click a listed stock item (after searching for them). When a user clicks on a stock item, they should be navigated to a page that displays the following details stock what was clicked (nested components):</p>
        <div className="ol-Div">
            <ol>
                <li>stock symbol</li>
                <li>full company name</li>
                <li>primary exchange</li>
                <li>latest price</li>
                <li>52 week high price</li>
                <li>52 week low price</li>
                <li>market cap</li>
            </ol>
        </div>
    </div>
    )
}
