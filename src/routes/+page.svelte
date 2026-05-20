<script lang="ts">
  const featured = [
    {
      name: "Velvet Serum",
      category: "Hydration",
      price: "$48",
    },

    {
      name: "Moon Cream",
      category: "Night Repair",
      price: "$62",
    },

    {
      name: "Lumière Oil",
      category: "Glow Essence",
      price: "$54",
    },
  ];
</script>

<section class="hero">
  <div class="noise"></div>

  <nav>
    <div class="logo">Lumiélle</div>

    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/">Shop</a>
      <a href="/">Collections</a>
      <a href="/">Journal</a>
    </div>

    <button class="cart-btn"> Cart (0) </button>
  </nav>

  <div class="hero-grid">
    <div class="hero-content">
      <p class="label">Modern skincare rituals</p>

      <h1>Luxury beauty crafted for quiet moments.</h1>

      <p class="subtitle">
        Thoughtfully formulated skincare inspired by softness, calm evenings and
        timeless rituals.
      </p>

      <div class="hero-actions">
        <button class="primary"> Shop Collection </button>

        <button class="secondary"> Explore Rituals </button>
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

<section class="featured">
  <div class="section-top">
    <div>
      <p class="small-label">Featured Collection</p>

      <h2>Designed for slow beauty rituals.</h2>
    </div>

    <button class="view-all"> View all </button>
  </div>

  <div class="products">
    {#each featured as item}
      <div class="card">
        <div class="image-wrap">
          <img
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop"
            alt={item.name}
          />
        </div>

        <div class="card-content">
          <div>
            <p class="category">
              {item.category}
            </p>

            <h3>
              {item.name}
            </h3>
          </div>

          <div class="bottom-row">
            <span>
              {item.price}
            </span>

            <button> Add </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  :global(body) {
    margin: 0;
    background: #f6f3ee;
    color: #2b2b2b;
    font-family: Inter, sans-serif;
  }

  .hero {
    min-height: 100vh;
    padding: 2rem 7% 6rem;
    position: relative;
    overflow: hidden;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5rem;
    position: relative;
    z-index: 2;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links a {
    text-decoration: none;
    color: #555;
    font-size: 0.95rem;
    transition: opacity 0.25s ease;
  }

  .nav-links a:hover {
    opacity: 0.5;
  }

  .cart-btn {
    border: none;
    background: white;
    padding: 0.9rem 1.3rem;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-content {
    position: relative;
    z-index: 2;
  }

  .label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: clamp(4rem, 8vw, 7rem);
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
  }

  .secondary {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: rgba(255, 255, 255, 0.6);
    padding: 1rem 1.6rem;
    border-radius: 999px;
    cursor: pointer;
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

  .featured {
    padding: 2rem 7% 8rem;
  }

  .section-top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 3rem;
  }

  .small-label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 3rem;
    line-height: 1.05;
    max-width: 600px;
    letter-spacing: -0.04em;
  }

  .view-all {
    border: none;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    color: #666;
  }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .card {
    background: rgba(255, 255, 255, 0.65);
    border-radius: 2rem;
    overflow: hidden;
    backdrop-filter: blur(20px);
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  }

  .image-wrap img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  .card-content {
    padding: 1.5rem;
  }

  .category {
    color: #9c8d81;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  h3 {
    margin-top: 0.6rem;
    font-size: 1.5rem;
  }

  .bottom-row {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-row span {
    font-size: 1.1rem;
    font-weight: 600;
  }

  .bottom-row button {
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    cursor: pointer;
  }

  .noise {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
  }

  @media (max-width: 900px) {
    .hero-grid {
      grid-template-columns: 1fr;
    }

    .hero-visual img {
      height: 500px;
    }

    nav {
      flex-wrap: wrap;
      gap: 1rem;
    }

    .nav-links {
      width: 100%;
      justify-content: center;
    }

    .section-top {
      flex-direction: column;
      align-items: start;
      gap: 1rem;
    }
  }
</style>
