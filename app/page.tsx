import EndNote from '@/components/pages/main/endNote/endNote'
import MotionVid from '@/components/pages/main/motionVid/motionVid'
import Ratings from '@/components/pages/main/ratings/ratings'
import UserForm from '@/components/pages/main/userForm/userForm'
import WelcomeNote from '@/components/pages/main/welcomeNote/welcome-note'

export default function Home() {
    return (
        <div className="flex flex-col">
            <WelcomeNote />
            {/* <MotionVid /> */}
            <Ratings />
            <UserForm />
        </div>
    )
}
