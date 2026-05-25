<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';

  const { scrollTo }: { scrollTo: (id: string) => void } = $props();

  let menuOpen = $state(false);

  function go(id: string) {
    scrollTo(id);
    menuOpen = false;
  }
</script>

<nav>
  <div class="logo">Lumiélle</div>

  <div class="nav-links">
    <button onclick={() => go('hero')}>Home</button>
    <button onclick={() => go('catalog')}>Shop</button>
    <button onclick={() => go('featured')}>Collections</button>
    <button onclick={() => go('journal')}>Journal</button>
  </div>

  <div class="nav-right">
    <a href="/wishlist" class="icon-btn" aria-label="Wishlist">
      ♡{#if wishlist.ids.length > 0}<span class="badge badge-red">{wishlist.ids.length}</span>{/if}
    </a>
    <a href="/cart" class="cart-btn">
      Cart{#if cart.count > 0}<span class="badge badge-dark">{cart.count}</span>{/if}
    </a>
    <button
      class="hamburger"
      class:is-open={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</nav>

{#if menuOpen}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="mobile-overlay" onclick={() => (menuOpen = false)} onkeydown={() => {}}></div>
  <div class="mobile-drawer">
    <button onclick={() => go('hero')}>Home</button>
    <button onclick={() => go('catalog')}>Shop</button>
    <button onclick={() => go('featured')}>Collections</button>
    <button onclick={() => go('journal')}>Journal</button>
    <div class="drawer-actions">
      <a href="/wishlist" onclick={() => (menuOpen = false)} class="drawer-link">Wishlist ♡</a>
      <a href="/cart" onclick={() => (menuOpen = false)} class="drawer-cart">
        Cart{#if cart.count > 0} ({cart.count}){/if}
      </a>
    </div>
  </div>
{/if}

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5rem;
    position: relative;
    z-index: 10;
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

  .nav-links button {
    background: none;
    border: none;
    cursor: pointer;
    color: #555;
    font-size: 0.95rem;
    font-family: inherit;
    transition: opacity 0.25s ease;
    padding: 0;
  }

  .nav-links button:hover { opacity: 0.5; }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .icon-btn {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    background: white;
    border-radius: 999px;
    padding: 0.9rem 1.1rem;
    text-decoration: none;
    color: #2b2b2b;
    font-size: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.25s ease;
    line-height: 1;
  }

  .icon-btn:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); }

  .cart-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: none;
    background: white;
    padding: 0.9rem 1.3rem;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: #2b2b2b;
    font-size: 0.95rem;
    transition: box-shadow 0.25s ease;
  }

  .cart-btn:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); }

  .badge {
    border-radius: 999px;
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
    font-weight: 600;
    line-height: 1.4;
  }

  .badge-dark { background: #2b2b2b; color: white; }
  .badge-red { background: #c97b7b; color: white; }

  /* Hamburger — hidden on desktop */
  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: white;
    border: none;
    border-radius: 999px;
    padding: 0.75rem;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    width: 2.8rem;
    height: 2.8rem;
    align-items: center;
  }

  .hamburger span {
    display: block;
    width: 18px;
    height: 1.5px;
    background: #2b2b2b;
    border-radius: 2px;
    transition: transform 0.25s ease, opacity 0.25s ease;
    transform-origin: center;
  }

  .hamburger.is-open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger.is-open span:nth-child(2) { opacity: 0; }
  .hamburger.is-open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* Mobile overlay */
  .mobile-overlay {
    position: fixed;
    inset: 0;
    z-index: 8;
  }

  /* Mobile drawer */
  .mobile-drawer {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.97);
    backdrop-filter: blur(20px);
    border-radius: 1.5rem;
    padding: 1.5rem;
    z-index: 9;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
    margin-top: -4rem;
    animation: drawer-in 0.2s ease;
  }

  .mobile-drawer button {
    background: none;
    border: none;
    cursor: pointer;
    color: #2b2b2b;
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 500;
    padding: 0.85rem 0.5rem;
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    transition: opacity 0.2s;
  }

  .mobile-drawer button:last-of-type { border-bottom: none; }
  .mobile-drawer button:hover { opacity: 0.5; }

  .drawer-actions {
    display: flex;
    gap: 0.75rem;
    padding-top: 1rem;
  }

  .drawer-link, .drawer-cart {
    flex: 1;
    text-align: center;
    padding: 0.85rem 1rem;
    border-radius: 999px;
    text-decoration: none;
    font-size: 0.95rem;
    font-family: inherit;
  }

  .drawer-link {
    background: #f6f3ee;
    color: #2b2b2b;
  }

  .drawer-cart {
    background: #2b2b2b;
    color: white;
  }

  @keyframes drawer-in {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive */
  @media (max-width: 768px) {
    nav { padding-bottom: 3rem; }
    .nav-links { display: none; }
    .icon-btn { display: none; } /* cart/wishlist in drawer on mobile */
    .hamburger { display: flex; }

    /* Keep cart visible on mobile for quick access */
    .cart-btn { display: flex; }
  }

  @media (max-width: 480px) {
    nav { padding-bottom: 2.5rem; }
    .cart-btn { display: none; } /* only hamburger on very small */
  }
</style>
