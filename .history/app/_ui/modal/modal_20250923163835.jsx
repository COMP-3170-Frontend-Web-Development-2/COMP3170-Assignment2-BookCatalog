import { useRef } from "react";
import style from "./modal.module.css";

function Modal({ buttontitle, buttonstyle, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button
                className={styles.buttonstyle}
                onClick={handleClick}>
                {buttontitle}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
        </>
    );
}

export default Modal;
