import Homechild from "./Homechild";
import Homechild1 from "./Homechild1";
import "./Home.css"

export default function Home(){
    let Children=["Rohit","Abhiram","Priyadarshi","Pooja","Sandip"]
    return(
        <div className="home-container">
            <h1>Hello Home Page</h1>
            <Homechild name="Rohit"/>
            <Homechild1 students={Children}/>
        </div>
    );
}