function App() {

  const sections = [
    "Resumen Ejecutivo",
    "Marco Normativo",
    "Delitos Informáticos",
    "Comparación Normativa",
    "Responsabilidades",
    "Datos Personales",
    "Conclusiones",
    "Prompts IA"
  ]

  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* SIDEBAR */}

      <aside className="w-72 bg-blue-950 text-white p-6 shadow-xl">

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
                className="bg-blue-900 hover:bg-blue-800 transition p-3 rounded-xl cursor-pointer"
              >
                {section}
              </li>
            ))}

          </ul>
        </nav>

      </aside>

      {/* CONTENIDO */}

      <main className="flex-1 p-10">

        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h2 className="text-4xl font-bold mb-6 text-blue-950">
            Análisis de Ciberseguridad:
            Caso Equifax
          </h2>

          <p className="text-lg mb-6 leading-relaxed">
            Este proyecto analiza uno de los incidentes de filtración
            de datos más importantes de la historia moderna,
            abordando aspectos relacionados con delitos informáticos,
            protección de datos personales y responsabilidad empresarial.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">

            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Contenido del informe
              </h3>

              <ul className="space-y-2 list-disc pl-5">
                <li>Ley 21.459</li>
                <li>Ley 19.628</li>
                <li>GDPR</li>
                <li>ISO 27001</li>
                <li>Derechos ARCO</li>
                <li>Fraude informático</li>
              </ul>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Objetivo
              </h3>

              <p className="leading-relaxed">
                Analizar el impacto del caso Equifax desde
                una perspectiva legal, tecnológica y organizacional,
                comprendiendo la importancia de la ciberseguridad
                y la protección de datos personales.
              </p>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App