export default function Homechild(props){
    let student={
        Name:"Rohit",
        Sem:"6th sem",
        Branch:"CSE"
    }
    return(
        <div>
        <h1>Welcome to Child page</h1>
        <h1>{props.name}</h1>
        <h1>{student.Name}</h1>
        <h1>{student.Sem}</h1>
        <h1>{student.Branch}</h1>
        
        </div>
    );
}