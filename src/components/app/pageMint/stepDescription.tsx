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
import { Textarea } from '@/components/ui/textarea'

const formSchema = object({
  description: string()
    .min(10, 'Recommendation must be at least 10 characters long.')
    .max(280, 'Recommendation must be less than 280 characters long.'),
})

export function StepDescription({
  onSubmit,
}: {
  onSubmit: (values: z.infer<typeof formSchema>) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <h1 className="mb-2 font-mono text-2xl font-bold text-foreground sm:text-3xl">
                    Type a recommendation
                  </h1>
                  <h2 className="mb-6 text-muted-foreground">
                    Let the world know why this person is awesome in an immutable format
                  </h2>
                </FormLabel>
                <FormControl className="mb-2">
                  <Textarea placeholder="Type a recommendation..." rows={10} {...field} />
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
