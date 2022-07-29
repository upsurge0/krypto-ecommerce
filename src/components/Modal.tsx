import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import usePortal from '../utils/usePortal'
import classes from '../styles/Modal.module.css'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const bodyRef = useRef<null | HTMLElement>(null)
    let portalRootRef = useRef<null | HTMLElement>(null)
    const [domReady, setDomReady] = useState(false)

    usePortal({ bodyRef, portalRootRef, isOpen, portalId: 'modal-root' })

    useEffect(() => {
      setDomReady(true)
    }, [])

    const handleClose = (e:SyntheticEvent) => {
        e.stopPropagation()
        onClose()
    }
    

    if(!portalRootRef || !bodyRef || !domReady) return null

    return ReactDOM.createPortal(
        <div
            aria-hidden={isOpen ? 'false' : 'true'}
            className={`${classes.modal} ${isOpen ? classes.enterDone : ''}`}
            onClick={handleClose}
        >
            <div
                className={classes.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.modalBody}>{children}</div>
            </div>
        </div>,
        portalRootRef.current!
    )
}

export default Modal
