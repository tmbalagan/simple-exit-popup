
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';


function ExitPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModalDisplayed, setModalDisplay] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        document.body.addEventListener("mouseout", handleBodyMouseout)
        document.addEventListener("scroll", handleBodyScroll)

        const timeoutID = setTimeout(() => {
            setIsOpen(true)
        }, 5000);

        return () => {
            document.body.removeEventListener("mouseout", handleBodyMouseout)
            document.removeEventListener("scroll", handleBodyScroll)
            clearTimeout(timeoutID);

        }
    }, [])

    useEffect(() => {
        fetch('http://localhost:3002')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [])

    const handleBodyMouseout = (event) => {
        if ((event.toElement == null && event.relatedTarget == null) || (event.relatedTarget.tagName && event.relatedTarget.tagName == "HTML")) {
            setIsOpen(true)
        }
    }

    const handleBodyScroll = (e) => {
        const scrollTop = window.pageYOffset

        if (scrollTop > 300) {
            setIsOpen(true)
        }
    }

    function closeModal() {
        setIsOpen(false);

        // To avoid showing modal for all events, one event will be selected and shown. The other events will be hidden using a modal
        // setModalDisplay(true)
    }

    function clearModalFlag() {
        // to cross check other events settimeout, scroll..
        setModalDisplay(false)
    }

    return (
        <div>
            {/* <button onClick={clearModalFlag}>Click to remove modal flag</button> */}

            <Modal isOpen={isOpen && !isModalDisplayed} onRequestClose={closeModal}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(255, 255, 255, 0.75)'
                    },
                    content: {
                        padding: '20px',
                        width: '500px',
                        height:'210px',
                        left: 0,
                        right: 0,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }
                }}
                ariaHideApp={false}
                shouldCloseOnEsc={true}>
                {data &&
                    <>
                        <h1>{data.title}</h1>
                        <h2>Up to {data.offer} off!</h2>
                        <p>{data.decription}</p>
                    </>
                }
                <div className="exit-popup-btn-wrap">
                    <button onClick={closeModal} className="exit-popup-btn">Cancel</button>
                </div>
            </Modal>
        </div>
    )
}


export default ExitPopup