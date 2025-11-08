# 🚀 SoftwareLive +506 - Web Estática Optimizada

Este es el repositorio de la página web estática de **SoftwareLive +506**, una empresa dedicada al desarrollo de software y soluciones digitales en Costa Rica.

El proyecto ha sido optimizado para la eficiencia y el mantenimiento, empleando técnicas de desarrollo web moderno para la carga de componentes y la reutilización de código.

---

## ✨ Características y Optimización (Principio DRY)

El objetivo principal de esta estructura es **eliminar la repetición de código** y simplificar el mantenimiento del sitio web sin usar lenguajes de servidor.

### 1. Eliminación de Código Repetido
* **Problema:** Los bloques de código del **Header/Navegación** y el **Footer** se repetían en los cuatro archivos HTML.
* **Solución:** Estos bloques fueron extraídos a archivos únicos: `header-component.html` y `footer-component.html`.

### 2. Carga Dinámica de Componentes
* El archivo **`js/main.js`** utiliza **JavaScript (AJAX/XMLHttpRequest)** para leer el contenido de los archivos de componente e inyectarlo en los marcadores (`<div id="header-placeholder">` y `<div id="footer-placeholder">`) de cada página.
* **Beneficio:** Cualquier actualización en la navegación o el pie de página solo requiere editar **un único archivo**, aplicando el cambio automáticamente a todo el sitio.

### 3. Rendimiento
* Todos los *scripts* de JavaScript (incluyendo librerías y `main.js`) se cargan justo **antes del cierre de la etiqueta `</body>`**, mejorando la **velocidad de carga percibida**.

---

## 📁 Estructura del Repositorio

La estructura del proyecto es la siguiente, organizada por funcionalidad para mayor claridad:
* **Carpetas de Recursos:**
    * `css/` — Hojas de estilo (Bootstrap, estilos custom).
    * `fonts/` — Estilos de letras (Font Awesome).
    * `img/` — Imagenes utilizadas en la pagina.
    * `js/`— Lógica principal (carga de componentes, navegación, scroll, Jquery).
    
* **Archivos de Componentes Reutilizables (Root):**
    * `header-component.html` — ⚙️ **COMPONENTE:** Contenido del Encabezado/Navegación.
    * `footer-component.html` — ⚙️ **COMPONENTE:** Contenido del Pie de Página.

* **Archivos de Página (Root):**
    * `index.html` — Página de Inicio (Home).
    * `Nosotros.html` — Página "Acerca de Nosotros".
    * `Productos.html` — Página de servicios y productos.
    * `Contacto.html` — Página de formulario de contacto.
---

## ⚠️ Cómo Ejecutar y Visualizar el Proyecto

**IMPORTANTE:** Debido a que el código de carga de componentes usa AJAX, se requiere un **servidor web local** para que funcione correctamente. El navegador bloquea las solicitudes AJAX cuando se abre el archivo directamente desde el disco duro (`file:///...`).

### Solución: Usar un Servidor Web Local
1.  **Opción Recomendada (VS Code):**
    * Instale la extensión **Live Server** en Visual Studio Code.
    * Haga clic derecho en `index.html` y seleccione **"Open with Live Server"**.
    * El sitio se abrirá en una dirección `http://127.0.0.1:5500/...` y el código funcionará sin problemas.
2.  **Otras Opciones:**
    * Utilice servidores como XAMPP, MAMP o WAMP.
