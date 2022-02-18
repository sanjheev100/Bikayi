import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header>
      <Navbar
        className={styles.Header}
        varaint='dark'
        expand='lg'
        style={{ minHeight: 70 }}
        collapseOnSelect
      >
        <Container>
          <div>
            <nav
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
            >
              <ul className='nav '>
                <h2 style={{ color: 'white' }}>
                  Bikayi Assignment (Nobel Prize Winners){' '}
                  <i className='fa-solid fa-dumbbell'></i>
                </h2>
              </ul>
            </nav>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
