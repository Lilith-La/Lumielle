<script lang="ts">
  import Nav from './Nav.svelte';

  const { scrollTo }: { scrollTo: (id: string) => void } = $props();
</script>

<section class="hero" id="hero">
  <div class="noise"></div>

  <Nav {scrollTo} />

  <div class="hero-grid">
    <div class="hero-content">
      <p class="label">Modern skincare rituals</p>
      <h1>Luxury beauty crafted for quiet moments.</h1>
      <p class="subtitle">
        Thoughtfully formulated skincare inspired by softness, calm evenings and
        timeless rituals.
      </p>
      <div class="hero-actions">
        <button class="primary" onclick={() => scrollTo('catalog')}>Shop Collection</button>
        <button class="secondary" onclick={() => scrollTo('journal')}>Explore Rituals</button>
      </div>
    </div>

    <div class="hero-visual">
      <div class="product-glow"></div>
      <img
        src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop"
        alt="Luxury skincare"
      />
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    padding: 2rem 7% 6rem;
    position: relative;
    overflow: hidden;
  }

  .noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content { position: relative; z-index: 2; }

  .label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 6rem);
    line-height: 0.95;
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.06em;
    max-width: 700px;
  }

  .subtitle {
    margin-top: 2rem;
    max-width: 520px;
    color: #666;
    line-height: 1.8;
    font-size: 1.05rem;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
  }

  .primary {
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 1rem 1.6rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.95rem;
    font-family: inherit;
  }

  .secondary {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.6);
    padding: 1rem 1.6rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: inherit;
  }

  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero-visual img {
    width: 100%;
    max-width: 520px;
    height: 720px;
    object-fit: cover;
    border-radius: 2rem;
    position: relative;
    z-index: 2;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
  }

  .product-glow {
    position: absolute;
    width: 420px;
    height: 420px;
    background: rgba(201, 182, 166, 0.3);
    filter: blur(90px);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 900px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-visual img { height: 500px; }
    h1 { font-size: clamp(2.5rem, 10vw, 5rem); }
  }
</style>
