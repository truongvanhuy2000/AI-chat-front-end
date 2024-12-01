import {CircularProgress} from "@mui/material";

function LoadingContainer({children, loading}) {
    const loadingStyle = {
        position: "absolute",
    }
    return (
        <div style={{position: "relative", height: "100%", width: "100%"}} >
            {loading &&
                <CircularProgress size={"30px"} sx={{
                    margin: 0,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) !important',
                }}/>
            }
            <div style={{
                filter: loading? "brightness(50%)": "brightness(100%)",
                opacity: loading ? "20%" : "100%",
            }}>
                {children}
            </div>
        </div>
    )
}

export default LoadingContainer;