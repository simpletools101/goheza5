'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import EndNotRegistration from './main/end-note-registration'
import { SocialMediaSection } from './main/social-media-registration'
import { IAddUser, INSERT_USER } from '@/lib/database'
import { CircleCheck, CircleCheckBig, CircleX, FileWarning, MessageCircleWarning } from 'lucide-react'
import { AcceptedDialog } from '@/components/accepted-dialog'

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

export function RegistrationForm() {
    const [isAcceptedDialogOpen, setAcceptedDialogOpen] = useState(false)
    const [formData, setFormData] = useState<FormData>({
        accountType: null,
        firstName: '',
        lastName: '',
        email: '',
        socials: {
            twitter: '',
            facebook: '',
            instagram: '',
            youtube: '',
            tiktok: '',
        },
    })

    const updateFormData = (data: Partial<FormData>) => {
        setFormData((prev) => ({ ...prev, ...data }))
    }

    const isHandleAtleastAvailable = () => {
        let v = false
        if (formData.socials.facebook != '') {
            v = true
        }
        if (formData.socials.instagram != '') {
            v = true
        }
        if (formData.socials.tiktok != '') {
            v = true
        }
        if (formData.socials.twitter != '') {
            v = true
        }
        if (formData.socials.youtube != '') {
            v = true
        }
        return v
    }

    const isNameAndEmailPresent = () => {
        let q = false
        if (formData.firstName.charAt(0) && formData.lastName.charAt(0)) {
            q = true
        } else {
            q = false
        }

        if (formData.email.charAt(0)) {
            q = true
        } else {
            q = false
        }

        return q
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        /**
         *
         * Data Sent to the backend
         *
         */

        let _DATA_: IAddUser = {
            name: `${formData.firstName}\t${formData.lastName}`,
            account_type: formData.accountType && formData.accountType == 'user' ? 'individual' : 'business',
            email: formData.email,
            facebook_handle: formData.socials.facebook,
            instagram_handle: formData.socials.instagram,
            tiktok_handle: formData.socials.tiktok,
            twitter_handle: formData.socials.twitter,
            youtube_handle: formData.socials.youtube,
        }

        if (isHandleAtleastAvailable() && isNameAndEmailPresent()) {
            if (navigator.onLine) {
                INSERT_USER(_DATA_).then((value) => {
                    console.log('--completed', formData)
                    setAcceptedDialogOpen(true)
                })
                setTimeout(() => {
                    setAcceptedDialogOpen(false)
                }, 4000)
            } else {
                toast(<p className="text-md font-bold text-neutral-800 p-2">No Internet Connection..</p>, {
                    richColors: true,
                    icon: <CircleX className="text-red-700" size={18} />,
                    position: 'top-center',
                })
            }
        } else {
            toast(<p className="text-md font-bold text-neutral-800 p-2">Missing Values...</p>, {
                richColors: true,
                icon: <CircleX className="text-red-700" size={19} />,
                position: 'top-center',
            })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" rounded-3xl p-8 shadow-2xl bg-white"
        >
            {/* <HeaderRegistration /> */}
            <AcceptedDialog isDialogOpen={isAcceptedDialogOpen} />
            <div className="space-y-6 ">
                <div className="mb-6">
                    <Label className="text-neutral-400 mb-3 block">I want to join as</Label>
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center ${
                                formData.accountType === 'user'
                                    ? 'bg-blue-100 border-blue-500'
                                    : 'bg-white border-gray-300 hover:bg-gray-100'
                            }`}
                            onClick={() => updateFormData({ accountType: 'user' })}
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                                    formData.accountType === 'user' ? 'bg-blue-500' : 'bg-[#3a5d8a]/50'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <span className="text-neutral-400 font-medium">Creator</span>
                        </button>

                        <button
                            type="button"
                            className={`p-4 rounded-xl border transition-all flex flex-col items-center justify-center ${
                                formData.accountType === 'business'
                                    ? 'bg-purple-100 border-purple-500'
                                    : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
                            }`}
                            onClick={() => updateFormData({ accountType: 'business' })}
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                                    formData.accountType === 'business' ? 'bg-purple-500' : 'bg-[#5a4080]/50'
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <span className="text-neutral-400 font-medium">Business</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-neutral-400">
                            First name
                        </Label>
                        <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => updateFormData({ firstName: e.target.value })}
                            placeholder="First name"
                            required
                            className="bg-white border border-gray-300 text-black font-semibold text-lg placeholder:text-gray-500 h-12"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-neutral-400">
                            Last name
                        </Label>
                        <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => updateFormData({ lastName: e.target.value })}
                            placeholder="Last name"
                            required
                            className="bg-white border font-semibold text-lg  border-gray-300 text-black placeholder:text-gray-500 h-12"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-neutral-400">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                        placeholder="Enter your email"
                        required
                        className="bg-white border border-gray-300 font-semibold text-lg text-black placeholder:text-gray-500 h-12"
                    />
                </div>

                {/**
                 *
                 *
                 *
                 * Social media Sections
                 *
                 */}

                <SocialMediaSection socials={formData.socials} updateFormData={updateFormData} />

                <Button
                    onClick={handleSubmit}
                    // disabled={!isFormValid}
                    className="w-full h-12 text-white font-medium bg-[#ff5757] rounded-full"
                >
                    Save my seat
                </Button>

                <EndNotRegistration />
            </div>
        </motion.div>
    )
}
