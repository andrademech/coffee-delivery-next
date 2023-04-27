import Image from 'next/image'
import CoffeeLogo from '../../assets/coffee.svg'

import cx from 'classnames'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useQuantity } from '@/hooks/useQuantity'

import { useEffect } from 'react'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export function Navbar() {
  const quantity = useQuantity()

  useEffect(() => {
    localStorage.setItem('cartQuantity', `${quantity.quantity}`)
  }, [quantity.quantity])

  return (
    <nav className={cx('flex items-center justify-between h-24 max-w-[100rem] w-full mx-auto dark:bg-neutral-900 py-6 px-[15rem]')}>
      <Link href='/'>
        <Image src={CoffeeLogo} alt='' className={cx('bg-purple-200 w-[22] p-2 rounded cursor-pointer')} />
      </Link>

      <div className={cx('flex w-50 h-10 justify-center gap-3')}>
        <div className={cx('flex h-10 gap-2 px-3 items-center rounded bg-purple-300 text-purple-800')}>
          <MapPin size={24} weight='fill' />
          <span className={cx(`${roboto.className} text-sm font-semibold`)}>João Pessoa, PB</span>
        </div>
        <button className={cx('flex w-9 rounded justify-center items-center text-yellow-800 bg-yellow-400')} >
          <Link href='/checkout' >
            <ShoppingCart size={24} weight='fill' />
          </Link>
        </button>
        <span className={cx('flex items-center justify-center bg-yellow-600 font-bold text-sm px-1 w-5 h-5 rounded-full ml-[-20px] mt-[-10px]')}>
          {quantity.quantity}
        </span>
      </div>

    </nav>
  )
}
