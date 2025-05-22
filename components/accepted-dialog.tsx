import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { CircleCheckBig } from 'lucide-react'

interface IAcceptedDialog {
    isDialogOpen: boolean
}

export function AcceptedDialog(props: IAcceptedDialog) {
    return (
        <Dialog open={props.isDialogOpen}>
            <DialogContent className="p-6  w-full flex flex-col items-center justify-center">
                <div className='hidden'>
                    <DialogTitle>Goheza</DialogTitle>
                </div>
                <div className="flex p-8 space-y-5 flex-col items-center justify-center">
                    <div className="w-full text-2xl items-center flex justify-center">
                        <CircleCheckBig size={50} className="text-green-400" />
                    </div>
                    <div className="text-center text-2xl font-medium text-neutral-700">
                        <h2>
                            We've added you to our <br></br>
                            <span>waiting List</span>
                        </h2>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
