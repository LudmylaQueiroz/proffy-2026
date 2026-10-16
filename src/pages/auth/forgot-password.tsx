import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useNavigate } from "react-router"

import { BackgroundIntro } from "../../components/backgroundIntro"
import { Button } from "../../components/button"
import { Input } from "../../components/input"

import goBack from '../../assets/goback.svg'

const forgotPasswordForm = z.object({
    email: z
        .string()
        .min(1, "Informe seu e-mail")
        .pipe(z.email("E-mail inválido")),
})

type ForgotPasswordForm = z.infer<typeof forgotPasswordForm>

// MOCK: troque pela chamada real da API quando ela existir.
// Aqui simulamos o envio e um e-mail não cadastrado pra testar o erro.
async function sendRecoveryEmail(email: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (email === "naocadastrado@proffy.com") {
        throw new Error("EMAIL_NOT_FOUND")
    }
}

export function ForgotPassword() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        formState: {
            isSubmitting,
            errors,
            isValid
        }
    } = useForm<ForgotPasswordForm>({
        resolver: zodResolver(forgotPasswordForm),
        mode: "onChange"
    })

    async function handleForgotPassword(data: ForgotPasswordForm) {
        try {
            await sendRecoveryEmail(data.email)
            navigate("/forgot-password/finally-forgot-password")
        } catch (error) {
            if (error instanceof Error && error.message === "EMAIL_NOT_FOUND") {
                setError("email", { message: "E-mail não cadastrado" })
                return
            }
            toast.error("Não foi possível enviar o e-mail. Tente novamente.")
        }
    }

    function goBackPage() {
        navigate(-1)
    }

    return (
        <div className="grid min-h-screen grid-cols-5 antialiased">
            <div className="bg-background col-span-2 flex flex-col h-full items-center justify-center">
                <div className='w-[352px] relative'>
                    <button className="absolute left-0 cursor-pointer mt-[-100px]" onClick={goBackPage}>
                        <img src={goBack} alt="Seta para voltar à página anterior" className="w-8 h-12" />
                    </button>

                    <div className='flex flex-col justify-center gap-6'>
                        <h1 className='text-3xl font-poppins-semibold text-text-title'>
                            Eita, esqueceu<br />sua senha?
                        </h1>
                        <h3 className="text-base font-poppins-regular text-text-base">
                            Não esquenta,<br />vamos dar um jeito nisso.
                        </h3>

                        <form onSubmit={handleSubmit(handleForgotPassword)}>
                            <Input
                                type="email"
                                id="email"
                                placeholder="E-mail"
                                rounded="all"
                                register={register}
                                error={errors.email}
                            />

                            {errors.email && (
                                <span className="block mt-2 text-sm font-poppins-regular text-red-500">
                                    {errors.email.message}
                                </span>
                            )}

                            <Button
                                type="submit"
                                disabled={isSubmitting || !isValid}
                                title={isSubmitting ? "Enviando..." : "Enviar"}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <BackgroundIntro />
        </div>
    )
}