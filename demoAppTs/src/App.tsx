import FacebookLogin from "@greatsumini/react-facebook-login";
import { useGoogleLogin } from "@react-oauth/google";
import { facebookLogin, googleLogin } from "./apis/auth";
import ThemeProvider from "./contexts/ThemeContext";
import AppLayout from "./layouts/AppLayout";

function App() {
  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      try {
        const token = credentialResponse.access_token;
        googleLogin({ access_token: token }).then((res) => {
          console.log(res);
        });
      } catch (err) {}
    },
  });
  return (
    <ThemeProvider>
      <AppLayout>
        <div className="flex gap-2">
          <FacebookLogin
            appId={import.meta.env.VITE_FB_APP_ID}
            onSuccess={(response) => {
              facebookLogin({ access_token: response.accessToken }).then(
                (res) => {
                  console.log(res);
                }
              );
            }}
            onFail={(error) => {
              console.log("Login Failed!", error);
            }}
            onProfileSuccess={(response) => {
              console.log("Get Profile Success!", response);
            }}
            className="py-1 px-2 bg-cyan-500 text-white rounded-md hover:opacity-75 hover:scale-105"
          >
            facebook
          </FacebookLogin>
          <button
            className="py-1 px-2 bg-orange-400 text-white rounded-md hover:opacity-75"
            onClick={() => {
              login();
            }}
          >
            google
          </button>
        </div>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
