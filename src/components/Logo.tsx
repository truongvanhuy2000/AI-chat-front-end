import Typography from "@mui/material/Typography";

function Logo({size}) {
    return (
        <Typography sx={{
            fontSize: size,
            color: "#66fcf1",
            fontFamily: "Noto Sans",
            fontWeight: 800,
        }}>
            BLOOMIE
        </Typography>
    )
}

export default Logo;