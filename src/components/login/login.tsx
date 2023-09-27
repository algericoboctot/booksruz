'use client';
import { useState } from "react";
import LoginForm from "./loginform";
import Modal from "@/ui/modal/modal";

const Login = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const hideModalHandler = () => {
        setShowModal(false);
    }
    const showModalHandler = () => {
        setShowModal(true);
    }
    return(
        <>
            <button type="button" onClick={showModalHandler}>
                <span className="font-bold">Login</span> or <span className="font-bold">Register</span>
            </button>
            {showModal &&
                <Modal onHideModal={hideModalHandler}>
                    <button type="button" onClick={hideModalHandler}>
                        X
                    </button>
                    <LoginForm />
                </Modal>
            }
        </>
    );
}

export default Login;