import z from "zod"
import { BackgroundIntro } from "../../components/backgroundIntro"
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router"

import goBack from '../../assets/goback.svg'

const signUpForm = z.object({
    name: z.string().min(3, "Digite um válido"),
    lastName: z.string().min(3, "Digite um sobrenome válido"),
    email: z.email("E-mail inválido"),
    password: z.string().min(6, "A senha deve conter pelo menos 6 caracteres")
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            isSubmitted,
            errors,
            isValid
        }
    } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm),
        mode: "onChange"
    })

    async function handleSignUp(data: SignUpForm) {
        try {
            console.log(data)
            navigate("/sign-up/finally-register")
        } catch {
            toast.error("Credenciais inválidas")
        }
        reset()
    }

    function goBackPage() {
        navigate(-1)
    }

    return (
        <div className="grid min-h-screen grid-cols-5 antialiased">
            <div className="bg-background col-span-2 flex flex-col h-full items-center justify-center">
                <div className='w-[352px] relative'>
                    <button className="absolute left-0 cursor-pointer mt-[-100px]" onClick={goBackPage}>
                        <img src={goBack} alt="Seta para voltar a página de login" className="w-8 h-12" />
                    </button>
                    <div className='flex flex-col justify-center gap-6'>
                        <h1 className='text-3xl font-poppins-semibold text-text-title'>Cadastro</h1>
                        <h3 className="text-base font-poppins-regular text-text-base">
                            Preencha os dados abaixo<br />para começar.
                        </h3>

                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <Input
                                type="text"
                                id="name"
                                placeholder="Nome"
                                rounded="top"
                                register={register}
                                error={errors.name}
                            />

                            <Input
                                type="text"
                                id="lastName"
                                placeholder="Sobrenome"
                                rounded="none"
                                register={register}
                                error={errors.lastName}
                            />

                            <Input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                rounded="none"
                                register={register}
                                error={errors.email}
                            />

                            <Input
                                type="password"
                                id="password"
                                placeholder="Senha"
                                rounded="bottom"
                                register={register}
                                error={errors.password}
                            />

                            <Button
                                type="submit"
                                disabled={isSubmitted || !isValid}
                                title="Concluir cadastro"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <BackgroundIntro />
        </div>
    )
}