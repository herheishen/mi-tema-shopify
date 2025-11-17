# CHANGELOG

## Unreleased — 2025-11-17

This changelog lists the Ultra Pro 2025 enhancements applied to the theme.

### 6db2123 — feat: Mejoras ultra pro 2025 en `contact-form.liquid`
- Formulario contacto mejorado con glassmorphism inputs, 3 animaciones CSS (form-slide-in, success-glow, shake), validación client-side en tiempo real.
- Clase JS `ContactFormUltraPro`: validación de fields (email/name requeridos, email regex), visualización de errores con animación shake, accesibilidad completa.
- Estados: loading button (spinner), aria-labels en inputs, aria-invalid para errores, aria-describedby linked a error messages, role="status"/"alert" en status messages.
- Success/error messages con estilos inline (fondo, borde, color contextuales), animación success-glow (2s), dark mode y reduced-motion support.
- Analytics: gtag events `contact_form_submit` y `contact_form_error` con field_count tracking.

### c0d076a — feat: Mejoras ultra pro 2025 en `collection-list.liquid`
- Grid de colecciones destacadas con glassmorphism cards (backdrop-filter blur 6px, rgba 0.8, border soft).
- Reveal animations mediante IntersectionObserver con staggered delays (data-index), hover micro-interactions (translateY -6px, enhanced shadow).
- Slider tracking con analytics en prev/next/items visibles, data-section-id para scoping, role="listitem" con aria-label.
- Dark mode y reduced-motion support, focus rings (2px outline), transiciones smooth.

### 9c0c1ba — feat: Extras ultra pro en `collapsible-content.liquid`
- Expand All/Collapse All buttons con animación coordenada, deep-linking via URL hash (#Details-{id}), detecta hash al cargar y expande automáticamente.
- Live region (aria-live="polite") para anuncios de screen readers, eventos analytics (gtag): `collapsible_expand_all`, `collapsible_collapse_all`, `collapsible_toggle`.
- MutationObserver fallback para navegadores sin `requestAnimationFrame` smooth scrolling.

### adfd7be — feat: Mejoras ultra pro 2025 en `collapsible-content.liquid`
- Acordeón/FAQ con open/close animations smooth (height animado via requestAnimationFrame), keyboard nav (ArrowUp/Down/Home/End), aria-expanded/aria-controls.
- Reduced-motion y dark mode support, transiciones smooth, fallback para navegadores antiguos.

### e8e4064 — feat: Mejoras ultra pro 2025 en `collage.liquid`
- Glassmorphism card styles, responsive grid y hover micro-interactions.
- Reveal animations mediante `IntersectionObserver` con soporte `prefers-reduced-motion`.
- Accesibilidad: `role="list"`, `role="listitem"`, `aria-roledescription`, focus styles y navegación por teclado.
- Deferred media analytics hook (`gtag`) y manejo seguro del modal.
- Optimización de `image_tag` sizes y lazy-loading preservado.

### c1dfa51 — feat: Mejoras ultra pro 2025 en `cart-notification-product.liquid`
- Plantilla producto en notificación del carrito con 6 animaciones, glassmorphism (backdrop-filter blur 8px).
- Animaciones de entrada, zoom de imagen en hover, badge de selling-plan con SVG.
- Atributos `data-` para tracking (`product-key`, `product-id`, `quantity`).
- Clase JS `CartNotificationProductUltraPro` con listeners `cart:item-added`, `cart:item-removed`, `cart:updated`.
- Integración con `gtag` y custom events para product notifications.

### 29ca8d1 — feat: Mejoras ultra pro 2025 en `cart-notification-button.liquid`
- 6 animaciones CSS (pulse, slide, shimmer, ripple, glow), efecto ripple dinámico con JS.
- Badge contador accesible (`aria-live="polite"`), estados loading/success, soporte dark mode, reduced motion y high contrast.
- Clase JS `CartNotificationButtonUltraPro` con MutationObserver y tracking `gtag`.

### 27e520c — feat: Mejoras ultra pro 2025 en `cart-live-region-text.liquid`
- Animaciones de precio y contador (slide-in, number-roll), región viva ARIA (`role="status"`, `aria-live="polite"`).
- MutationObserver para cambios en tiempo real y eventos de analytics (cart_total_change).

### 167d1dc — feat: Mejoras ultra pro 2025 en `cart-icon-bubble.liquid`
- Badge animado (pulse/bounce/glow), MutationObserver, haptic feedback para móviles (`navigator.vibrate`), eventos personalizados.

### efa56f1 — feat: Mejoras ultra pro 2025 en `snippets/cart-drawer.liquid`
- Drawer con glassmorphism (backdrop-filter), animaciones del drawer y items, keyboard shortcuts (Escape, Ctrl+Enter), MutationObserver y tracking.

### de5471a — feat: Mejoras ultra pro 2025 en `bulk-quick-order-list.liquid`
- Diseño glassmorphism, inputs modernos, accesibilidad, ripple effects, atajos de teclado, print styles.

### a49e3c2 — feat: Mejoras ultra pro 2025 en `image-banner.liquid`
- Parallax, blur options, lazy loading, touch gestures, ripple CTA, accessibility.

### 15eab6c — feat: Mejoras ultra pro 2025 en `announcement-bar.liquid`
- Swipe gestures, keyboard nav, IntersectionObserver, animations y live region.

---

## Validaciones
- `shopify theme check --path .` → 166 files inspected, 0 offenses.
- Todos los commits se han pushado a `origin/main`.

## Impacto & Notas de QA
- Visual: nuevos estilos glassmorphism y sombras, revisar en light/dark mode y en navegadores con `backdrop-filter` limitado (fallbacks aplicados).
- Accesibilidad: verificar lectura por lectores de pantalla (headings, live regions, aria-labels).
- Performance: imágenes con `image_tag` optimizadas; comprobar Lighthouse (performance / accessibility).
- Mobile: verificar touch targets ≥44px, haptics en dispositivos compatibles.
- Analytics: revisar eventos `gtag` en entorno de staging antes de producción.
- Fallbacks: `prefers-reduced-motion` y sin `IntersectionObserver` (revelado inmediato) cubiertos.

## QA Checklist
- [ ] Revisar visual en Chrome/Firefox/Safari (desktop & mobile).
- [ ] Comprobar dark mode y high contrast.
- [ ] Ejecutar `shopify theme check --path .` (ya pasado).
- [ ] Probar flujos de carrito: añadir, eliminar, actualizar cantidades — confirmar animaciones y eventos.
- [ ] Validar que los iframes de video se cargan solo al abrir modal.
- [ ] Revisar analytics en la consola de GA/GTAG (events: `cart_item_added`, `product_added_to_cart`, `collage_media_open`, etc).

## Comandos útiles
- Ver commits recientes:
```powershell
git log --oneline --decorate -n 20
```
- Ejecutar theme check:
```powershell
shopify theme check --path .
```
- Para commitear este changelog localmente (PowerShell):
```powershell
git add CHANGELOG.md
git commit -m "chore: Add CHANGELOG.md (Ultra Pro 2025 updates 2025-11-17)"
git push origin main
```
