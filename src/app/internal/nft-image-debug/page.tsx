'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import NextImage from 'next/image'
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
import { ExternalLink } from '@/components/ui/link'
import { Textarea } from '@/components/ui/textarea'
import { PageProps } from '@/types'
import { urls } from '@/utils/shared/urls'
import { zodEthereumAddress } from '@/validation/ethAddress'

const formSchema = object({
  receiverName: string().min(1, {
    message: 'Name of individual can not be blank.',
  }),
  description: string()
    .min(10, 'Recommendation must be at least 10 characters long.')
    .max(280, 'Recommendation must be less than 280 characters long.'),
  senderName: string().min(1, {
    message: 'Name of individual can not be blank.',
  }),
  senderAddress: zodEthereumAddress,
  receiverAddress: zodEthereumAddress,
})

export default function NftImageDebug(_props: PageProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      receiverName: 'Travis Bloom',
      description: 'Love the NFT app!',
      senderName: 'Brian Armstrong',
      senderAddress: '0x5b76f5B8fc9D700624F78208132f91AD4e61a1f0',
      receiverAddress: '0x33425257b937989c2b59d3A5AAAc0EDC382FB57D',
    },
  })
  const [imageValues, setImageValues] = useState<z.infer<typeof formSchema> | null>(null)
  const imageUrl = imageValues && urls.mockNFTImage(imageValues)
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(res => setImageValues(res))}>
        <div>
          {imageUrl ? (
            <div>
              <p className="w-full truncate">
                Url: <ExternalLink href={imageUrl}>{imageUrl}</ExternalLink>
              </p>
              <NextImage alt="mock" height={300} src={imageUrl} width={300} />
            </div>
          ) : (
            <p>Submit form to see NFT Image</p>
          )}
        </div>
        <FormField
          control={form.control}
          name="receiverName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>receiverName</FormLabel>
              <FormControl className="mb-2">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="receiverAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>receiverAddress</FormLabel>
              <FormControl className="mb-2">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="senderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>senderName</FormLabel>
              <FormControl className="mb-2">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="senderAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>senderAddress</FormLabel>
              <FormControl className="mb-2">
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>description</FormLabel>
              <FormControl className="mb-2">
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button className="mt-6" type="submit">
            Next
          </Button>
        </div>
      </form>
    </Form>
  )
}
