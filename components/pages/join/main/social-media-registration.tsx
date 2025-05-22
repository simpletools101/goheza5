'use client'

import { useState, useRef, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Twitter, Facebook, Instagram, Youtube, InstagramIcon as TiktokIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

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

interface SocialMediaSectionProps {
    socials: FormData['socials']
    updateFormData: (data: Partial<FormData>) => void
}

// Mock data for autocomplete suggestions
// In a real app, this would come from API calls to each platform
const mockSuggestions = {
    twitter: [],
    facebook: [],
    instagram: [],
    youtube: [],
    tiktok: [],
}

interface ICommonSuggestions {
    twitter: string[]
    facebook: string[]
    instagram: string[]
    youtube: string[]
    tiktok: string[]
}

type Platform_R = 'facebook' | 'youtube' | 'tiktok' | 'twitter' | 'instagram'

export function SocialMediaSection({ socials, updateFormData }: SocialMediaSectionProps) {
    /**
     * Get the current active field
     */
    const [activeField, setActiveField] = useState<keyof typeof socials | null>(null)
    /**
     * Get the current suggestion and add them as the user is typing
     *
     * _______________(To be fetched online)
     */
    const [suggestions, setSuggestions] = useState<string[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    /***
     *
     * CURRENT RECEIVED SUGGESTIONS.
     *
     */
    let currentSocialHandleSuggestions: ICommonSuggestions = {
        facebook: [],
        instagram: [],
        tiktok: [],
        twitter: [],
        youtube: [],
    }

    /**
     * Request user suggestions from the internet, about 5 suggestions
     * @param enteredValue
     */
    async function requestSuggestionsFromAPI(enteredValue: string, platform: Platform_R): Promise<string[]> {
        let fetchedSuggestions: Array<string> = []
        return fetchedSuggestions
    }

    /**
     *
     * Filter the suggestions based on user entry and specified Platform
     * @param platform
     * @param value
     */
    const handleInputChange = (platform: keyof typeof socials, value: string) => {
        const newSocials = { ...socials, [platform]: value }
        updateFormData({ socials: newSocials })

        // requestSuggestionsFromAPI(value, platform).then((suggestions) => {
        //     if (value) {
        //         const filteredSuggestions = suggestions.filter((suggestion) =>
        //             suggestion.toLowerCase().includes(value.toLowerCase())
        //         )
        //         setSuggestions(filteredSuggestions)
        //         setActiveField(platform)
        //     } else {
        //         setSuggestions([])
        //         setActiveField(null)
        //     }
        // })

    }

    /**
     * Enable the user to select a suggestions
     * @param suggestion
     */
    const selectSuggestion = (suggestion: string) => {
        if (activeField) {
            const newSocials = { ...socials, [activeField]: suggestion }
            updateFormData({ socials: newSocials })
            setActiveField(null)
            setSuggestions([])
        }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveField(null)
                setSuggestions([])
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Social media platforms with their icons and colors
    const platforms = [
        { name: 'twitter' as const, icon: <Twitter className="h-5 w-5" />, label: 'Twitter', color: 'text-blue-400' },
        {
            name: 'facebook' as const,
            icon: <Facebook className="h-5 w-5" />,
            label: 'Facebook',
            color: 'text-blue-600',
        },
        {
            name: 'instagram' as const,
            icon: <Instagram className="h-5 w-5" />,
            label: 'Instagram',
            color: 'text-pink-500',
        },
        { name: 'youtube' as const, icon: <Youtube className="h-5 w-5" />, label: 'YouTube', color: 'text-red-600' },
        { name: 'tiktok' as const, icon: <TiktokIcon className="h-5 w-5" />, label: 'TikTok', color: 'text-black' },
    ]

    return (
        <div className="space-y-4">
            <div className="flex items-center">
                <Button
                    variant="ghost"
                    size="sm"
                    className="-ml-2 text-[#ff5757]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
                    <span className="ml-2">Add social media profiles</span>
                </Button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-2"
                >
                    {platforms.map((platform, index) => (
                        <motion.div
                            key={platform.name}
                            className="relative"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                            <Label htmlFor={platform.name} className={`flex items-center gap-2 mb-2 ${platform.color}`}>
                                {platform.icon} {platform.label}
                            </Label>
                            <div className="relative group">
                                <Input
                                    id={platform.name}
                                    value={socials[platform.name]}
                                    onChange={(e) => handleInputChange(platform.name, e.target.value)}
                                    placeholder={`Enter your ${platform.label} handle`}
                                    className="bg-white border font-semibold text-lg border-gray-300 text-black placeholder:text-gray-500 h-12"
                                />

                                {/* Autocomplete dropdown */}
                                <AnimatePresence>
                                    {activeField === platform.name && suggestions.length > 0 && (
                                        <motion.div
                                            ref={dropdownRef}
                                            className="absolute z-10 w-full mt-1 bg-[#1e2d47] border border-[#3a5d8a] rounded-md shadow-lg max-h-60 overflow-auto"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {suggestions.map((suggestion) => (
                                                <motion.div
                                                    key={suggestion}
                                                    className="px-4 py-3 hover:bg-[#2a4166] cursor-pointer flex items-center space-x-2 transition-colors text-white"
                                                    onClick={() => selectSuggestion(suggestion)}
                                                    whileHover={{ backgroundColor: 'rgba(93, 63, 211, 0.2)' }}
                                                >
                                                    <span className={platform.color}>{platform.icon}</span>
                                                    <span>{suggestion}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}
