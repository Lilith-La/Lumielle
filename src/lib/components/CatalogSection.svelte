<script lang="ts">
  import type { Product } from '$lib/data/products';
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';
  import ProductModal from '$lib/components/ProductModal.svelte';

  const { products }: { products: Product[] } = $props();

  const categories = ['All', 'Serum', 'Moisturizer', 'Face Oil', 'Cleanser', 'Toner', 'Mask'];

  let selected = $state('All');
  let search = $state('');

  const filtered = $derived(
    products.filter((p) => {
      const matchesCategory = selected === 'All' || p.category === selected;
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  );

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

<section class="catalog" id="catalog">
  <div class="catalog-top">
    <div>
      <p class="small-label">Shop Collection</p>
      <h2>Essentials for elevated rituals.</h2>
    </div>
    <input bind:value={search} placeholder="Search products..." class="search" />
  </div>

  <div class="filters">
    {#each categories as category}
      <button
        class:selected={selected === category}
        onclick={() => selected = category}
      >
        {category}
      </button>
    {/each}
  </div>

  <div class="catalog-grid">
    {#each filtered as product}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="product-card"
        onclick={() => activeProduct = product}
        onkeydown={(e) => e.key === 'Enter' && (activeProduct = product)}
        role="button"
        tabindex="0"
        aria-label="View {product.name} details"
      >
        <button
          class="wishlist"
          class:active={wishlist.has(product.id)}
          onclick={(e) => handleWishlist(e, product.id)}
        >
          {wishlist.has(product.id) ? '♥' : '♡'}
        </button>

        <img src={product.image} alt={product.name} />

        <div class="product-content">
          <p class="category">{product.category}</p>
          <h3>{product.name}</h3>
          <p class="description">{product.description}</p>
          <div class="bottom-row">
            <span>${product.price}</span>
            <button
              class="add-btn"
              class:added={addedId === product.id}
              onclick={(e) => handleAdd(e, product)}
            >
              {addedId === product.id ? '✓ Added' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    {/each}

    {#if filtered.length === 0}
      <p class="empty">No products found.</p>
    {/if}
  </div>
</section>

{#if activeProduct}
  <ProductModal product={activeProduct} onClose={() => activeProduct = null} />
{/if}

<style>
  .catalog {
    padding: 2rem 7% 8rem;
    background: rgba(255, 255, 255, 0.3);
  }

  .catalog-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1.5rem;
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

  .search {
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: white;
    padding: 0.8rem 1.2rem;
    border-radius: 999px;
    font-size: 0.95rem;
    outline: none;
    width: 240px;
    transition: box-shadow 0.2s ease;
    font-family: inherit;
  }

  .search:focus { box-shadow: 0 0 0 3px rgba(43, 43, 43, 0.08); }

  .filters {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .filters button {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: white;
    padding: 0.5rem 1.2rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: inherit;
    transition: all 0.2s ease;
    color: #555;
  }

  .filters button.selected {
    background: #2b2b2b;
    color: white;
    border-color: #2b2b2b;
  }

  .catalog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .product-card {
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }

  .product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.07);
  }

  .product-card img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    display: block;
  }

  .wishlist {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.85);
    border: none;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 1rem;
    cursor: pointer;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    z-index: 1;
  }

  .wishlist:hover { transform: scale(1.15); }
  .wishlist.active { color: #c97b7b; }

  .product-content { padding: 1.5rem; }

  .category {
    color: #9c8d81;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  h3 {
    margin-top: 0.6rem;
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .description {
    color: #888;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-top: 0.5rem;
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
    padding: 0.8rem 1.2rem;
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

  .empty {
    color: #aaa;
    grid-column: 1 / -1;
    text-align: center;
    padding: 4rem 0;
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    .catalog-top { flex-direction: column; align-items: start; }
    h2 { font-size: 2rem; }
    .search { width: 100%; box-sizing: border-box; }
  }
</style>
