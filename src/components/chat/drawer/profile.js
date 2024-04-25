import { Box, Typography, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useAuthContext } from '../../../AccountContext/accountContext'

const ImageContainer = styled(Box)`
    display:flex;
    justify-content:center;
 `;
const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
})
const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`;

const DescriptionContainer = styled(Box)`
padding:15px 20px 28px 30px;
& > p {
    font-size:13px;
    color:#8696a0;
}
`;



const ProfileEdit = () => {
    const { updatedAuthUser, authUser } = useAuthContext();

    useEffect(() => {
        console.log('authUser:', authUser);
        console.log('updatedAuthUser:', updatedAuthUser);
    }, [authUser, updatedAuthUser]);

    // Check if updatedAuthUser exists and has the image property
    const userImage = updatedAuthUser && updatedAuthUser.image ? updatedAuthUser.image : (authUser ? authUser.image : null);

    // console.log('userImage:', userImage);

    // Check if updatedAuthUser and authUser are not null before accessing their properties
    const username = updatedAuthUser && updatedAuthUser.username ? updatedAuthUser.username : (authUser ? authUser.username : '');
    const about = updatedAuthUser && updatedAuthUser.about ? updatedAuthUser.about : (authUser ? authUser.about : '');

    return (
        <>
            <ImageContainer >
                <Image src={userImage} alt='dp' style={{ cursor: 'pointer' }} />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{username}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
                <Typography>
                    This is not your username or pin. This name will be visible to your WhatsApp contacts.
                </Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>{about}</Typography>
            </BoxWrapper>
        </>
    )
}

export default ProfileEdit