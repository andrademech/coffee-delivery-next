import cx from 'classnames'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import { useState } from 'react'

export function NewCheckoutForm() {
  const [selected, setSelected] = useState<string>('credit-card')

  function handleSelected(method: string) {
    setSelected(method)
  }

  const buttonClass = (method: string) =>
    cx(
      'flex',
      'w-[11.25rem]',
      'items-center',
      'gap-3',
      'p-4',
      'rounded',
      'dark:bg-neutral-500',
      {
        'bg-bg-yellow-700 dark:bg-yellow-700': selected === method,
      }
    );

  return (
    <>
      <div className={cx('flex flex-col p-10 dark:bg-neutral-600 rounded')}>
        <div className={cx('flex w-full justify-center gap-2 items-start')}>
          <MapPinLine size={22} className={cx('dark:text-yellow-950 dark:bg-yellow-500 rounded')} />
          <div className={cx('flex flex-col w-full items-center')}>
            <h2 className={cx('text-left text-base w-full')}>Endereço de Entrega</h2>
            <span className={cx('text-left font-light text-sm w-full')}>Insira o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <div className={cx('flex flex-col gap-4 mt-8')}>
          <input className={cx('w-52 h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='CEP' />
          <input className={cx('h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='Rua' />
          <div className={cx('flex gap-4')}>
            <input className={cx('w-52 h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='Número' />
            <input className={cx('w-[21.75rem] h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='Complemento' />
          </div>
          <div className={cx('flex gap-4')}>
            <input className={cx('w-52 h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='Bairro' />
            <input className={cx('w-[17.25rem] h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='Cidade' />
            <input className={cx('w-[3.75rem] h-11 rounded pl-3 focus:outline-none text-white dark:bg-neutral-700 caret-slate-500')} type="text" placeholder='UF' />
          </div>
        </div>
      </div>
      <div className={cx('flex flex-col p-10 dark:bg-neutral-600 rounded')}>
        <div className={cx('flex w-full justify-center gap-2 items-start')}>
          <CurrencyDollar size={22} className={cx('dark:text-yellow-950 dark:bg-yellow-500 rounded')} />
          <div className={cx('flex flex-col w-full items-center')}>
            <h2 className={cx('text-left text-base w-full')}>Pagamento</h2>
            <span className={cx('text-left font-light text-sm w-full')}>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
          </div>
        </div>
        <div className={cx('flex', 'w-full', 'gap-3', 'mt-8')}>
          <button
            type="button"
            className={buttonClass('credit-card')}
            onClick={() => handleSelected('credit-card')}
          >
            <CreditCard size={22} />
            <span className={cx('text-left', 'font-light', 'text-xs', 'w-full')}>
              CARTÃO DE CRÉDITO
            </span>
          </button>

          <button
            type="submit"
            className={buttonClass('debit-card')}
            onClick={() => handleSelected('debit-card')}
          >
            <Bank size={22} />
            <span className={cx('text-left', 'font-light', 'text-xs', 'w-full')}>
              CARTÃO DE DÉBITO
            </span>
          </button>

          <button
            type="submit"
            className={buttonClass('money')}
            onClick={() => handleSelected('money')}
          >
            <Money size={22} />
            <span className={cx('text-left', 'font-light', 'text-xs', 'w-full')}>
              DINHEIRO
            </span>
          </button>
        </div>
      </div>
    </>
  )
}