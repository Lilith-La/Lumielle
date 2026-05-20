<script lang="ts">
  import { products } from '$lib/data/products';
  import type { Product } from '$lib/data/products';
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';

  const wishlistProducts = $derived(products.filter((p) => wishlist.has(p.id)));

  let addedId = $state<number | null>(null);

  function handleAdd(product: Product) {
    cart.add(product);
    addedId = product.id;
    setTimeout(() => { addedId = null; }, 1200);
  }
</script>

<svelte:head>
  <title>Wishlist — Lumiélle</title>
</svelte:head>

<div class="page">
  <nav class="top-nav">
    <a href="/" class="logo">Lumiélle</a>
    <a href="/" class="back-link">← Back to shop</a>
  </nav>

  <header class="page-header">
    <p class="small-label">Saved Items</p>
    <h1>Your Wishlist</h1>
  </header>

  {#if wishlistProducts.length === 0}
    <div class="empty-state">
      <p class="empty-icon">♡</p>
      <p class="empty-message">Your wishlist is empty.</p>
      <a href="/" class="discover-btn">Discover products</a>
    </div>
  {:else}
    <div class="count-label">{wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'}</div>
    <div class="wishlist-grid">
      {#each wishlistProducts as product}
        <div class="product-card">
          <div class="image-wrap">
            <img src={product.image} alt={product.name} />
          </div>
          <div class="card-content">
            <p class="category">{product.category}</p>
            <h3>{product.name}</h3>
            <p class="description">{product.description}</p>
            <p class="price">${product.price}</p>
            <div class="card-actions">
              <button
                class="add-btn"
                class:added={addedId === product.id}
                onclick={() => handleAdd(product)}
              >
                {addedId === product.id ? '✓ Added' : 'Add to cart'}
              </button>
              <button
                class="remove-btn"
                onclick={() => wishlist.toggle(product.id)}
                aria-label="Remove from wishlist"
              >
                Remove ♥
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .page {
    min-height: 100vh;
    background: #f6f3ee;
    color: #2b2b2b;
    font-family: Inter, sans-serif;
    padding: 2rem 7% 6rem;
  }

  /* Nav */
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4rem;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    color: #2b2b2b;
    text-decoration: none;
  }

  .back-link {
    font-size: 0.9rem;
    color: #9c8d81;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .back-link:hover { opacity: 0.65; }

  /* Header */
  .page-header {
    margin-bottom: 3rem;
  }

  .small-label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
    margin: 0 0 0.8rem;
  }

  h1 {
    font-size: 3.5rem;
    letter-spacing: -0.04em;
    margin: 0;
    line-height: 1.05;
  }

  /* Count */
  .count-label {
    font-size: 0.85rem;
    color: #9c8d81;
    margin-bottom: 2rem;
    letter-spacing: 0.05em;
  }

  /* Empty state */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 2rem;
    text-align: center;
  }

  .empty-icon {
    font-size: 3.5rem;
    color: #c9b6a6;
    margin: 0 0 1rem;
    line-height: 1;
  }

  .empty-message {
    font-size: 1.2rem;
    color: #888;
    margin: 0 0 2rem;
  }

  .discover-btn {
    display: inline-block;
    background: #2b2b2b;
    color: white;
    padding: 0.9rem 2rem;
    border-radius: 999px;
    text-decoration: none;
    font-size: 0.95rem;
    font-family: inherit;
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .discover-btn:hover {
    background: #1a1a1a;
    transform: translateY(-1px);
  }

  /* Grid */
  .wishlist-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .product-card {
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.07);
  }

  .image-wrap img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
  }

  .card-content {
    padding: 1.5rem;
  }

  .category {
    color: #9c8d81;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 0.5rem;
  }

  h3 {
    font-size: 1.4rem;
    margin: 0 0 0.4rem;
    letter-spacing: -0.02em;
  }

  .description {
    color: #888;
    font-size: 0.875rem;
    line-height: 1.6;
    margin: 0 0 0.75rem;
  }

  .price {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 0 1.25rem;
    color: #2b2b2b;
  }

  .card-actions {
    display: flex;
    gap: 0.6rem;
  }

  .add-btn {
    flex: 1;
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.875rem;
    font-family: inherit;
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .add-btn:hover { background: #1a1a1a; }

  .add-btn.added {
    background: #7a9e7e;
    transform: scale(0.97);
  }

  .remove-btn {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    color: #c97b7b;
    padding: 0.8rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.875rem;
    font-family: inherit;
    transition: all 0.2s ease;
    white-space: nowrap;
  }

  .remove-btn:hover {
    border-color: #c97b7b;
    background: #fdf5f5;
  }

  @media (max-width: 900px) {
    h1 { font-size: 2.5rem; }
    .page { padding: 2rem 5% 6rem; }
    .top-nav { padding-bottom: 3rem; }
  }

  @media (max-width: 600px) {
    h1 { font-size: 2rem; }
    .card-actions { flex-direction: column; }
  }
</style>
