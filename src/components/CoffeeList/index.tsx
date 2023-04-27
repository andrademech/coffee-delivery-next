import cx from 'classnames'
import { Baloo_2, Roboto } from 'next/font/google'

const baloo = Baloo_2({ subsets: ['latin'] })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

import Irish from '../../assets/coffee/irlandes.svg'
import Arabe from '../../assets/coffee/arabe.svg'
import Havaiano from '../../assets/coffee/havaiano.svg'
import Cubano from '../../assets/coffee/cubano.svg'
import ChocolateQuente from '../../assets/coffee/chocolateQuente.svg'
import Mochaccino from '../../assets/coffee/mochaccino.svg'
import Macchiato from '../../assets/coffee/macchiato.svg'
import Cappuccino from '../../assets/coffee/cappuccino.svg'
import Latte from '../../assets/coffee/latte.svg'
import CafeComLeite from '../../assets/coffee/cafeComLeite.svg'
import CafeGelado from '../../assets/coffee/cafeGelado.svg'
import ExpressoCremoso from '../../assets/coffee/expressoCremoso.svg'
import Americano from '../../assets/coffee/americano.svg'
import ExpressoTradicional from '../../assets/coffee/expresso.svg'

import { CoffeeCard } from './components/CoffeeCard'

const coffeeList = [
  {
    id: 1,
    coffeeName: 'Irlandês',
    image: Irish,
    tag: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 10.0,
  },
  {
    id: 2,
    coffeeName: 'Árabe',
    image: Arabe,
    tag: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 8.25,
  },
  {
    id: 3,
    coffeeName: 'Havaiano',
    image: Havaiano,
    tag: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 6.25,
  },
  {
    id: 4,
    coffeeName: 'Cubano',
    image: Cubano,
    tag: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 7.25,
  },
  {
    id: 5,
    coffeeName: 'Chocolate Quente',
    image: ChocolateQuente,
    tag: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 3.75,
  },
  {
    id: 6,
    coffeeName: 'Mochaccino',
    image: Mochaccino,
    tag: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 14.0,
  },
  {
    id: 7,
    coffeeName: 'Macchiato',
    image: Macchiato,
    tag: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 12.0,
  },
  {
    id: 8,
    coffeeName: 'Cappuccino',
    image: Cappuccino,
    tag: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 10.0,
  },
  {
    id: 9,
    coffeeName: 'Latte',
    image: Latte,
    tag: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 8.0,
  },
  {
    id: 10,
    coffeeName: 'Café com Leite',
    image: CafeComLeite,
    tag: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 6.0,
  },
  {
    id: 11,
    coffeeName: 'Café Gelado',
    image: CafeGelado,
    tag: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 4.85,
  },
  {
    id: 12,
    coffeeName: 'Expresso Cremoso',
    image: ExpressoCremoso,
    tag: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 8.75,
  },
  {
    id: 13,
    coffeeName: 'Americano',
    image: Americano,
    tag: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 10.75,
  },
  {
    id: 14,
    coffeeName: 'Expresso Tradicional',
    image: ExpressoTradicional,
    tag: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 5.75,
  },
]

export function CoffeeList() {
  return (
    <section className={cx(`${roboto.className} flex flex-col justify-around max-w-[100rem] mx-auto dark:bg-neutral-900 px-52`)}>
      <h1 className={cx(`${baloo.className} mt-8 pb-16 text-4xl text-left font-bold w-full`)}>Nossos cafés</h1>

      <div className={cx('grid grid-cols-4 gap-x-8 gap-y-10 pb-8')}>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} {...coffee} />
        ))}
      </div>
    </section>
  )
}