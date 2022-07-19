import Image from "next/image"
import Link from "next/link"
import Container from "../layout/Container"

//Styles
import styles from "../../styles/ColumnCard.module.css"

export default function ColumnCard({image, title, description, cta, bgColor}) {
	return (
		<Container className={styles.container}>
			<Image src={image.img} alt={image.alt} objectFit="contain" />
			{/* <img src={image.img} alt={image.alt} objectFit="contain" /> */}
			<h2>{title}</h2>
			<p>{description}</p>
			<Link href={cta.href}><a className={styles.moreInfo} style={{"backgroundColor": bgColor}}>{cta.text}</a></Link>
		</Container>
	)
}