'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { zodEthereumAddress } from '@/validation/ethAddress'

const formSchema = object({
  receiverAddress: zodEthereumAddress,
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="receiverAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h1 className="mb-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
                    What's their ETH Address?
                  </h1>
                  <h2 className="mb-6 text-muted-foreground">
                    Enter the ETH Address of the person you're recommending
                  </h2>
                </FormLabel>
                <FormControl className="mb-2">
                  <Input placeholder="0x954C3DC7C759d17F040e1080fA74A593bD34e79B" {...field} />
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
