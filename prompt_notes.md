
---

# `prompt_notes.md`

```md
# Prompt Notes

## Objetivo

Documentar cómo se utilizó IA para acelerar la construcción del proyecto y qué ajustes manuales fueron necesarios para dejarlo funcional.

---

## 1. Qué partes fueron generadas correctamente

La IA ayudó correctamente en los siguientes puntos:

- proponer la lógica de sincronización desde FakeStoreAPI,
- sugerir el uso de `mysql2/promise`,

---

## 2. Ajustes manuales realizados

Para dejar el proyecto funcional se realizaron estos ajustes manuales:

1. Se adaptó el proyecto a **ES Modules** usando `"type": "module"` en `package.json`.
2. Se verificó y corrigió la conexión a MySQL usando `mysql2/promise`.
3. Se ajustó el nombre de campos provenientes de FakeStoreAPI:
   - `title` de la API se guardó como `name` en MySQL.
4. Se mantuvo una paginación simple usando los parámetros:
   - `limite`
   - `desde`
5. Se probó varias veces el endpoint `/sync` para confirmar que no se generaran duplicados.
6. Se ejecutaron manualmente `q1.sql` y `q2.sql` en MySQL Workbench para validar resultados.
7. Se validó la lógica del carrito agregando productos, consultando el contenido y eliminando items.

---

## 3. Problemas encontrados en la salida generada por IA

Durante el proceso hubo varios puntos que requirieron corrección manual:

- algunas propuestas iniciales mezclaban estilos `require()` con `import/export`,
- algunas versiones usaban conexión simple en lugar de pool,

---

## 4. Cómo se corrigieron esos problemas

Se corrigieron de la siguiente manera:

- se unificó todo el proyecto a ES Modules,
- se dejó la conexión a BD mediante `mysql2/promise`,

---

## 5. Resultado final obtenido

El proyecto final logró:

- conexión funcional a MySQL,
- sincronización de productos desde FakeStoreAPI,
- persistencia local de productos,
- prevención de duplicados mediante upsert,
- listado con paginación,
- detalle por id,
- consultas SQL adicionales pedidas por la prueba,
- módulo de carrito persistido en MySQL,
- documentación mínima para ejecutar desde cero.

---

## 6. Observación final

La solución final quedó implementada como backend funcional y cubre la Parte A del catálogo y una implementación mínima de la Parte B mediante endpoints de carrito y persistencia en base de datos.