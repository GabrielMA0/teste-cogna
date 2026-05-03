import {SolutionsSection} from "@/components"

export default function Solucoes() {
    return(
        <main>
            <section className="px-5 md:px-10 py-25 flex flex-col items-center gap-20">
                <div className="w-full md:w-179 flex flex-col gap-5 text-center">
                    <h1 className="text-primary">Soluções completas para transformar a educação</h1>
                    <p className="text-neutral">Da formação acadêmica ao desenvolvimento profissional, oferecemos soluções inovadoras e acessíveis que conectam pessoas, escolas e empresas ao futuro da educação.</p>
                </div>
            </section>
                <SolutionsSection showAudience={true} showBtnSolucoes={false} />
        </main>
    )
}
   