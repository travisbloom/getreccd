'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { isNil } from 'lodash-es'
import { resolveAddress } from 'thirdweb/extensions/ens'
import { object, z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { normalizeETHAddress } from '@/utils/shared/normalizedETHAddress'
import { thirdwebClient } from '@/utils/shared/thirdweb/client'
import {
  ZOD_ETH_ADDRESS_OR_ENS_ERROR_MESSAGE,
  zodEthereumAddress,
  zodEthereumAddressOrENS,
} from '@/validation/ethAddress'

const formSchema = object({
  receiverAddress: zodEthereumAddressOrENS,
})

export function StepReceiverAddress({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiverAddress: '',
    },
  })

  return (
    <Form {...form}>
      <form
        className="w-full"
        onSubmit={form.handleSubmit(async values => {
          const isEthAddress = zodEthereumAddress.safeParse(values.receiverAddress).success
          if (isEthAddress) {
            return onSubmit(values)
          }
          const ensAddress: string | null = await resolveAddress({
            client: thirdwebClient,
            name: values.receiverAddress,
          }).catch(() => {
            form.setError('receiverAddress', {
              message: ZOD_ETH_ADDRESS_OR_ENS_ERROR_MESSAGE,
            })
            return null
          })
          if (!isNil(ensAddress)) {
            onSubmit({ receiverAddress: normalizeETHAddress(ensAddress) })
          }
        })}
      >
        <div>
          <FormField
            control={form.control}
            name="receiverAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h1 className="mb-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
                    What's their ETH Address or ENS?
                  </h1>
                  <h2 className="mb-6 text-muted-foreground">
                    Enter the ETH Address or ENS of the person you're recommending
                  </h2>
                </FormLabel>
                <FormControl className="mb-2">
                  <Input placeholder="tbloom.eth" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-6" type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
