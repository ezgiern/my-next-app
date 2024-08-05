// socialmedia/LinkFacebook.ts
import {
  linkWithPopup,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, facebookProvider } from "../firebase/functions/src/index";

export const linkFacebookAccount = async (): Promise<{
  name: string;
  profilePicture: string;
} | null> => {
  try {
    const result = await linkWithPopup(auth.currentUser!, facebookProvider);
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;

    if (token) {
      // Facebook Graph API ile kullanıcı adını ve profil resmini alın
      const response = await fetch(
        `https://graph.facebook.com/me?fields=name,picture&access_token=${token}`
      );
      const data = await response.json();
      return { name: data.name, profilePicture: data.picture.data.url };
    }

    return null;
  } catch (error) {
    console.error("Error linking Facebook account:", error);
    return null;
  }
};
