import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="Logo" className={styles.logo} />
      <h2>Login</h2>
      <input type="email" placeholder="E-mail" className={styles.input} />
      <input type="password" placeholder="Senha" className={styles.input} />
      <select className={styles.input}>
        <option>Usuário</option>
        <option>Prestador</option>
        <option>Administrador</option>
      </select>
      <button onClick={() => router.push('/dashboard')} className={styles.button}>Entrar</button>
      <p className={styles.link} onClick={() => router.push('/register')}>
        Não tem conta? Cadastre-se
      </p>
    </div>
  )
}
