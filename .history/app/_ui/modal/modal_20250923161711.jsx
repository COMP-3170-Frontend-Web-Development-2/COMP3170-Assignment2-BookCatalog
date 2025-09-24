import { useRef } from "react";
import style from "./modal.mnodule.css";

function Modal({ buttontitle, buttonstyle, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button
                className={style.buttonstyle}
                onClick={handleClick}>
                {buttontitle}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
        </>
    );
}

export default Modal;
