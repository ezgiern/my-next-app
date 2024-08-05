import { getAuth } from "firebase/auth";

const fetchFacebookData = async (): Promise<void> => {
  const user = getAuth().currentUser;
  if (user) {
    const token = await user.getIdToken();
    const response = await fetch(
      `https://graph.facebook.com/me?fields=id,name,email&access_token=${token}`
    );
    const data = await response.json();
    console.log("Facebook Data:", data);
  } else {
    console.error("User is not authenticated");
  }
};
