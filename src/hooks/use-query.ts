import { useEffect } from 'react'
import { useQuery as useTanstackQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

type QueryProps<T, A> = {
  payload?: T
  onSuccess?: (data: A) => void
  onError?: () => void
  showSuccess?: boolean
  showError?: boolean
  queryFn: (payload: T) => Promise<any>
  queryKey: string
}

export const useQuery = <T, A>({ queryKey, queryFn, payload, onSuccess = () => {}, onError = () => {}, showSuccess = false, showError = false, ...rest }: QueryProps<T, unknown>) => {
  const { data, isError, error, isRefetching, ...others } = useTanstackQuery({
    queryKey: [queryKey],
    queryFn: () => queryFn(payload as T),
    retry: false,
    ...rest,
  })

  useEffect(() => {
    if (isError) {
      onError()
      if (showError) {
        const description = error?.message || 'Something went wrong !'
        toast.error(description)
      }
    }
  }, [isError])
  useEffect(() => {
    if (data) {
      onSuccess(data)
      //if (showSuccess) toast.success(data?.message )
    }
  }, [data])
  return { data, isError, error, ...others }
}
