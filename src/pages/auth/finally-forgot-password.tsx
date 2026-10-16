import { Finally } from "../../components/finally";

export function FinallyForgotPassword() {
    return <Finally
                title="Redefinição enviada!"
                subtitle={
                    <>
                        Boa, agora é só checar o e-mail que foi enviado<br />
                        para você redefinir sua senha e aproveitar os estudos.
                    </>
                }
                titleButton="Voltar ao login"
                path="/sign-in"
            />
}