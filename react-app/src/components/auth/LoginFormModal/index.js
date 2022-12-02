import React, { useState } from 'react';
import { Modal } from "../../../context/Modal";
import LoginForm from './LoginForm';
// import './loginForm.css';

function LoginFormModal() {
const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button onClick={() => setShowModal(true)} className="signed-out-login-button">Login</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <LoginForm showModal={showModal} setShowModal={setShowModal}/>
        </Modal>
        )}
    </>
        );
}

export default LoginFormModal;
