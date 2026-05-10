<template>
  <div class="container">
    <div class="noise"></div>
    <div class="grid-overlay"></div>

    <main class="content">
      <div class="top-bar">
        <span class="tag">// CLASSIFIED</span>
        <span class="tag">SECTOR-07</span>
      </div>

      <div class="brand">
        <h1 class="title">SKYLONGE</h1>
        <div class="divider">
          <span class="line"></span>
          <span class="diamond">◆</span>
          <span class="line"></span>
        </div>
        <p class="subtitle">[ COMMING SOON ]</p>
      </div>

      <div class="contact">
        <p class="contact-label">— TRANSMISSION CHANNEL —</p>
        <a href="mailto:info@skylonge.com" class="email">
          info@skylonge.com
        </a>
      </div>

      <div class="bottom-bar">
        <span class="tag">STATUS: IN DEVELOPMENT</span>
        <span class="tag">© {{ new Date().getFullYear() }} SKYLONGE</span>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'SKYLONGE — Comming Soon',
  meta: [
    { name: 'description', content: 'SKYLONGE — Comming soon.' }
  ]
})
</script>

<style>
@font-face {
  font-family: 'BlackOpsOne';
  src: url('/fonts/BlackOpsOne-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Quantico';
  src: url('/fonts/Quantico-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Quantico';
  src: url('/fonts/Quantico-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Quantico';
  src: url('/fonts/Quantico-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Quantico';
  src: url('/fonts/Quantico-BoldItalic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #__nuxt {
  height: 100%;
}

body {
  font-family: 'Quantico', sans-serif;
  background-color: #0d0f0a;
  color: #c5cbb0;
  overflow: hidden;
}

.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background:
    radial-gradient(ellipse at center, #1a1d12 0%, #0a0b07 70%, #050604 100%);
  overflow: hidden;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(120, 140, 80, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(120, 140, 80, 0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

.noise {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
}

.top-bar,
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #7d8a5c;
}

.tag {
  font-family: 'Quantico', sans-serif;
  font-weight: 700;
  border: 1px solid rgba(125, 138, 92, 0.3);
  padding: 0.4rem 0.8rem;
}

.brand {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.title {
  font-family: 'BlackOpsOne', sans-serif;
  font-size: clamp(3rem, 12vw, 9rem);
  letter-spacing: 0.15em;
  color: #d8dec0;
  text-shadow:
    0 0 20px rgba(180, 200, 120, 0.15),
    2px 2px 0 rgba(0, 0, 0, 0.5);
  line-height: 1;
}

.divider {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: min(400px, 70%);
}

.line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, #7d8a5c, transparent);
}

.diamond {
  color: #9aa872;
  font-size: 0.8rem;
}

.subtitle {
  font-family: 'Quantico', sans-serif;
  font-weight: 700;
  font-size: clamp(0.9rem, 2vw, 1.25rem);
  letter-spacing: 0.5em;
  color: #9aa872;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.contact {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 1rem;
}

.contact-label {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  color: #7d8a5c;
}

.email {
  font-family: 'Quantico', sans-serif;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  letter-spacing: 0.15em;
  color: #d8dec0;
  text-decoration: none;
  border-bottom: 1px solid rgba(216, 222, 192, 0.3);
  padding-bottom: 0.25rem;
  transition: all 0.3s ease;
}

.email:hover {
  color: #ffffff;
  border-bottom-color: #ffffff;
  text-shadow: 0 0 10px rgba(216, 222, 192, 0.5);
}

@media (max-width: 600px) {
  .content {
    padding: 1.25rem;
  }
  .top-bar,
  .bottom-bar {
    font-size: 0.65rem;
  }
  .tag {
    padding: 0.3rem 0.6rem;
  }
}
</style>