import { RegistrationForm } from "../../join/registration-form";
import HeaderRegistration from "../../join/main/header-registration";

export default function UserForm() {
    return (
        <div id="userform">
            <div className="flex flex-col items-center justify-center p-4 m-6">
                <HeaderRegistration/>
                <div className="w-full max-w-xl">
                    
                    <div className="mt-8">
                        <RegistrationForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
