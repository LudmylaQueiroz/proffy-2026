import background from '../assets/background.svg'
import logo from '../assets/logo.svg'

export function BackgroundIntro() {
    return (
        <div className="bg-purple flex items-center justify-center col-span-3 relative">
            <img src={background} alt="background image" className="absolute" />
            <img src={logo} alt="Imagem Com texto Proffy" className="absolute"/>
        </div>
    )
}