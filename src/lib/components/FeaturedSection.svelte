<script lang="ts">
  import type { Product } from '$lib/data/products';
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';
  import ProductModal from '$lib/components/ProductModal.svelte';

  const { products, scrollTo }: {
    products: Product[];
    scrollTo: (id: string) => void;
  } = $props();

  let addedId = $state<number | null>(null);
  let activeProduct = $state<Product | null>(null);

  function handleAdd(e: MouseEvent, product: Product) {
    e.stopPropagation();
    cart.add(product);
    addedId = product.id;
    setTimeout(() => { addedId = null; }, 1200);
  }

  function handleWishlist(e: MouseEvent, id: number) {
    e.stopPropagation();
    wishlist.toggle(id);
  }
</script>

<section class="featured" id="featured">
  <div class="section-top">
    <div>
      <p class="small-label">Featured Collection</p>
      <h2>Designed for slow beauty rituals.</h2>
    </div>
    <button class="view-all" onclick={() => scrollTo('catalog')}>View all →</button>
  </div>

  <div class="products">
    {#each products as item}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="card"
        onclick={() => activeProduct = item}
        onkeydown={(e) => e.key === 'Enter' && (activeProduct = item)}
        role="button"
        tabindex="0"
        aria-label="View {item.name} details"
      >
        <div class="image-wrap">
          <img src={item.image} alt={item.name} loading="lazy" />
          <button
            class="wishlist-btn"
            class:active={wishlist.has(item.id)}
            onclick={(e) => handleWishlist(e, item.id)}
            aria-label={wishlist.has(item.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {wishlist.has(item.id) ? '♥' : '♡'}
          </button>
        </div>
        <div class="card-content">
          <div>
            <p class="category">{item.category}</p>
            <h3>{item.name}</h3>
          </div>
          <div class="bottom-row">
            <span>${item.price}</span>
            <button
              class="add-btn"
              class:added={addedId === item.id}
              onclick={(e) => handleAdd(e, item)}
            >
              {addedId === item.id ? '✓' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

{#if activeProduct}
  <ProductModal product={activeProduct} onClose={() => activeProduct = null} />
{/if}

<style>
  .featured { padding: 2rem 7% 8rem; }

  .section-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 3rem;
  }

  .small-label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
    margin: 0;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 3rem;
    line-height: 1.05;
    max-width: 600px;
    letter-spacing: -0.04em;
  }

  .view-all {
    border: none;
    background: transparent;
    font-size: 0.95rem;
    cursor: pointer;
    color: #666;
    font-family: inherit;
    padding: 0;
    transition: opacity 0.2s;
    white-space: nowrap;
  }

  .view-all:hover { opacity: 0.5; }

  .products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
  }

  .card {
    background: rgba(255, 255, 255, 0.65);
    border-radius: 2rem;
    overflow: hidden;
    backdrop-filter: blur(20px);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
  }

  .image-wrap { position: relative; }

  .image-wrap img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
  }

  .wishlist-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    font-size: 1rem;
    cursor: pointer;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .wishlist-btn:hover { transform: scale(1.15); }
  .wishlist-btn.active { color: #c97b7b; }

  .card-content { padding: 1.5rem; }

  .category {
    color: #9c8d81;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0;
  }

  h3 {
    margin-top: 0.6rem;
    font-size: 1.5rem;
    margin-bottom: 0;
    letter-spacing: -0.03em;
  }

  .bottom-row {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bottom-row span { font-size: 1.1rem; font-weight: 600; }

  .add-btn {
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 0.8rem 1.4rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: inherit;
    transition: background 0.2s ease, transform 0.15s ease;
  }

  .add-btn.added {
    background: #7a9e7e;
    transform: scale(0.97);
  }

  @media (max-width: 900px) {
    .section-top { flex-direction: column; align-items: start; gap: 1rem; }
    h2 { font-size: 2.2rem; }
  }

  @media (max-width: 600px) {
    .featured { padding: 2rem 5% 6rem; }
    h2 { font-size: 1.9rem; }
    .image-wrap img { height: 260px; }
    .products { grid-template-columns: 1fr 1fr; gap: 1rem; }
    .card { border-radius: 1.5rem; }
    .card-content { padding: 1rem; }
    h3 { font-size: 1.2rem; }
  }

  @media (max-width: 380px) {
    .products { grid-template-columns: 1fr; }
  }
</style>
