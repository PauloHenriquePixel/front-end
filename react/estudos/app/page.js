import Teste from "@/components/teste/teste";
import Sobre from "@/components/teste2/teste2";
import Teste3 from "@/components/teste3/teste3";
import Contador from "@/components/contador/contador";
export default function Home() {
  return (
    <div className="">
    <h1>Sobre a loja</h1>
    <h2>Esta é a página sobre a loja</h2>
    <Contador inicial={0} />
    </div>
  );
}