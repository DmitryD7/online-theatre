import React from "react";

type OverlayPropsType = {
    isOpen: boolean,
    children: any,
    onClose: () => void,
};

export function Overlay(props: OverlayPropsType) {
    const {isOpen, children, onClose} = props;

    return (
        <React.Fragment>
            {isOpen && (
                <div className="overlay">
                    <div className="overlay__background" onClick={onClose} />
                    <div className="overlay__container">
                        <div className="overlay__controls">
                            <button
                                className="overlay__close"
                                type="button"
                                onClick={onClose}
                            />
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default Overlay;