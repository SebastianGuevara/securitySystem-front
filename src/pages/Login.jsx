import { FormContainer, LoginContainer, LoginFormContainer } from "../components/common/Containers"
import { BigLogoImage } from "../components/common/Images";
import Logo from "../assets/images/logo.png"
import { H1 } from "../components/common/Texts";
import { useState } from 'react';
import { FormButton } from "../components/common/Buttons";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
    }

    return(
        <LoginContainer>
            <BigLogoImage src={Logo}/>
            <LoginFormContainer>
                <H1>Iniciar Sesión</H1>
                <FormContainer>
                    <div class="FormCon-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <FormButton type="submit" class="btn btn-primary" style={{alignSelf:"center",width:"50%"}}>Ingresar</FormButton>
                </FormContainer>
            </LoginFormContainer>
        </LoginContainer>
    )
}

export default Login;