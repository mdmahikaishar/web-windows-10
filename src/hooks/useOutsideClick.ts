import { useEffect, useState } from "react";

/**
 * useOutsideClick
 * ----------------
 * when click occured outside of a group of element
 * @param ref all ref of elements that's clickable
 * @param state current state of parent
 * @param callback outside clicked function
 */
export default function useOutsideClick(ref: Array<any>, state: boolean, callback: () => void): void {  
    const [show, setShow] = useState(state);
    
    const handler = (e: any) => {
        if (!show) return;

        const target = e.target;

        const clicked = ref.some(
            (item) => item && item.current && item.current.contains(target)
        );

        if (!clicked) return callback();
    };

    useEffect(() => setShow(state), [state]);

    useEffect(() => {
        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, [show]);
}
