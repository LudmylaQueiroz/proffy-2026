import { Finally } from "../../components/finally";

export function FinallyRegister() {
    return <Finally
                title="Cadastro concluído"
                subtitle={`Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência.`}
                titleButton="Fazer login"
                path="/sign-in"
            />
}