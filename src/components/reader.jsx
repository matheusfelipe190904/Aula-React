export function Header({title}) {
    return (
        <reader className="p-5 flex justify-between">
        <h1 className="text-4xl font-bold">{title}</h1>
        <nav>
          <ul className="flex gap-2.5">
            <li>
              <a href="">Inicio</a></li>
            <li>
              <a href="">Produtos</a></li>
            <li>
              <a href="">Sobre</a></li>
            <li>
              <a href="">Contato</a></li>
          </ul>
        </nav>
      </reader>
    )
}