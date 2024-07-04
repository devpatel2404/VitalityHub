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
                                document.getElementById("UsernameError").hidden = false;
                            } else {
                                // @ts-ignore
                                document.getElementById("PasswordError").hidden = false;
                            }
                        });
                    }
                } else {
                    const tokenManager = TokenManager.getInstance();
                    tokenManager.setToken(JSON.stringify(response.text()));
                    router.push("/Front-Page");
                }
            })
    }

    // @ts-ignore
    const manageErrors = (e) => {
        if (e.target.styles.hidden == false) {
            e.target.styles.hidden = true;
        }
    }

    return (
        <main className={"h-screen"}>
            <h1 id={"PasswordError"}
                className={"text-center LoginError bg-red-300 text-red-700 p-2 border-2 border-red-700 mt-4 mb-4"}
                hidden={true} onSubmit={manageErrors}>Incorrect Login Credentials</h1>
            <h1 id={"UsernameError"}
                className={"LoginError bg-red-300 text-red-700 p-2 border-2 border-red-700 mt-4 mb-4"}
                hidden={true}>User Does Not Exist</h1>
            <div className={"LoginFormContainer"}>
                <div className={""}>
                    <h1 id={"VitalityHub"} className={"text-center text-6xl text-blue-800 mt-12 mb-12"}>
                        <Link href={"/"} className={"AppName"}>VitalityHub</Link></h1>
                    <form className={"LoginForm"} onSubmit={handleSubmit}>
                        <input name={"username"} className={"text-black border-2 border-black mt-2 LoginInput rounded-xl"}
                               placeholder={"Username"} onChange={handleInput}/>
                        <input name={"password"} type={"p"}
                               className={"text-black border-2 border-black mt-2 LoginInput rounded-xl"} placeholder={"Password"}
                               onChange={handleInput}/>
                        <button className={"text-black LoginButton border-2 border-black rounded-xl"}>Login</button>
                        <Link href={"/"} className={"flex text-blue-800 mt-2"}>Forgot password?</Link>
                        <div>
                        </div>
                        <h1 className={"mb-4"}>Don&apos;t have an account?
                            <Link href={"/SignUp"} className={"text-blue-800"}> Sign Up</Link></h1>
                    </form>
                </div>
            </div>
        </main>
    );
}