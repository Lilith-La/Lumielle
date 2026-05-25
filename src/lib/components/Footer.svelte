<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <p class="logo">Lumiélle</p>
      <p class="tagline">Luxury beauty crafted<br />for quiet moments.</p>
      <div class="social">
        <a href="/" aria-label="Instagram">✦</a>
        <a href="/" aria-label="Pinterest">✦</a>
        <a href="/" aria-label="TikTok">✦</a>
      </div>
    </div>

    <div class="footer-cols">
      <div class="col">
        <p class="col-title">Shop</p>
        <ul>
          <li>Serums</li>
          <li>Moisturizers</li>
          <li>Face Oils</li>
          <li>Cleansers</li>
          <li>Toners &amp; Masks</li>
        </ul>
      </div>
      <div class="col">
        <p class="col-title">Journal</p>
        <ul>
          <li>Skincare Rituals</li>
          <li>Ingredients</li>
          <li>Slow Beauty</li>
          <li>Skin Types</li>
        </ul>
      </div>
      <div class="col">
        <p class="col-title">Company</p>
        <ul>
          <li>Our Story</li>
          <li>Sustainability</li>
          <li>Stockists</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2026 Lumiélle. All rights reserved.</p>
    <p class="made-with">Made with care for slow beauty rituals.</p>
  </div>
</footer>

<style>
  footer {
    background: #1e1c1a;
    color: rgba(255, 255, 255, 0.85);
    padding: 5rem 7% 2.5rem;
    font-family: Inter, sans-serif;
  }

  .footer-inner {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    padding-bottom: 4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .logo {
    font-size: 1.6rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    color: white;
    margin: 0 0 0.75rem;
  }

  .tagline {
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.9rem;
    line-height: 1.7;
    margin: 0 0 1.75rem;
  }

  .social {
    display: flex;
    gap: 0.75rem;
  }

  .social a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    font-size: 0.7rem;
    transition: border-color 0.2s, color 0.2s;
  }

  .social a:hover {
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
  }

  .footer-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .col-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.35);
    margin: 0 0 1.25rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  li {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.55);
    cursor: default;
    transition: color 0.2s;
  }

  li:hover { color: rgba(255, 255, 255, 0.9); }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.3);
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .footer-bottom p { margin: 0; }

  @media (max-width: 900px) {
    .footer-inner {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 600px) {
    footer { padding: 4rem 5% 2rem; }
    .footer-cols { grid-template-columns: 1fr 1fr; gap: 2rem; }
    .footer-bottom { flex-direction: column; align-items: flex-start; }
    .made-with { display: none; }
  }

  @media (max-width: 380px) {
    .footer-cols { grid-template-columns: 1fr; }
  }
</style>
