'use client'
import { useState } from 'react'

import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import { Button } from '@/components/form/button'

const Account = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return <ResponsiveDialog title='Account' description='Update your information' open={open} onOpenChange={setOpen}></ResponsiveDialog>
}

export default Account
