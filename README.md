# 🚀 Frontend Starter - Next.js + Tailwind

Este proyecto está diseñado con una arquitectura moderna y escalable, ideal para construir interfaces limpias, accesibles y fáciles de mantener. Basado en Next.js y TailwindCSS, incorpora las mejores prácticas de desarrollo frontend actual.

---

## 📐 Arquitectura de Software

### 🔧 Component-Based Architecture (Arquitectura basada en componentes)

La **Arquitectura Basada en Componentes (CBA)** es un enfoque de desarrollo que organiza el software en **componentes autónomos y reutilizables**. Cada componente encapsula una funcionalidad específica y se comunica con otros mediante interfaces bien definidas.

#### 🧩 Características principales

- **Componentes independientes:** encapsulan funciones concretas.
- **Reutilización:** pueden usarse en distintas partes o proyectos.
- **Autonomía:** se integran fácilmente sin depender de otros.
- **Flexibilidad:** permiten agregar o modificar partes sin romper el sistema.
- **Modularidad:** facilita el mantenimiento y escalabilidad.

#### ✅ Beneficios

- **Mantenimiento sencillo:** se actualiza una parte sin afectar todo el sistema.
- **Reducción de costos y tiempo:** gracias a la reutilización.
- **Adaptabilidad:** permite incorporar nuevos requisitos o tecnologías.
- **Trabajo en equipo:** los equipos pueden trabajar en componentes separados en paralelo.

---

### 🧱 Atomic Design

**Atomic Design** es una metodología para construir interfaces de forma modular, dividiéndolas en niveles jerárquicos que van desde los elementos más simples hasta estructuras completas. Fue propuesta por Brad Frost y es ampliamente utilizada en sistemas de diseño modernos.

#### 🧬 Niveles de Atomic Design

1. **Átomos (Atoms):**  
   Son los elementos más básicos de la interfaz.<br>
   Ejemplos: botones, inputs, etiquetas, iconos.

2. **Moléculas (Molecules):**  
   Combinaciones simples de átomos que forman una unidad funcional.
   <br>
   Ejemplos: un campo de búsqueda con un input y un botón.

3. **Organismos (Organisms):**  
   Grupos complejos de moléculas y/o átomos que forman secciones independientes. Lógica de negocio en hooks.
   <br>
   Ejemplos: una barra de navegación o una tarjeta de usuario.

4. **Templates:**  
   Estructuras que definen el layout utilizando organismos, sin contenido real. Poca lógica de negocio.
   <br>
   Ejemplo: la estructura de una página sin datos.

5. **Pages:**  
   Instancias reales del template con contenido específico. Toda lógica de negocio.
   <br>
   Ejemplo: página de inicio con datos cargados.

#### 🧩 Características principales

- **Jerarquía estructurada:** divide la UI en 5 niveles: Átomos, Moléculas, Organismos, Templates y Pages.
- **Modularidad:** cada componente puede combinarse con otros para formar estructuras más complejas.
- **Reutilización:** fomenta el uso de componentes repetibles para reducir redundancia.
- **Escalabilidad visual:** permite construir interfaces complejas sin perder orden.
- **Enfoque en el diseño sistemático:** ideal para design systems y librerías de componentes.

#### ✅ Beneficios

- **Consistencia visual:** asegura una experiencia uniforme en toda la interfaz.
- **Mantenimiento eficiente:** facilita localizar y actualizar partes específicas de la UI.
- **Colaboración fluida:** diseñadores y desarrolladores trabajan con una misma estructura mental.
- **Productividad:** acelera el desarrollo mediante la reutilización de componentes.
- **Documentación clara:** los niveles facilitan la organización de librerías UI y guías de estilo.

---

## 🧱 Stack Técnico

| Área                | Herramienta/Librería        | Propósito                                    |
| ------------------- | --------------------------- | -------------------------------------------- |
| Framework principal | `next`                      | Routing, SSR/SSG, estructura de proyecto     |
| Estilos             | `tailwindcss` + `shadcn/ui` | Estilado rápido, consistente y accesible     |
| Componentes UI      | `shadcn/ui`, `react-icons`  | Componentes accesibles y visuales            |
| Formularios         | `react-hook-form`, `zod`    | Manejo y validación de formularios           |
| Estado global       | `zustand`                   | Manejo de estado simple y escalable          |
| Peticiones HTTP     | `axios`                     | Llamadas a APIs                              |
| Utilidades          | `clsx`, `date-fns`          | Helpers para clases condicionales y fechas   |
| Animaciones         | `framer-motion`             | Animaciones suaves e integradas con Tailwind |
| Tipografía/Icons    | `react-icons`               | Iconografía moderna y personalizable         |

---

## 📁 Estructura de Carpetas

```bash
src/
├── components/            # Componentes atómicos y reutilizables (Atomic Design)
│   ├── atoms/
│   │   ├── Button/
│   │   └── Logo/
│   ├── molecules/
│   │   └── CallToAction/
│   ├── organisms/
│   │   └── Hero/
│   ├── templates/
│   │   └── MainTemplate/
│   └── index.ts
├── app/                   # Rutas del proyecto (Next.js)
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── store/                 # Estado global (Zustand)
├── services/              # Llamadas a APIs
├── types/                 # Tipos y modelos compartidos (TypeScript)
├── utils/                 # Funciones reutilizables/utilidades
├── hooks/                 # Hooks personalizados
└── constants/             # Configuraciones de entorno o constantes
```

---

## ✅ Buenas Prácticas

#### 🧑‍💻 Estilo de Código

- `camelCase` para variables y funciones.
- `PascalCase` para nombres de componentes.
- `PascalCase` iniciando con `I` para nombres de typos/interfaces.
- Siempre usar TypeScript y evitar `any`.
- Siempre usamos `Arrow Functions`.

#### ⚛️ Componentes

- Mantener componentes pequeños y reutilizables.
- Evitar `use client` si no es necesario.
- Priorizar Server Components cuando sea posible.
- Solo usamos componentes funcionales.
- No usar `export default`.

#### 🔁 Datos y APIs

- Usar `getServerSideProps`, `getStaticProps` en Server Components para SSR.
- En el cliente `useEffect` para fetch.
- Centralizar las llamadas a api en `/services`.
- Programación defensiva:
  - Capturar siempre los errores de las promesas.
  - Nunca dejar una promesa sin `.catch` o bloque `try/catch`.
  - Evitar errores como `UnhandledPromiseRejectionWarning`.

#### 📦 Manejo de Estado

- Estado global: usar `Zustand`.
- Estado local: usar `useState`.
- Evitar prop drilling excesivo.

#### 🎨 Estilos

- Usar **Tailwind CSS** como base de estilos.
- Integrar **ShadCN/UI** para componentes accesibles y estilizados.
- No sobrescribir estilos base innecesariamente.

## Getting Started

First, run the development server:

```bash
bash run-dev.sh
```
