import { FormContainer, LoginContainer, LoginFormContainer } from "../components/common/Containers"
import { BigLogoImage } from "../components/common/Images";
import Logo from "../assets/images/logo.png"
import { H1 } from "../components/common/Texts";
import { FormButton } from "../components/common/Buttons";
import { useRef } from "react";
import { login } from "../services/UserServices";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/UserSlice";

const Login = () =>{

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value)
        login(emailRef.current.value, passwordRef.current.value).then((response)=>{
            console.log(response.data)
            if(""!==response.data){
                dispatch(setUser({id:response.data.id, firstName: response.data.firstName, lastname: response.data.lastName, email:response.data.email, charge:response.data.charge}))
                navigate("/map")
            }
            else{
                alert("Usuario o contraseña incorrectos")
                emailRef.current.value = "";
                passwordRef.current.value = "";
            }
        
        })
    }

    return(
        <LoginContainer>
            <BigLogoImage src={Logo}/>
            <LoginFormContainer>
                <H1>Iniciar Sesión</H1>
                <FormContainer>
                    <div class="FormCon-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputContraseña1">Contraseña</label>
                        <input ref={passwordRef} type="password" class="form-control" id="exampleInputContraseña1" placeholder="Contraseña"/>
                    </div>
                    <FormButton class="btn btn-primary" style={{alignSelf:"center",width:"50%"}} onClick={handleLogin}>Ingresar</FormButton>
                </FormContainer>
            </LoginFormContainer>
        </LoginContainer>
    )
}

export default Login;