import { useState, useEffect, useRef, type Ref } from "react";
import "./ModalAlertStyle.css"

export interface ModalProps {
    message: string;
    openModalRef?: React.RefObject<HTMLButtonElement | null>;
}

const ModalAlert: React.FC<ModalProps> = ({ message, openModalRef }) => {
    console.log("ModalAlert rendu !");
    const modalRef = useRef<HTMLDialogElement>(null);
    useEffect(() => {
        console.log(openModalRef);
        if (openModalRef) console.log("NO MODAL");
        if (!openModalRef) console.log("NO MODAL");

        const handleClick = () => {
            console.log("HELLO");
            modalRef.current?.showModal();
        };

        if (openModalRef?.current) {
            openModalRef.current.addEventListener("click", handleClick);
        }

        return () => {
            if (openModalRef?.current) {
                openModalRef.current.removeEventListener("click", handleClick);
            }
        };
    }, [openModalRef]);
    const closeModal = () => {
        if (modalRef.current) modalRef.current.close();
    };

    // You can replace svg by the closing icon you prefer but placing it would require fiddling depending on sizes
    // Or ideally for accessibility, use a dedicated button.
    return (
        <dialog className="bg-gray-800 border border-gray-300 p-4 rounded-2xl text-3xl text-white" ref={modalRef}>
            {message}
            <svg onClick={closeModal} className="-translate-x-3 -translate-y-1" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#000000" fill="#FFFFFF" strokeWidth="1.5" />
                <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </dialog>
    )
}

export default ModalAlert