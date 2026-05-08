import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Login submitted:", {
      email,
      password,
    });
  }

  return (
      <main className="login-page">
        <section className="login-card">
          <h1>Welcome back</h1>
          <p className="subtitle">Sign in to continue</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />

            <button type="submit">Sign in</button>
          </form>

          <p className="signup-text">
            Don&apos;t have an account? <a href="#">Create one</a>
          </p>
        </section>
      </main>
  );
}

export default App;