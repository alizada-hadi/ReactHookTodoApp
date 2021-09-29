import React, {useEffect} from 'react'


const ModalContainer = (props) => {
    const {modalContent, closeModal} = props
    useEffect(() => {
        setTimeout(() => {
            closeModal()
        }, 3000)
    })
    
    return <div className="" style={{ maxWidth:"210px", margin : "auto" }}>
        <p style={{ padding :"10px", backgroundColor:"gray", borderRadius:"10px" }} className="m-auto">{modalContent}</p>

    </div>
}

export default ModalContainer