import { useState, useEffect } from "react"

export default function LoadingState(){
    const [show, setShow] = useState(false)
    useEffect(() => {
        let timeout = setTimeout(() => setShow(true), 500)
        return () => {
          clearTimeout(timeout)
        }
      }, [])
    return (
        <div>
            Loading...
        </div>
    ) 
}