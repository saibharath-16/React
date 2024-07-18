import { Link } from "react-router-dom"
import "./HomePage.css"
const HomePage = () => {
  return (
    <>
    <div className="header">
            <nav>
        <ul>
          <Link to={"/add_recipe"}style={{margin:'5px'}}>Add Recipe</Link>
          <Link to={"/recipe_details"}style={{margin:'5px'}}>Recipe Details</Link>
        </ul>
      </nav>

    </div>
    <div className="content">

    </div>
    </>
  )
}

export default HomePage
