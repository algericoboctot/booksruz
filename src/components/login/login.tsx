import { getServerSession } from "next-auth";
import Link from "next/link";

const Login = async () => {
    const session = await getServerSession();
    return(
        <>
            
        </>
    );
}

export default Login;