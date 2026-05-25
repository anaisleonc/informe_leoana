import { useState } from "react"
import ReactMarkdown from "react-markdown"

import resumen from "./content/01_resumen_leoana.md?raw"
import marco from "./content/02_marco_leoana.md?raw"
import delitos from "./content/03_delitos_leoana.md?raw"
import comparacion from "./content/04_comparacion_leoana.md?raw"
import responsabilidades from "./content/05_responsabilidades_leoana.md?raw"
import datos from "./content/06_datos_leoana.md?raw"
import conclusiones from "./content/07_conclusiones_leoana.md?raw"
import prompts from "./content/08_prompts_leoana.md?raw"

function App() {

  const sections = [
    {
      title: "Resumen Ejecutivo",
      content: resumen
    },

    {
      title: "Marco Normativo",
      content: marco
    },

    {
      title: "Delitos Informáticos",
      content: delitos
    },

    {
      title: "Comparación Normativa",
      content: comparacion
    },

    {
      title: "Responsabilidades",
      content: responsabilidades
    },

    {
      title: "Datos Personales",
      content: datos
    },

    {
      title: "Conclusiones",
      content: conclusiones
    },

    {
      title: "Prompts IA",
      content: prompts
    }
  ]

  const [selected, setSelected] = useState(sections[0])

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}

      <aside className="w-72 bg-blue-950 text-white p-6 shadow-xl overflow-y-auto">

        <h1 className="text-3xl font-bold mb-2">
          Informe
        </h1>

        <p className="text-sm text-gray-300 mb-8">
          Caso Equifax
        </p>

        <nav>
          <ul className="space-y-4">

            {sections.map((section, index) => (

              <li
                key={index}
                onClick={() => setSelected(section)}
                className={`
  p-3
  rounded-xl
  cursor-pointer
  transition
  ${
    selected.title === section.title
      ? "bg-white text-blue-950 font-bold"
      : "bg-blue-900 hover:bg-blue-800 text-white"
  }
`}
              
              >
                {section.title}
              </li>

            ))}

          </ul>
        </nav>

      </aside>

      {/* CONTENIDO */}

      <main className="flex-1 p-10 overflow-y-auto">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold mb-8 text-blue-950">
            {selected.title}
          </h2>

          <div className="max-w-none text-gray-800 leading-relaxed space-y-4">

            <ReactMarkdown>
              {selected.content}
            </ReactMarkdown>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App