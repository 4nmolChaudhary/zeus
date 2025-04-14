import { ResponsiveDialog } from '@/components/others/responsive-dialog'
import ThemeToggle from '@/components/others/theme-toggle'

const Appearance = ({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <ResponsiveDialog title='Appearance' description='Change how the app appears' open={open} onOpenChange={setOpen}>
      <div className='mt-2 flex justify-between'>
        <span className='text-sm text-neutral-500 dark:text-neutral-400'>Theme</span>
        <ThemeToggle />
      </div>
    </ResponsiveDialog>
  )
}

export default Appearance
