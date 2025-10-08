# 🧪 Proyecto de Automatización E2E con Playwright y Cucumber

Este proyecto implementa pruebas automatizadas **End-to-End (E2E)** utilizando **Playwright** y **Cucumber.js** con lenguaje **JavaScript**.  
El objetivo es validar funcionalidades críticas de una aplicación web mediante escenarios escritos en **Gherkin** que permiten una lectura clara y colaborativa entre equipos técnicos y funcionales.

---

## 📁 Estructura del Proyecto

TAE1PlaywrightCucumber_AskOmDch/
│
├── features/ # Escenarios en Gherkin y definición de pasos
│ ├── step_definitions/ # Step Definitions (implementaciones de los pasos)
│ │ ├── busquedaProducto.steps.js
│ │ └── login.steps.js
│ │
│ ├── support/ # Hooks y configuraciones de Cucumber
│ │ └── hooks.js
│ │
│ ├── busquedaProducto.feature # Escenario de búsqueda de producto
│ └── login.feature # Escenario de login
│
├── pages/ # Clases del patrón Page Object Model (POM)
│ ├── LoginPage.js
│ └── StorePage.js
│
├── reports/ # Reportes generados después de ejecutar las pruebas
│ ├── cucumber-report.html
│ └── cucumber-report.json
│
├── screenshots/ # Evidencias visuales de las pruebas
│ └── Password_invalido.png
│
├── test-results/ # Resultados técnicos de ejecución
│ └── .last-run.json
│
├── .gitignore # Archivos y carpetas ignorados por Git
├── cucumber.js # Configuración principal de Cucumber
├── package.json # Dependencias y scripts del proyecto
├── package-lock.json
├── playwright.config.js # Configuración de Playwright
└── report.js # Script auxiliar para generación de reportes



---

## ⚙️ Instalación y Configuración

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/VicenteSK/TAE1PlaywrightCucumber_AskOmDch.git

2️⃣ Instalar dependencias

Dentro de la carpeta del proyecto, ejecutar:

npm install

Esto instalará las dependencias necesarias:

@playwright/test → Motor de automatización de navegadores.

@cucumber/cucumber → Framework BDD para definir escenarios en Gherkin.


Este comando ejecuta todos los escenarios definidos en los archivos .feature, utilizando Cucumber.js y Playwright.

📊 Reporte de Resultados
🧾 Generar y abrir el reporte HTML

Después de ejecutar las pruebas, puedes generar y visualizar un reporte interactivo en formato HTML:


npm run test:report
npm run report:open

npm run test:report → Genera el reporte HTML dentro de la carpeta reports/.

npm run report:open → Abre automáticamente el reporte en el navegador por defecto (reports/cucumber-report.html).

Ejemplo de salida esperada:

reports/
└── cucumber-report.html

🧱 Tecnologías Utilizadas
Herramienta	Descripción
Playwright	Automatización de navegadores modernos (Chromium, Firefox, WebKit).
Cucumber.js	Framework BDD que permite escribir escenarios en lenguaje natural.
Node.js / npm	Entorno de ejecución y gestor de dependencias.
JavaScript (ES6)	Lenguaje base del proyecto.

🧩 Buenas Prácticas Implementadas

Patrón Page Object Model (POM) para mejorar el mantenimiento del código.

Separación clara entre escenarios (features) y lógica de automatización (steps/pages).

Reporte en formato HTML sin dependencias externas (Allure eliminado).

Uso de Git y GitHub para control de versiones y portafolio profesional.

✨ Autor

Vicente Valenzuela

https://www.linkedin.com/in/vicente-valenzuela-cortes/






