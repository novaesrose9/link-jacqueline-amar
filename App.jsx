import CeuDourado from './components/CeuDourado.jsx'
import Perfil from './components/Perfil.jsx'
import Botao from './components/Botao.jsx'
import Credenciais from './components/Credenciais.jsx'
import Rodape from './components/Rodape.jsx'
import { botoes, perfil, visual } from './config/links.js'
import './styles/app.css'

export default function App() {
  return (
    <div className="pagina">
      {visual.ceuDourado && <CeuDourado />}

      <main className="cartao">
        <Perfil
          nome={perfil.nome}
          titulo={perfil.titulo}
          frase={perfil.frase}
        />

        <nav className="lista-botoes" aria-label="Links principais">
          {botoes.map((botao, indice) => (
            <Botao
              key={botao.titulo}
              titulo={botao.titulo}
              descricao={botao.descricao}
              url={botao.url}
              destaque={botao.destaque}
              atraso={0.3 + indice * 0.09}
            />
          ))}
        </nav>

        <Credenciais />

        <Rodape />
      </main>
    </div>
  )
}
