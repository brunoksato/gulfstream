import * as React from 'react'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        Todos diretos reservados 2021 {config.author}
      </div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Tottle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div className={styles.social}>
        {config.wpp_avisos && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px'
            }}
          >
            <a
              className={styles.twitter}
              href={config.wpp_avisos}
              title={`Whatsapp Avisos`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
            <span>Avisos</span>
          </div>
        )}

        {config.wpp_geral && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px'
            }}
          >
            <a
              className={styles.twitter}
              href={config.wpp_geral}
              title={`Whatsapp Geral`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
            <span>Geral</span>
          </div>
        )}

        {config.wpp_instancias && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px'
            }}
          >
            <a
              className={styles.twitter}
              href={config.wpp_instancias}
              title={`Whatsapp Instancias`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsapp />
            </a>
            <span>Instancias</span>
          </div>
        )}

        {config.discord && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '80px'
            }}
          >
            <a
              className={styles.twitter}
              href={config.discord}
              title={`Discord`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaDiscord />
            </a>
            <span>Discord</span>
          </div>
        )}
      </div>
    </footer>
  )
}
