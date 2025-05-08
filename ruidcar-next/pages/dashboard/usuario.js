import { useRouter } from 'next/router'
import styles from '../../styles/Dashboard.module.css'

export default function UsuarioDashboard() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bem-vindo, Usuário!</h1>
        <button className={styles.logout} onClick={() => router.push('/')}>Sair</button>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Próximos Agendamentos</h2>
          <div className={styles.card}>Você ainda não possui agendamentos.</div>
          <button className={styles.button} onClick={() => alert('Redirecionar para novo agendamento')}>Novo Agendamento</button>
        </section>

        <section className={styles.section}>
          <h2>Histórico</h2>
          <div className={styles.card}>Nenhum serviço finalizado ainda.</div>
        </section>
      </main>
    </div>
  )
