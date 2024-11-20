import Grid from '@mui/material/Grid2';
import ImagePrompt from "./ImagePrompt/ImagePrompt";
import ImageDisplay from "./ImageDisplay/ImageDisplay";
import MyCreation from "./ImagePrompt/MyCreation";

function ImageGenerator() {
    return (
        <Grid container spacing={0} sx={{flexGrow: 1}}>
            <Grid size={{ xs: 12, md: 3 }}>
                <ImagePrompt></ImagePrompt>
            </Grid>
            <Grid display={{ xs: 'none', md: 'flex'}} size={{ xs: 0, md: 7 }}>
                <ImageDisplay></ImageDisplay>
            </Grid>
            <Grid display={{ xs: 'none', md: 'flex'}} size={{ xs: 0, md: 2 }}>
                <MyCreation></MyCreation>
            </Grid>
        </Grid>
    )
}

export default ImageGenerator;