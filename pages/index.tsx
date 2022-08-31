import { FormEvent, useContext, useState, } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from "./home.module.css";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = {
      email,
      password
    };

    await signIn(data);
  }


  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </main>
  );

}