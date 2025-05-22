import { createClient } from '@supabase/supabase-js'

/**
 * The current supabase url
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!

/**
 * The current supabase key
 */
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY!

/**
 * The current supabase client
 */
const supabase = createClient(supabaseUrl, supabaseKey)

export interface IAddUser {
    name: string
    email: string
    account_type: 'individual' | 'business'
    youtube_handle?: string
    twitter_handle?: string
    tiktok_handle?: string
    instagram_handle?: string
    facebook_handle?: string
}

/**
 * Used to add users to the database
 * @param userData User data to insert
 * @returns Object containing success status and data or error message
 */
export async function INSERT_USER(userData: IAddUser) {
    try {
        const { data, error } = await supabase.from('users').insert([
            {
                name: userData.name,
                email: userData.email,
                account_type: userData.account_type,
                youtube_handle: userData.youtube_handle || null,
                twitter_handle: userData.twitter_handle || null,
                tiktok_handle: userData.tiktok_handle || null,
                instagram_handle: userData.instagram_handle || null,
                facebook_handle: userData.facebook_handle || null
            },
        ]).select()

        if (error) {
            return {
                success: false,
                error: error.message
            }
        }

        return {
            success: true,
            data
        }
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }
    }
}