import Teste from "@/components/teste/teste";
import Sobre from "@/components/teste2/teste2";
import Teste3 from "@/components/teste3/teste3";
import Contador from "@/components/contador/contador";
export default function Home() {
  return (
    <div>
      <h1>Página Principal</h1>
      <Teste />
      <Sobre />
      <Teste3 nome="Componente Teste 3 com props" sobrenome="Sobrenome do Componente" />
      <Contador />
    </div>
  );
}