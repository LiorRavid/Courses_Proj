import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SubscribeForm from './SubscribeForm';

const LoginPage = ()=>{
    const errorMessage = "";
	const [isLoginMode, setIsLoginMode] = useState(true);

    return (
        <div className='login-page'>
            <div className="login-page__form">
            { isLoginMode ?
					<LoginForm setIsLoginMode={ setIsLoginMode } errorMessage={ errorMessage }/> :
                    <SubscribeForm setIsLoginMode={ setIsLoginMode } /> }
			</div>
        </div>
    )
};

export default LoginPage;