import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            />
        </Typography>
    );
};

const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی : امیرمحمد ساکی زاده </Info>
            <Info>سن : 27</Info>
            <Info>خوزستان اندیمشک </Info>
            <Info>amirsaki06@gmail.com: آدرس ایمیل</Info>
            <Info>شماره موبایل : 09330372703</Info>
        </>
    );
};

export default DevInfo;
