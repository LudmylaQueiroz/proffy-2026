import { useNavigate } from 'react-router'
import backgroundFinally from '../assets/background-finaly.svg'
import done from '../assets/done.svg'
import { Button } from './button'

type FinallyProps = {
    title: string
    subtitle: string
    titleButton: string
    path?: string
}

export function Finally({title, subtitle, titleButton, path = ""}: FinallyProps) {
    const navigate = useNavigate()
    function handleFinally() {
        navigate(path)
    }
    return (
        <div className="flex flex-col min-h-screen items-center justify-center relative h-full bg-purple">
            <img src={backgroundFinally} className="absolute w-[69rem] h-[32rem]" />
            <div className='flex flex-col items-center justify-center absolute'>
                <img src={done} />
                <h1 className='font-archivo-bold text-white text-6xl mt-10'>
                    {title}
                </h1>
                <p className='font-poppins-regular text-base text-text-purple-base mt-6 text-center'>
                    {subtitle}
                </p>

                <div>
                    <Button
                        title={titleButton}
                        type='button'
                        disabled={false}
                        onClick={handleFinally}
                    />
                </div>
            </div>
        </div>
    )
}