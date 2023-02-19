
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Soumik Mondal</Typography>
                <Text variant="h5">Soumik Mondal Profile
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://ghttps://github.com/SoumikMondal01ithub.com" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Aspiring Software devoloper. I interseted in coding and solving DSA problem. Currently learning full stack Web development. I mostly love backend. You can contact me on instagram 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instahttps://instagram.com/soumik_mondal_01?igshid=ZDdkNTZiNTM=gram.com" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>
                    or send me an Email
                    <Link href="mailto:soumikmondal663@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;