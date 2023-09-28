// components/Login.tsx
'use client';

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const result = await signIn("Credentials", {
      email,
      password,
      callbackUrl: "/account", // Redirect to your desired page after login
    });

    if (result?.error) {
      // Handle login error
      console.error(result?.error);
    }
  };

  return (
    <div>
      <h4 className="text-2xl mb-4">Login or Register</h4>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
