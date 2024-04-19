'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { object, string, z } from 'zod'

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

const formSchema = object({
  receiverName: string().min(1, {
    message: 'Name of individual can not be blank.',
  }),
})

export function StepReceiverName({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiverName: '',
    },
  })

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="receiverName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h1 className="mb-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
                    Who are you recommending?
                  </h1>
                  <h2 className="mb-6 text-muted-foreground">
                    Enter the name of the person you're giving an onchain recommendation to
                  </h2>
                </FormLabel>
                <FormControl className="mb-2">
                  <Input placeholder="Satoshi..." {...field} />
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
