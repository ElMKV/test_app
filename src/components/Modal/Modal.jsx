import useStyle from "./modalStyles";
import { useState } from "react";

const Modal = ({ isActive, onClose, children }) => {
    const classes = useStyle();

    return (
        <div className={`${classes.modal}${isActive ? ' active' : ''}`}
            onClick={onClose}
        >
            <div className={classes.modalForm} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal
