'use client'
import {useState} from "react";
import Link from "next/link";
import "../Styles/Login.css"
import {useRouter} from "next/navigation";

export default function Login(){
    const router = useRouter();
    const [loginCredentials, setLoginCredentials] = useState({
        username: '',
        password: ''
    });

    // @ts-ignore
    const handleInput = (e) => {
        const {name, value} = e.target;
        setLoginCredentials({...loginCredentials, [name]: value});
    }

    // @ts-ignore
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/api/login", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(loginCredentials)
        })
            .then(response => {
                if (!response.ok) {
                    if (response.status === 400) {
                        // Bad request
                        response.text().then(errorMessage => {
                            if (errorMessage.includes('does not exist')) {
                                //@ts-ignore
                                document.getElementById("VitalityHub").hidden = true;
                            } else {

                            }
                        });
                    }
                } else {
                    router.push("/Front-Page");
                }
            })
    }

    return (
        <main className={"h-screen"}>
            <h1>VitalityHub</h1>
            <div className={"LoginFormContainer"}>
                <div className={""}>
                    <h1 id={"VitalityHub"} className={"text-center text-lg"}>Log Into VitalityHub</h1>
                    <form className={"LoginForm"} onSubmit={handleSubmit}>
                        <input name={"username"} className={"text-black border-2 border-black mt-2 LoginInput"} placeholder={"Username"} onChange={handleInput}/>
                        <input name={"password"} type={"p"} className={"text-black border-2 border-black mt-2 LoginInput"} placeholder={"Password"} onChange={handleInput}/>
                        <button className={"text-black LoginButton"}>Login</button>
                        <Link href={"/"} className={"text-center"}>Forgot Password</Link>
                        <div>

                        </div>
                        <button><Link href={"/SignUp"}>Create Account</Link></button>
                    </form>
                </div>
            </div>
        </main>
    );
}