import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebase/functions/src";

export default function AuthStatus() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup: onAuthStateChanged dinleyicisini kaldırmak için unsubscribe fonksiyonunu çağırıyoruz
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut(); // Firebase ile oturum kapatma
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user signed in</p>
      )}
    </div>
  );
}
