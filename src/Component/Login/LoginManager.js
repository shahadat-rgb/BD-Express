import firebase from "firebase"

export const handleSignOut = () => {
    return firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        return signedOutUser;
      })
      .catch((err) => {
        // An error happened.
      });
  };