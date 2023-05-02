import Image, { StaticImageData } from 'next/image'

import cx from 'classnames'

import { priceFormatter } from '@/utils/formatter'

import { Minus, ShoppingCart, Plus } from 'phosphor-react'

import { Baloo_2 } from 'next/font/google'
import Link from 'next/link'
import { CartItem } from '@/contexts/CartContext'

const baloo = Baloo_2({ subsets: ['latin'] })

interface ICoffeeListProps extends CartItem {
  onAddToCart?: (product: CartItem) => void
  onRemoveFromCart?: (product: CartItem) => void
}

export function CoffeeCard({
  id,
  coffeeName,
  image,
  tag,
  description,
  price,
  quantity,
  onAddToCart,
  onRemoveFromCart,
}: ICoffeeListProps) {

  function handleAddProductToCart(product: ICoffeeListProps) {
    if(!onAddToCart) return console.log('onAddToCart is not defined')
    onAddToCart(product)
  }

  function handleRemoveProductFromCart(product: ICoffeeListProps) {
    if(!onRemoveFromCart) return console.log('onRemoveFromCart is not defined')
    onRemoveFromCart(product)
  }

  return (
    <div className={cx('grid grid-cols-4')}>
      <div className={cx(
        'flex w-[16rem] flex-col items-center rounded-tl rounded-bl-[36px] rounded-tr-[36px] rounded-br h-[19.375rem] dark:bg-neutral-700 shadow-2xl'
      )}>
        <Image src={image} alt={coffeeName} width={120} className={cx(' mt-[-20px] ')} />

        <div className={cx('flex pt-3 flex-row justify-center items-center w-full')}>
          {tag.map((tag) => (
            <span
              key={tag}
              className={cx('text-xs font-bold text-center rounded-full px-2 py-1 mx-1 bg-yellow-500 text-yellow-950')}>
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <h2 className={cx(`${baloo.className} text-xl font-bold text-center pt-4`)}>{coffeeName}</h2>

        <p className={cx('text-xs w-3/4 text-center pt-2')}>{description}</p>

        <div className={cx('flex items-center text-xl font-bold gap-3 pt-[2.0625rem]')}>
          <strong>{priceFormatter.format(price)}</strong>

          <div className={cx('flex items-center gap-2 justify-center')}>
            <div className={cx('flex gap-3 text-xl bg-neutral-600 rounded items-center justify-center')}>
              <button onClick={() => handleRemoveProductFromCart({
                id,
                coffeeName,
                image,
                tag,
                description,
                price,
                quantity,
              })} className={cx('flex items-center justify-center hover:bg-yellow-700 py-2 px-1 w-8 rounded')} >
                <Minus size={18} weight='fill' className={cx('text-yellow-950')} />
              </button>
              <span className={cx('text-base')}>
                {quantity}
              </span>
              <button onClick={() => handleAddProductToCart({
                id,
                coffeeName,
                image,
                tag,
                description,
                price,
                quantity,
              })} className={cx('flex items-center justify-center hover:bg-yellow-700 py-2 px-1 w-8 rounded')}>
                <Plus size={18} weight='fill' className={cx('text-yellow-950')} />
              </button>
            </div>
            <button className={cx(' bg-yellow-500 hover:bg-yellow-400 text-yellow-950 rounded p-2')}>
              <Link href='/checkout' >
                <ShoppingCart size={18} weight='fill' />
              </Link>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}