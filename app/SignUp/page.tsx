"use client"
import Link from "next/link";
import "../Styles/SignUp.css"
import {useState} from "react";
import Image from "next/image";

export default function SignUp() {
    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/saveUser', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userCredentials)
        })
            .then(response => {
                if (!response.ok) {
                    document.getElementById("EmailAlreadyExists").hidden = false;
                }
            })
            .catch(error => console.error('Error:', error));
    }

    const [userCredentials, setUserCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('');
    let passwordsSimilar = true;

    // @ts-ignore
    const handlePasswords = (e) => {
        if (userCredentials.password == e.target.value)
            passwordsSimilar = true;
        else
            passwordsSimilar = false;
        document.getElementById("NotMatch").hidden = passwordsSimilar;
    }

    // @ts-ignore
    const onChange = (e) => {
        const {name, value} = e.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    return (
        <main className={"bg-blue-800 h-screen"}>
            <div className={"HaveAccount"}>
                    <div className={"inline-block"}>
                        <h1 className={"HaveAccountText"}>Already have an account? Sign in</h1>
                        <Link href={"/"}>
                            <h1 className={"HaveAccountText italic underline"}>Forgot password?</h1>
                        </Link>
                    </div>
                    <div className={"inline-block"}>
                        <Link href={"/Login"}>
                            <button className={"border-2 border-white HaveAccountButton"} type={"reset"}>Login</button>
                        </Link>
                    </div>
            </div>
            <div className={"SignUp"}>
                <form className={"SignUpContainer"} onSubmit={handleSubmit} method={"post"}>
                    <h1 className={"text-white text-4xl text-center mb-4 pt-4 flex justify-center"}><Link href={"/"}>
                        VitalityHub</Link></h1>
                    <div className={"SignUpInputContainer"}>
                        <h1 className={"SignUpInputTitle text-red-600"} id={"UsernameAlreadyExists"} hidden={true}>Username
                            Already Exists</h1>
                        <h1 className={"SignUpTitle text-center text-white"}>Create an Account</h1>
                        <h1 className={"SignUpInputTitle"} onChange={onChange}>Username</h1>
                        <input name={"username"} className={"SignUpInput"}></input>
                        <h1 className={"SignUpInputTitle text-red-600"} id={"EmailAlreadyExists"} hidden={true}>Email
                            Already Exists</h1>
                        <h1 className={"SignUpInputTitle"}>Email</h1>
                        <input name={"email"} type={"email"} className={"SignUpInput"}></input>
                        <h1 className={"SignUpInputTitle"} onChange={onChange}>Password</h1>
                        <input name={"password"} type={"password"} className={"SignUpInput"}
                               onChange={onChange}></input>
                        <h1 className={"SignUpInputTitle"}>Confirm Password</h1>
                        <input className={"SignUpInput"} type={"password"} onChange={handlePasswords}></input>
                        <p id={"NotMatch"} className={"text-red-700 SignUpInputTitle"}
                           hidden={passwordsSimilar}>Passwords
                            do not match.</p>
                        <div className={"AgreeToTerms flex"}>
                            <input type={"checkbox"}></input>
                            <p className={"AgreeToTermsDescription"}>By clicking here, I state that I have read and
                                understood the <span className={"italic underline"}>terms and conditions.</span></p>
                        </div>
                        <button className={"SignUpButton"} type={"submit"}>Create Account</button>
                    </div>
                </form>
            </div>
        </main>
    );
}