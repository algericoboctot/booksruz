'use client';

import { getServerSession } from "next-auth";
import Link from "next/link";
import LoginForm from "./loginform";

const Login = async () => {
    return(
        <>
            <button type="button"><span className="font-bold">Login</span> or <span className="font-bold">Register</span></button>
            <LoginForm />
        </>
    );
}

export default Login;