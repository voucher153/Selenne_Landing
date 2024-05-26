import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useOutClick = (initialValue: boolean) => {
    const [active, setActive] = useState(initialValue)
    const ref = useRef<HTMLElement>(null)

    const handleClick = (e: MouseEvent) => {
        const target = e.target as Node
        if (ref.current && !ref.current.contains(target)) {
            setActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', (e) => handleClick(e))
        return () => {
            document.removeEventListener('click', (e) => handleClick(e))
        }
    }, [])
    
    return {ref, active, setActive}
}