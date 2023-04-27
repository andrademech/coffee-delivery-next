import cx from "classnames";

import { Baloo_2 } from "next/font/google";

import { Minus, Plus, Trash } from "phosphor-react";

import Image, { StaticImageData } from "next/image";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/CartContext";
import { useState } from "react";
import { priceFormatter } from "@/utils/formatter";

interface ICoffeeListProps {
  id: number
  coffeeName: string
  image: StaticImageData
  tag: string[]
  description: string
  price: number
}[]

const baloo = Baloo_2({ subsets: ["latin"] });

export function SelectedCoffee({
  id,
  coffeeName,
  description,
  image,
  tag,
  price
}: ICoffeeListProps) {
  const [quantity, setQuantity] = useState(0)

  const { cart, removeProductFromCart, addProductToCart } = useContextSelector(CartContext, ({ cart, removeProductFromCart, addProductToCart }) => ({
    cart,
    removeProductFromCart,
    addProductToCart
  }))

  function handleIncrement() {
    setQuantity((quantity) => (quantity + 1))
    addProductToCart({
      id,
      coffeeName,
      image,
      tag,
      description,
      price,
      quantity
    })
  }

  function handleDecrement() {
    if (quantity === 0) {
      return
    }
    setQuantity((quantity) => (quantity - 1))
    removeProductFromCart({
      id,
      coffeeName,
      image,
      tag,
      description,
      price,
      quantity
    })
  }

  return (
    <div className={cx('flex flex-col gap-3 w-[28rem]')}>
      <h3 className={cx(`${baloo.className} text-lg`)}>Cafés selecionados</h3>
      <div className={cx('flex flex-col p-10 rounded-tl rounded-bl-[36px] rounded-tr-[36px] rounded-br dark:bg-neutral-600')} >
        {
          cart?.map(({ id, coffeeName, image, price, quantity }) => {
            return (
              <div key={id} className='flex flex-col' >
                <div className={cx('flex w-full gap-5 py-2 pl-1 border-b pb-6 mb-6')}>
                  <Image src={image} alt='' width={64} height={64} />
                  <div className="flex flex-col gap-2" >
                    <h4 className="text-base font-normal" >{coffeeName}</h4>
                    <div className={cx('flex gap-2 text-xl rounded items-center')}>
                      <div className={cx('flex items-center rounded gap-2 dark:bg-neutral-700')}>
                        <button onClick={handleDecrement} className={cx('flex items-center justify-center hover:bg-yellow-700 py-2 px-1 w-8 rounded')} >
                          <Minus size={18} className={cx('text-yellow-950')} />
                        </button>
                        <span className={cx('text-base items-center')}>
                          {quantity}
                        </span>
                        <button onClick={handleIncrement} className={cx('flex items-center justify-center hover:bg-yellow-700 py-2 px-1 w-8 rounded')}>
                          <Plus size={18} className={cx('text-yellow-950')} />
                        </button>
                      </div>
                      <button className={cx('flex items-center justify-center rounded cursor-pointer gap-1 p-2 dark:bg-neutral-700')}>
                        <Trash size={18} weight="fill" className={cx('text-yellow-950')} />
                        <span className="text-xs font-normal" >REMOVER</span>
                      </button>
                    </div>
                  </div>
                  <strong>{priceFormatter.format(price)}</strong>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between">
                    <h4 className="text-sm" >Total de itens</h4>
                    <strong>{priceFormatter.format(price)}</strong>
                  </div>

                  <div className="flex justify-between">
                    <h4 className="text-sm" >Entrega</h4>
                    <strong>{priceFormatter.format(price/3)}</strong>
                  </div>

                  <div className="flex justify-between mb-6">
                    <h4 className="text-xl" >Total</h4>
                    <strong className="text-xl">{priceFormatter.format(price)}</strong>
                  </div>

                  <button className="bg-yellow-600 rounded p-3 cursor-pointer">
                    CONFIRMAR PEDIDO
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}