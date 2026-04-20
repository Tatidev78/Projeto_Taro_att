import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(userData) {
    setUser({
      ...userData,
      appointments: userData.appointments || []
    });
  }

  function logout() {
    setUser(null);
  }

  function addAppointment(newAppointment) {
    setUser((prev) => ({
      ...prev,
      appointments: [...(prev.appointments || []), newAppointment]
    }));
  }

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      addAppointment
    }}>
      {children}
    </AuthContext.Provider>
  );
}