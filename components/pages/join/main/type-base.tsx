export type AccountType = 'user' | 'business'

export type FormData = {
    accountType: AccountType | null
    firstName: string
    lastName: string
    email: string
    socials: {
        twitter: string
        facebook: string
        instagram: string
        youtube: string
        tiktok: string
    }
}

type TypeBaseProps = {
    formData: FormData
    children: React.ReactNode
    type: AccountType
    updateFormCallback: (data: Partial<FormData>) => void
}

export default function TypeBaseAccount(props: TypeBaseProps) {
    return (
        <button
            type="button"
            className={`p-4 rounded-xl border ${
                props.formData.accountType === 'user'
                    ? 'bg-[#3d2a5c] border-purple-500'
                    : 'bg-[#3d2a5c]/30 border-[#5a4080] hover:bg-[#3d2a5c]/50'
            } transition-all flex flex-col items-center justify-center`}
            onClick={() => props.updateFormCallback({ accountType: 'user' })}
        >
            <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    props.formData.accountType === 'user' ? 'bg-purple-500' : 'bg-[#5a4080]/50'
                }`}
            >
                {props.children}
            </div>
            <span className="text-white font-medium">{props.type == 'user' ? 'Individual User' : 'Business'}</span>
        </button>
    )
}
