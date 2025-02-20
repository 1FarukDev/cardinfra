
import LapoLogo from '@/assets/LAPO_Logo.svg'

export default function Logo({} : {size?: 'small' | 'large', theme?: 'dark' | 'light'}) {
    return (
        <>
            <img src={LapoLogo} className={`w-[100px] md:w-[120px] rounded-full`} alt="App Logo" />
        </>
    )
}