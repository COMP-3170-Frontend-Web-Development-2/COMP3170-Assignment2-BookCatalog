import { useRef } from "react";

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
