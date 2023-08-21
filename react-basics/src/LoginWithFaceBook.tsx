import { useState } from "react";
import FacebookLogin from "react-facebook-login";


export const LoginWithFaceBook = () => {
    const appID = 802564877947042;

    const [userData, setUserData] = useState({})

    const responseFacebook = (response: { name: any; email: any; picture: { data: { url: any; }; }; }) => {
      setUserData({
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
      });
    }

    return(
        <>
        <FacebookLogin
                appId={appID}
                autoLoad={false}
                fields="name, email, picture"
                callback={responseFacebook}
            />
        </>
    )
}