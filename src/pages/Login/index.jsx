import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../stores/User";

const Login = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    setUser((prev) => ({
      ...prev,
      name: `${response.profileObj.givenName} ${response.profileObj.familyName}`,
    }));
    setUser((prev) => ({ ...prev, img: response.profileObj.imageUrl }));
    setUser((prev) => ({ ...prev, loginStatus: true }));

    navigate("/products");
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-heading">Log In</div>
      <div className="google-btn">
        {!user.loginStatus && (
          <GoogleLogin
            clientId="508677481108-v32dtbl04biu6k2ssdcjnb1gbpv48odb.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )}
      </div>
    </div>
  );
};

export default Login;
