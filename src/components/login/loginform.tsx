// components/Login.tsx
'use client';

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [loading, isLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    if ( email === "") {
      setEmailError(true);
    }

    if ( password === "") {
      setPasswordError(true);
    }

    if (result?.error) {
      setFormError(true);
    }
  };

  return (
    <div>
      <h4 className="text-2xl mb-4">Login</h4>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          {formError && <p className="mb-2 text-[#ff0000]">email and password is empty!</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            className={(emailError || formError) ? 'border-2 border-[#ff0000]' : 'border-2 border-[#260448]'}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            className={(passwordError || formError) ? 'border-2 border-[#ff0000]' : 'border-2 border-[#260448]'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
