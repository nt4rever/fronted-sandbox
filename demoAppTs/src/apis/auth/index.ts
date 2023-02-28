import axiosServices from "../../services/axiosServices";

/* A constant object that contains the endpoints for the social login. */
const END_POINT = {
  GOOGLE_LOGIN: "/auth/google",
  FACEBOOK_LOGIN: "/auth/facebook",
};

export interface SocialLoginPayload {
  access_token: string;
}

/**
 * It takes a payload of type SocialLoginPayload and returns a promise of type
 * AxiosResponse&lt;any&gt;.
 * </code>
 * @param {SocialLoginPayload} payload - SocialLoginPayload
 * @returns A promise.
 */
export const googleLogin = (payload: SocialLoginPayload) => {
  return axiosServices.post(
    END_POINT.GOOGLE_LOGIN,
    {},
    {
      headers: { Authorization: `Bearer ${payload.access_token}` },
    }
  );
};

export const facebookLogin = (payload: SocialLoginPayload) => {
  return axiosServices.post(
    END_POINT.FACEBOOK_LOGIN,
    {},
    {
      headers: { Authorization: `Bearer ${payload.access_token}` },
    }
  );
};
