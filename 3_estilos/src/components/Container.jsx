// Importando o arquivo Sass em um componente
import "@/css/styles.sass";

export default function Container() {
  return (
    <div className="main-container">
      <div className="header">Cabeçalho</div>
      <p>Conteúdo principal</p>
    </div>
  );
}
