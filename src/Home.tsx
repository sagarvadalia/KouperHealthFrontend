import { Link } from "react-router"

export const Home = () => {
    return (
        <div>
            <Link to="/upload">Upload PDFs</Link>
            <Link to="/patient">View Patient Data</Link>
        </div>   
    )
}