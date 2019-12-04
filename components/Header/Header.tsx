import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import OutlineButton from '../Button/OutlineButton'
import MenuIcon from '@material-ui/icons/Menu'

import { mediaquery } from '../../style/style'

export default function Header({ siteTitle }) {
  const isDesktop = useMediaQuery(`(${mediaquery.smallToTablet})`)

  return (
    <header>
      <Link href='/'>
        <a>
          <h1>OpenTechSchool</h1>
        </a>
      </Link>
      {!isDesktop && <MenuIcon />}

      {isDesktop && (
        <nav role='navigation' aria-label='main navigation'>
          <Link href='/learn'>
            <a>Learn</a>
          </Link>

          <Link href='/contributes'>
            <a>Contribute</a>
          </Link>

          <Link href='/community'>
            <a>Community</a>
          </Link>

          <Link href='/about'>
            <a>About</a>
          </Link>

          <Link href='/donate'>
            <a>
              <OutlineButton>Donate</OutlineButton>
            </a>
          </Link>
        </nav>
      )}

      <style jsx>
        {`
          header {
            padding: 16px 20px;
            color: white;
            background: var(--otsColor);
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          nav a {
            padding-right: 50px;
            color: white;
          }
        `}
      </style>
    </header>
  )
}
