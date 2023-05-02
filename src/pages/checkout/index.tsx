// Layout + classnames
import { Layout } from "@/components/Layout";
import cx from "classnames";

// React Hook Form + Zod
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Fonts
import { Baloo_2, Roboto } from "next/font/google";
import { NewCheckoutForm } from "@/components/NewCheckoutForm";
import { SelectedCoffee } from "@/components/SelectedCoffee";
import { StaticImageData } from "next/image";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/CartContext";


const baloo = Baloo_2({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

// Form validation
const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().nonempty(),
  address: zod.string().nonempty(),
  number: zod.string().nonempty(),
  complement: zod.string().optional(),
  district: zod.string().nonempty(),
  city: zod.string().nonempty(),
  state: zod.string().nonempty(),
});

// Types inference
type NewCheckoutFormData = zod.infer<typeof newCheckoutFormValidationSchema>

interface ICoffeeListProps {
  id: number
  coffeeName: string
  image: StaticImageData
  tag: string[]
  description: string
  price: number
}[]

export default function Checkout({
  id,
  coffeeName,
  description,
  image,
  tag,
  price
}: ICoffeeListProps) {
  const { cart } = useContextSelector(CartContext, ({ cart }) => ({
    cart,
  }))

  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const { handleSubmit, reset } = newCheckoutForm

  function handleNewCheckoutFormSubmit(data: NewCheckoutFormData) {
    console.log(data)
    reset()
  }

  return (
    <Layout>
      <div className={cx('flex items-center max-w-[100rem] w-full mx-auto dark:bg-neutral-900 py-6 px-[15rem]')}>

        <form
          onSubmit={handleSubmit(handleNewCheckoutFormSubmit)}
          className={cx(`${roboto.className} flex gap-9`)}
        >
          <div className={cx('flex flex-col gap-3 w-[40rem]')}>
            <h3 className={cx(`${baloo.className} text-lg`)}>
              Complete seu pedido
            </h3>
            <FormProvider {...newCheckoutForm}>
              <NewCheckoutForm />
            </FormProvider>
          </div>

          {
            cart.map(({ id, coffeeName, description, image, tag, price }) => {
              return (
                <div key={id} >
                  <SelectedCoffee
                    id={id}
                    coffeeName={coffeeName}
                    description={description}
                    image={image}
                    tag={tag}
                    price={price}
                  />
                </div>
              )
            }
            )
          }
        </form>

      </div>
    </Layout>
  )
}