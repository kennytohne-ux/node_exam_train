import img from '../images/loginBanner.jpg';
const Login = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();

        const form = e.target;
        const data = {
            AdminName: form.AdminName.value,
            Password: form.Password.value
        }

        fetch('http://localhost:9000/login',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.message === 'Login success'){
                alert(res.message);
                window.location.href = '/home';
            }
            else{
                alert(res.message || 'Login Failed');
            }
        }).catch(()=>{alert('Reload and try again')});

    }
    

    return (
        <div className="login">
                {/* banner image */}

            <div className="wImg">
                <img src={img} alt="" />
            </div>

                {/* login Form */}

            <div className="lForm">

                <div className="logo"><b>RWANDA DRIVING LICENCE</b></div>

                <div className="insideForm">

                    <h2>Sign In To <b>RWANDA DRIVING <br /> LICENCE</b></h2>
                    <p className="p">Welcome to rdL. Please Enter Your Login Details <br /> Below To Use This App</p>

                {/* form */}

                    <form onSubmit={handleSubmit} >
                        <div className="input">
                            <input type="text" placeholder="User Name" name="AdminName"/>
                        </div>
                        <div className="input">
                            <input type="password" id="password" placeholder="Password" name="Password"/>
                        </div>
                        <button type="submit">Login</button>

                        {/* <div className="or">
                            <div className="line"></div>
                            <p>OR</p>
                        </div>

                        <button className="btne"><img src={ggl} alt="" /> Sign In with Google</button> */}
                    </form>
                </div>
            </div>

        </div>
     );
}
 
export default Login;