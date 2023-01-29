import React, { useContext, useState} from "react";
import { useNavigate} from 'react-router-dom';
import { LoginContext} from "../../context/LoginContext";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {TiArrowBack} from "react-icons/ti";
import validator from "validator";
import {getFormatedDate} from "../../services/util.service";
import { editLoginUserAction} from "../../actions/loginAction";
import { editProfessor } from "../../services/professor.service";



const EditUserPage = (props) => {

    const navigate = useNavigate();
    const { userData, dispatchUserData } = useContext(LoginContext);
    const {firstName,lastName,birthDay,address,phoneNumber,email} =  userData.user;
    const foramtedBirthDay = getFormatedDate(birthDay);
    const [invalidMessages, setInvalidMessages] = useState(["", "", "", "", "",""]);
    const [validInputs, setValidInputs] = useState([false,false,false,false,false,false]);


    function onArrowBack(){
        (userData.role === "professor") ? navigate('/professor') : navigate('/student');
    }

    function onSubmitform(event){
        event.preventDefault();
        const newUserData = {
            user:{
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                birthDay: event.target.birthDay.value,
                address: event.target.address.value,
                phoneNumber: event.target.phoneNumber.value,
                email: event.target.email.value,
            },
            role:"professor",
            token:userData.token
        }
        console.log('userData.token',userData.token);
        editProfessor(newUserData.user, userData.token);
        dispatchUserData(editLoginUserAction(newUserData));
    }

    function onCancelEdit(){
        (userData.role === "professor") ? navigate('/professor') : navigate('/student');
    }

    function onBlurFirstName(event){
        const newFirstName = event.target.value.trim();
        const isNewFirstNamevalid = (newFirstName) => {
            return newFirstName.length >= 2;
        };
        validateInput(newFirstName,0,isNewFirstNamevalid,"You must enter your first name","name invalid");
        
    }

    function onBlurLastName(event){
        const newLastName = event.target.value.trim();
        const isNewLastNamevalid = (newLastName) => {
            return newLastName.length >= 2;
        };
        validateInput(newLastName,1,isNewLastNamevalid,"You must enter your last name","name invalid");
    }

    function onBlurBirthDay(event){
        const newBirthDay = event.target.value.trim();
        validateInput(newBirthDay,2,validator.isDate,"You must enter your birthday","Birthday invalid");
    }

    function onBlurAddress(event){
        const newAddress = event.target.value.trim();
        const isAddressvalid = (newAddress) => {
            return newAddress.length >= 2;
        };
        validateInput(newAddress,3,isAddressvalid,"You must enter your address","Address invalid");
    }

    function onBlurPhoneNumber(event){
        const newPhoneNumber = event.target.value.trim();
        const isPhoneNumbervalid = (newPhoneNumber) => {
            return newPhoneNumber.length === 10;
        };
        validateInput(newPhoneNumber,4,isPhoneNumbervalid,"You must enter your phone number","Phone number invalid");
    }

    function onBlurEmail(event){
        const newEmail = event.target.value.trim();
        validateInput(newEmail,5,validator.isEmail,"You must enter your email","Email invalid");
    }

    function  isFormInvalid(){
        return validInputs.includes(false);
    }

    function validateInput(value,inputIndex,isValueValidFunc,missingValueMessage,invalidValueMessage){
        if (value.length > 0) {
            if (isValueValidFunc(value)) {
                setStateOfInputs(inputIndex,"", true);
            } else {
                setStateOfInputs(inputIndex,invalidValueMessage, false);
            }
        } else {
            setStateOfInputs(inputIndex,missingValueMessage, false);
        }
    }

    function setStateOfInputs(inputIndex,message, isvalidInput){
        const newInavlidMessages = [...invalidMessages];
        const newValidInputs = [...validInputs];
        newInavlidMessages[inputIndex] = message;
        setInvalidMessages(newInavlidMessages);
        newValidInputs[inputIndex] = isvalidInput;
        setValidInputs(newValidInputs);
    }

    return (
        <React.Fragment>
            <div className="edit-user-form main">
                <div className="form-container">
                    <div className="arrow-back">
                        <TiArrowBack size="30px" title="Back" className="arrow-item" onClick={onArrowBack}/>
                    </div>
                    <h1>Edit user info</h1>
                    <form className="user-form" onSubmit={onSubmitform}>
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off">
                            <TextField id="outlined-first-name" name="firstName" style={{color:"red"}} label="First-Name" defaultValue={firstName} onBlur={onBlurFirstName} error={invalidMessages[0] !== ""}/>
                        </Box>
                        { (invalidMessages[0] !== "") && <div className="invalid-message">{ invalidMessages[0] }</div>}
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" }, borderColor:(invalidMessages[1] !== "")?"red":""}} noValidate autoComplete="off">
                            <TextField id="outlined-last-name" name="lastName" label="Last-Name" defaultValue={lastName} onBlur={onBlurLastName} error={invalidMessages[1] !== ""}/>
                        </Box>
                        { (invalidMessages[1] !== "") && <div className="invalid-message">{ invalidMessages[1] }</div>}
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off">
                            <TextField id="outlined-birthday"  name="birthDay" label="Birthday" type="date" defaultValue={foramtedBirthDay} onBlur={onBlurBirthDay} error={invalidMessages[2] !== ""}/>
                        </Box>
                        { (invalidMessages[2] !== "") && <div className="invalid-message">{ invalidMessages[2] }</div>}
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off">
                            <TextField id="outlined-address" name="address" label="Address" defaultValue={address} onBlur={onBlurAddress} error={invalidMessages[3] !== ""}/>
                        </Box>
                        { (invalidMessages[3] !== "") && <div className="invalid-message">{ invalidMessages[3] }</div>}
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off">
                            <TextField id="outlined-phone-number" name="phoneNumber" label="Phone" defaultValue={phoneNumber} onBlur={onBlurPhoneNumber} error={invalidMessages[4] !== ""}/>
                        </Box>
                        { (invalidMessages[4] !== "") && <div className="invalid-message">{ invalidMessages[4] }</div>}
                        <Box sx={{"& > :not(style)": { m: 1, width: "25ch" },}} noValidate autoComplete="off">
                            <TextField id="outlined-email" name="email" label="Email" type="email" defaultValue={email} onBlur={onBlurEmail} error={invalidMessages[5] !== ""}/>
                        </Box>
                        { (invalidMessages[5] !== "") && <div className="invalid-message">{ invalidMessages[5] }</div>}
                        <div className="form-btn-nav">
                                <button className="submit-btn" type="submit" disabled={ isFormInvalid() }>Submit</button>
                                <button className="cancel-btn" onClick={ onCancelEdit }>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default EditUserPage;
