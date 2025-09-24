import { useRef } from "react";

function Modal({ buttontitle, btnClassName, children }) {
    const modalRef = useRef();

    function handleClick() {
        modalRef.current.showModal();
    }

    return (
        <>
            <button
                className={btnClassName}
                onClick={handleClick}>
                {buttontitle}
            </button>
            <dialog ref={modalRef}>{children}</dialog>
        </>
    );
}

export default Modal;
