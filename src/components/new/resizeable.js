import {useEffect, useRef} from "react";
import {Box} from "@mui/material";

const Resizeable = ({children}) => {

    const ref = useRef(null);
    const refTop = useRef(null);

    useEffect(() => {
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizeableEle);
        let height = parseInt(styles.height, 10);
        let y = 0;

        resizeableEle.style.top = "0px";
        resizeableEle.style.left = "0px";

        // Top resize
        const onMouseMoveTopResize = (event) => {
            const dy = event.clientY - y;
            height = height - dy;
            y = event.clientY;
            resizeableEle.style.height = `${height}px`;
        };

        const onMouseUpTopResize = (event) => {
            document.removeEventListener("mousemove", onMouseMoveTopResize);
        };

        const onMouseDownTopResize = (event) => {
            y = event.clientY;
            const styles = window.getComputedStyle(resizeableEle);
            resizeableEle.style.bottom = styles.bottom;
            resizeableEle.style.top = null;
            document.addEventListener("mousemove", onMouseMoveTopResize);
            document.addEventListener("mouseup", onMouseUpTopResize);
        };


        // Add mouse down event listener
        const resizerTop = refTop.current;
        resizerTop.addEventListener("mousedown", onMouseDownTopResize);

        return () => {
            resizerTop.removeEventListener("mousedown", onMouseDownTopResize);
        };
    }, []);

    return(
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                height: '100%'
        }}
        >
            <Box
                ref={ref}
                sx={{
                    position: 'absolute',
                    backgroundColor: 'light_grey',
                    borderTopLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    width: '100%',
                    height: '100%',
                    minHeight: '170px',
                    padding: '15px'
                }}
            >
                <Box
                    ref={refTop}
                    sx={{
                        position: 'absolute',
                        background: 'grey',
                        cursor: 'row-resize',
                        height:'5px',
                        left: '50%',
                        top: '5px',
                        transform: 'translateX(-50%)',
                        width: '10%',
                        borderRadius: '10px'
                    }}
                />

                {children}
            </Box>
        </Box>
    )
}

export default Resizeable