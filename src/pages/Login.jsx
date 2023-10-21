import { FormContainer, LoginContainer, LoginFormContainer } from "../components/common/Containers"
import { BigLogoImage } from "../components/common/Images";
import Logo from "../assets/images/logo.png"
import { H1 } from "../components/common/Texts";
import { useState } from 'react';
import { FormButton } from "../components/common/Buttons";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [Contraseña, setContraseña] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, Contraseña: ${Contraseña}`);
    }

    return(
        <LoginContainer>
            <BigLogoImage src={Logo}/>
            <LoginFormContainer>
                <H1>Iniciar Sesión</H1>
                <FormContainer>
                    <div class="FormCon-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputContraseña1">Contraseña</label>
                        <input type="Contraseña" class="form-control" id="exampleInputContraseña1" placeholder="Contraseña"/>
                    </div>
                    <FormButton type="submit" class="btn btn-primary" style={{alignSelf:"center",width:"50%"}}>Ingresar</FormButton>
                </FormContainer>
            </LoginFormContainer>
        </LoginContainer>
    )
}

export default Login;