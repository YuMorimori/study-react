import Link from "next/link";
import classes from './Header.module.css'

export function Header() {
  return (
      <header className={classes.header}>
        <Link href="/">
          <a className={classes.anchor}>Index</a>
        </Link>
        {/* Linkは必要な部分だけを読み込むため速度が速い */}
        <Link href="/about">
          <a className={classes.anchor}>About</a>
        </Link>
      </header>
  )
}
