import Link from 'next/link'
import Image from 'next/image'
import  styles from '../../styles/nav.module.css'

const Nav = () => {
  return (
    <div>
        {/* <Image 
        src={''}
        alt='logo'
        width={100}
        height={50}
        /> */}

        <div className={styles.navbar}>
            <Link href={'/billetterie'}>
                    billetterie
            </Link>
            <Link href={'/HotelEnTunisie'}>
                Hotel en Tunisie
            </Link>
            <Link href={'/Voyages'}>
                    Voyages
            </Link>
            <Link href={'/ventesFlash'}>
                    Ventes flash
            </Link>
            <Link href={'/Promos'}>
                    Promos
            </Link>
            <Link href={'/Omra'}>
                    Omra
            </Link>
            <Link href={'/Avis'}>
                    Avis
            </Link>
        </div>
    </div>
  )
}

export default Nav