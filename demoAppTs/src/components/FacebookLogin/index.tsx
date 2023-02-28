import { FacebookLoginClient } from "@greatsumini/react-facebook-login";
import { useEffect } from "react";

const FacebookLogin = () => {
  const appId = "1088597931155576";
  useEffect(() => {
    FacebookLoginClient.init({ appId });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          FacebookLoginClient.login(console.log, {
            scope: "public_profile, email",
          });
        }}
      >
        login with facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
