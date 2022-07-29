import { useEffect, useRef } from 'react'

interface Props {
    bodyRef: ReturnType<typeof useRef>
    portalRootRef: ReturnType<typeof useRef>
    isOpen: boolean
    portalId: string
}

const usePortal = ({ bodyRef, portalRootRef, isOpen, portalId }: Props) => {
    function createPortalRoot() {
        const drawerRoot = document.createElement('div')
        drawerRoot.setAttribute('id', portalId)

        return drawerRoot
    }

    // Append portal root on mount
    useEffect(() => {
        bodyRef.current = document.querySelector('body')
        portalRootRef.current =
            document.getElementById(portalId) || createPortalRoot()
        bodyRef?.current?.appendChild(portalRootRef.current)
        const portal = portalRootRef.current
        const bodyEl = bodyRef.current

        return () => {
            // Clean up the portal when drawer component unmounts
            portal.remove()
            // Ensure scroll overflow is removed
            bodyEl!.style.overflow = ''
        }
    }, [])

    // Prevent page scrolling when the drawer is open
    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                bodyRef!.current!.style.overflow = 'hidden'
            } else {
                bodyRef!.current!.style.overflow = ''
            }
        }

        updatePageScroll()
    }, [isOpen])
}

export default usePortal
