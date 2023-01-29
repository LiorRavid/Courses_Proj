import React, { useEffect, useState, useContext } from "react";
import { loginAction } from "../../actions/loginAction";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

// import services
import {loginUser} from "../../services/login.service";


const LoginForm = (props) => {
	const { dispatchUserData } = useContext(LoginContext);

	const [role, setRole] = useState("Student");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isEmailinputValid, setIsEmailInputValid] = useState(true);
	const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

	useEffect(() => {
		if (props.errorMessage !== "") {
			setErrorMessage(props.errorMessage);
		}
	}, [props.errorMessage]);

	const isFormInavlid = () => {
		return email === "" || password === "";
	};

	const onSelectRole = (event) => {
		const theSelcet = event.target.value.trim();
		setRole(theSelcet);
	}

	const onBlurEmailInput = (event) => {
		const theEmail = event.target.value.trim();
		if (theEmail === "") {
			setEmail("");
			setIsEmailInputValid(false);
		} else {
			setEmail(theEmail);
			setIsEmailInputValid(true);
		}
	};

	const onBlurPasswordInput = (event) => {
		const thePassword = event.target.value.trim();
		setPassword(thePassword === "" ? "" : thePassword);
		setIsPasswordInputValid(thePassword !== "");
	};

	const onSubmitform = async(event) => {
		event.preventDefault();
		try{
			const user = await loginUser({email,password,role});
			dispatchUserData(loginAction(user));
			if(role === "professor")navigate('/professor');
			else if(role === "student")navigate('/student');
		}catch(error){
			if (error.message === "User not found") {
				setErrorMessage(error.message);
			}
		}
	};

	return (
		<div className="login-form">
			<h3>Login</h3>
			{errorMessage !== "" && <div className="error-message">{ errorMessage }</div> }
			<form onSubmit={ onSubmitform }>
				<div className='select-box'>
						<label htmlFor="role" className='title-label'>Role</label>
						<select name="role" id="role" onChange={onSelectRole}>
							<option value="student">Student</option>
							<option value="professor">Professor</option>
						</select>
				</div>
				<input placeholder="Email" onBlur={ onBlurEmailInput } />
				{ !isEmailinputValid && <div className="invalid-message">You must enter your email.</div> }
				<input type="password" placeholder="Password" onBlur={ onBlurPasswordInput } />
				{ !isPasswordInputValid && <div className="invalid-message">You must enter your password.</div> }
				<div className="login-form__nav">
					<button type="submit" disabled={ isFormInavlid() }>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;