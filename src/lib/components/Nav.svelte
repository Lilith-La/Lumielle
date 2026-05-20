<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';

  const { scrollTo }: { scrollTo: (id: string) => void } = $props();
</script>

<nav>
  <div class="logo">Lumiélle</div>

  <div class="nav-links">
    <button onclick={() => scrollTo('hero')}>Home</button>
    <button onclick={() => scrollTo('catalog')}>Shop</button>
    <button onclick={() => scrollTo('featured')}>Collections</button>
    <button onclick={() => scrollTo('journal')}>Journal</button>
  </div>

  <div class="nav-actions">
    <a href="/wishlist" class="wishlist-link" aria-label="Wishlist">
      ♡{#if wishlist.ids.length > 0}<span class="wishlist-badge">{wishlist.ids.length}</span>{/if}
    </a>
    <a href="/cart" class="cart-btn">
      Cart {#if cart.count > 0}<span class="cart-badge">{cart.count}</span>{/if}
    </a>
  </div>
</nav>

<style>
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

  .cart-btn {
    border: none;
    background: white;
    padding: 0.9rem 1.3rem;
    border-radius: 999px;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: #2b2b2b;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: box-shadow 0.25s ease;
  }

  .cart-btn:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); }

  .cart-badge {
    background: #2b2b2b;
    color: white;
    border-radius: 999px;
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
    font-weight: 600;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .wishlist-link {
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

  .wishlist-link:hover { box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12); }

  .wishlist-badge {
    background: #c97b7b;
    color: white;
    border-radius: 999px;
    font-size: 0.75rem;
    padding: 0.15rem 0.45rem;
    font-weight: 600;
    line-height: 1.4;
  }

  @media (max-width: 900px) {
    nav { flex-wrap: wrap; gap: 1rem; }
    .nav-links { width: 100%; justify-content: center; }
  }
</style>
