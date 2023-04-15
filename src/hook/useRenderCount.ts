import { useRef } from "react";

export const useRenderCount = () => {
    const renderCountRef = useRef(0);
    console.log("Render count:", renderCountRef.current);
    renderCountRef.current += 1;
};