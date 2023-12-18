import styles from './page.module.scss'

export default function Home() {
	return (
		<main className={styles.main}>
			<aside className={styles.aside}>
				<ul className={styles.list}>
					<li className={styles['list-item']}>
						<a href="/" className={styles.link}>
							<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M2.625 7.02632C2.625 4.42119 2.625 3.11862 3.39384 2.30931C4.16269 1.5 5.40013 1.5 7.875 1.5H10.125C12.5999 1.5 13.8373 1.5 14.6062 2.30931C15.375 3.11862 15.375 4.42119 15.375 7.02632V10.9737C15.375 13.5788 15.375 14.8814 14.6062 15.6907C13.8373 16.5 12.5999 16.5 10.125 16.5H7.875C5.40013 16.5 4.16269 16.5 3.39384 15.6907C2.625 14.8814 2.625 13.5788 2.625 10.9737V7.02632Z" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M10.125 8.25H12.75" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round"/>
								<path d="M5.25 9C5.25 9 5.625 9 6 9.75C6 9.75 7.19118 7.875 8.25 7.5" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M10.125 12.75H12.75" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round"/>
								<path d="M6 1.5L6.06165 1.8699C6.2113 2.76783 6.28613 3.21679 6.60085 3.4834C6.91556 3.75 7.37072 3.75 8.28104 3.75H9.71896C10.6293 3.75 11.0844 3.75 11.3992 3.4834C11.7139 3.21679 11.7887 2.76783 11.9384 1.8699L12 1.5" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6 12.75H6.75" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span className={styles.text}>Lists</span>
						</a>
					</li>
					<li className={styles['list-item']}>
					<a href="/" className={styles.link}>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 1.875V2.80002C10.5 3.92013 10.5 4.48018 10.718 4.908C10.9097 5.28433 11.2157 5.59029 11.592 5.78204C12.0198 6.00002 12.5799 6.00002 13.7 6.00002H14.625M15 7.90165V11.7C15 13.3802 15 14.2202 14.673 14.862C14.3854 15.4265 13.9265 15.8854 13.362 16.173C12.7202 16.5 11.8802 16.5 10.2 16.5H7.8C6.11984 16.5 5.27976 16.5 4.63803 16.173C4.07354 15.8854 3.6146 15.4265 3.32698 14.862C3 14.2202 3 13.3802 3 11.7V6.3C3 4.61984 3 3.77976 3.32698 3.13803C3.6146 2.57354 4.07354 2.1146 4.63803 1.82698C5.27976 1.5 6.11984 1.5 7.8 1.5H8.59835C9.16907 1.5 9.45442 1.5 9.72825 1.53027C10.6709 1.63446 11.5644 2.00458 12.3046 2.59744C12.5197 2.76966 12.7214 2.97144 13.125 3.375V3.375C13.5286 3.77856 13.7303 3.98034 13.9026 4.19536C14.4954 4.93557 14.8655 5.82913 14.9697 6.77175C15 7.04558 15 7.33093 15 7.90165Z" stroke="currentcolor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
						<span className={styles.text}>Lists</span>
					</a>
					</li>
				</ul>
			</aside>
			<div className={styles.content}>asd</div>
		</main>
	)
}
