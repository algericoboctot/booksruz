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
                    <button className="ml-auto mb-2 font-semibold" type="button" onClick={hideModalHandler}>
                        X
                    </button>
                    <div className="bg-[#45108A] text-white p-4 mb-6">
                        <h3 className="text-2xl mb-6 font-bold">Get lost in a great book and explore a new world!</h3>
                        <p>Looking for an escape from reality? Our books offer a gateway to new and exciting worlds filled with adventure, mystery, and wonder</p>
                    </div>
                    <LoginForm />
                </Modal>
            }
        </>
    );
}

export default Login;