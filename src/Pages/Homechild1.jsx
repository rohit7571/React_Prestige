export default function Homechild1({students}){
    console.log(students);
    return(
        <div>
            <h1>Student list</h1>
            <ul>
            {students.map((s, index) =>
            ( 
                <li key={index}>{s}</li>
            ))}
            </ul>
        </div>
    );
}