import { useEffect } from 'react'
import { useMutation as useTanstackMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

type MutationProps<T> = {
  onSuccess?: (data: T & { message: string }) => void
  onError?: () => void
  showSuccess?: boolean
  showError?: boolean
  mutationFn: (payload: void) => Promise<any>
}

export const useMutation = <T>({ mutationFn, onSuccess = () => {}, onError = () => {}, showSuccess = true }: MutationProps<T>) => {
  const { data, isError, error, isSuccess, ...others } = useTanstackMutation({ mutationFn: d => mutationFn(d), onSuccess: data => onMutationSuccess(data) })

  function onMutationSuccess(data: T & { message: string }) {
    if (data) onSuccess(data)
    if (showSuccess) toast.success(data.message)
  }

  useEffect(() => {
    if (isError) {
      const description = error?.message || 'Something went wrong !'
      toast.error(description)
      onError()
    }
  }, [isError])

  return { data, isError, error, ...others }
}
