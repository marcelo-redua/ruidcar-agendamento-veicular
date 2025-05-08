import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome completo" className={styles.input} />
      <input type="email" placeholder="E-mail" className={styles.input} />
      <input type="password" placeholder="Senha" className={styles.input} />
      <select className={styles.input}>
        <option>Usuário</option>
        <option>Prestador</option>
      </select>
      <button onClick={() => router.push('/')} className={styles.button}>Cadastrar</button>
      <p className={styles.link} onClick={() => router.push('/')}>
        Já tem conta? Entrar
      </p>
    </div>
  )
}
