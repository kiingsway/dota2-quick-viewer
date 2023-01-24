import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ToastOptions, toast } from 'react-toastify'
import Dota from '../src/pages/Dota'
import Login from '../src/pages/Login'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [player, setPlayer] = useState<IPlayer>();

  const handleAlerts: THandleAlerts = (msg: any, type: 'default' | 'info' | 'success' | 'warning' | 'error' = 'default', timeMs: number = 10000) => {

    console.error(msg);

    let message = String(msg);
    if (msg?.response?.data?.error) message = `(${msg.response.data.error.code}) ${msg.response.data.error.message}`;
    else if (msg?.response?.data?.message) message = `(${msg.response.data.status}) ${msg.response.data.message}`;

    const toastBody: ToastOptions = {
      position: "top-center",
      autoClose: timeMs,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }

    if (type === 'info') toast.info(message, toastBody);
    if (type === 'success') toast.success(message, toastBody);
    if (type === 'warning') toast.warning(message, toastBody);
    if (type === 'error') toast.error(message, toastBody);
    if (type === 'default') toast(message, toastBody);
  }

  useEffect(() =>
    console.log(player),
    [player])

  return (
    <div>
      <Head>
        <title>Dota 2 Quick Viewer</title>
        <meta name="description" content="Viewer for Dota 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {player ? <Dota player={player} /> : <Login handleAlerts={handleAlerts} setPlayer={setPlayer} />}
      </main>

    </div>
  )
}
