import Link from "next/link"
import styles from "../styles/BookButton.module.css"

export default function BookButton ({text}) {
  let content = text ?? 'Book a Demo';
  return (
    <Link href="/demo"><a className={styles.demo}>{content}</a></Link>
  )
}