import Image from 'next/image'
import cx from 'classnames'
import { Baloo_2, Roboto } from 'next/font/google'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import CoffeeIntro from '../../assets/coffee-intro.svg'

const baloo = Baloo_2({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export function Intro() {
  return (
    <section className={cx('flex items-center justify-around h-[34rem] max-w-[100rem] mx-auto dark:bg-neutral-900 py-28 px-[15rem]')}>
      {/* Left side */}
      <div className={cx('flex items-center gap-14')}>
        <div className={cx('flex w-[36.75rem] flex-col items-center justify-center gap-4')}>
          <h1 className={cx(`${baloo.className} text-5xl font-bold text-left`)}>
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className={cx('text-xl text-left w-full', roboto.className)}>
            Com o CoffeeDelivery você recebe o seu café onde estiver, a qualquer hora
          </p>

          <div className={cx(`${roboto.className} grid grid-cols-2 gap-y-5 mt-16`)}>
            <div className={cx('flex w-[14.4375rem] items-center gap-3')}>
              <div className={cx('flex items-center justify-center bg-yellow-800 w-8 h-8 rounded-full')}>
                <ShoppingCart size={16} weight='fill' />
              </div>
              <span>Compra simples e segura</span>
            </div>

            <div className={cx('flex w-[18.375rem] items-center gap-3')}>
              <div className={cx('flex items-center justify-center bg-gray-700 w-8 h-8 rounded-full')}>
                <Package size={16} weight='fill' />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div className={cx('flex w-[14.4375rem] items-center gap-3')}>
              <div className={cx('flex items-center justify-center bg-yellow-500 w-8 h-8 rounded-full')}>
                <Timer size={16} weight='fill' />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div className={cx('flex w-[18.375rem] items-center gap-3')}>
              <div className={cx('flex items-center justify-center bg-purple-900 w-8 h-8 rounded-full')}>
                <Coffee size={16} weight='fill' />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div>
          <Image src={CoffeeIntro} alt='' width={476} />
        </div>

      </div>
    </section>
  )
}