
---

# `prompt.md`

```md
# Prompt usado para generar la integración con IA

Genera una solución funcional completa usando **Node.js + Express + MySQL** con **ES Modules** para una mini aplicación de catálogo de productos consumiendo **FakeStoreAPI**.

## Requerimientos generales

1. Usa este stack:
- Node.js
- Express
- MySQL con `mysql2/promise`
- Axios
- ES Modules (`import/export`)
- estructura modular con carpetas por responsabilidad

2. La estructura del proyecto debe ser esta:

```bash
src/
  config/
    server.js
  db/
    connection.js
  products/
    products.controller.js
    products.model.js
    products.routes.js
  cart/
    cart.controller.js
    cart.model.js
    cart.routes.js
index.js
sql/
  schema.sql
  q1.sql
  q2.sql
README.md
prompt.md
prompt_notes.md