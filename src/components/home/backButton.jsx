import { useRouter } from 'next/router';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {
    const router = useRouter();

    return (
        <IconButton sx={{ color: 'purple' }} onClick={() => router.back()}>
            <ArrowBackIosIcon />
        </IconButton>
    );
}

export default BackButton;