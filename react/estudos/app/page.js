import Teste from "@/components/teste/teste";
import Sobre from "@/components/teste2/teste2";
import Teste3 from "@/components/teste3/teste3";
import Contador from "@/components/contador/contador";
export default function Home() {
  return (
    <div>
      <h1 className="text-center p-3 text-cyan-500 text-2xl">Página Principal</h1>
      <Contador inicial={0}   />
      <Contador inicial={10} />
    </div>
  );
}