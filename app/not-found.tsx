import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
        <div className="flex flex-col max-w-195 items-center gap-5 px-5">
            <h1 className="text-[120px] text-primary">404</h1>
            <h2>Ops! Página não encontrada.</h2>
            <p>O conteúdo que você está procurando pode ter sido movido ou não existe
            mais. Use os botões abaixo para
            reencontrar seu caminho.
            </p>

            <div className="flex gap-5 items-center">
                <Button text="Voltar para Home" url="/" variant="tertiary" />
                <Button text="Nossa Soluções" url="/solucoes" variant="primary" />
            </div>
        </div>
    </main>
  );
}