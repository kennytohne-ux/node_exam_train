import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditCand = () => {

    const { id } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:9000/candidates/${id}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(res => {
            setInfo(res)
        }).catch(()=>{alert('Reload And Try again')})
    },[])

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const data = {
            FirstName: form.FirstName.value,
            LastName: form.LastName.value,
            Gender: form.Gender.value,
            DOB: form.DOB.value,
            ExamDate: form.ExamDate.value
        }

        fetch(`http://localhost:9000/candidates/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => {
            if(res.message === 'candidate Updated successfully'){
                alert(res.message);
                window.location.href = '/home';
            }
            else{
                alert(res.message);
            }
        }).catch(()=>{alert('Reload And try again')});
    }
    

    return ( 
        <div className="">
            { info && info.map((infos)=>(
                <form onSubmit={handleSubmit} key={infos.CandidateNationalId}>
                <div className="input">
                    <input type="text" placeholder="First Name" name="FirstName" value={infos.FirstName}/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Last Name" name="LastName" value={infos.LastName}/>
                </div>
                <select name="Gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <div className="input">
                    <input type="date" name="DOB" value={infos.DOB}/>
                </div>
                <div className="input">
                    <input type="date" id="password" placeholder="" name="ExamDate" value={infos.ExamDate}/>
                </div>
                <button type="submit">Edit</button>

            </form>
            )) }
        </div> 
    );
}
 
export default EditCand;