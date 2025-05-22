import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const Home = () => {


    const [info, setInfo] = useState(null);

    const [count, setCount] = useState({
        total_candidates: 0,
        total_pass: 0,
        total_fail: 0
    });

    const handleCount = () =>{
        fetch(`http://localhost:9000/count`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(data => {
            setCount(data);
        }).catch(err => console.error('Failed to fetch counts:', err));
    }

    useEffect(()=>{
        fetch('http://localhost:9000/candidates', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(res => res.json())
        .then(res => {
            setInfo(res)
        })
    
     handleCount(); },[]);

    return ( 
        <div className="home">
            <h2>Welcome Home</h2>

            <p>all candidates: {count.total_candidates}</p>
            <p>passed acndidates: {count.total_pass}</p>
            <p>fail candidates: {count.total_fail}</p>


            <table>
                <tr>
                    <th>id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Exam Date</th>
                    <th colspan="2">Modify</th>
                </tr>
                {info && info.map((row)=>(
                <tr key={row.CandidateNationalId}>
                    <td>{ row.CandidateNationalId }</td>
                    <td>{ row.FirstName }</td>
                    <td>{ row.LastName }</td>
                    <td>{ row.Gender }</td>
                    <td>{ row.DOB }</td>
                    <td>{ row.ExamDate }</td>
                    <td><Link to={`/editC/${row.CandidateNationalId}`} >Edit</Link></td>
                    <td><Link to={`/deleteC/${row.CandidateNationalId}`} >Delete</Link></td>
                </tr>
            ))}
            </table>
        </div>
     );
}
 
export default Home;