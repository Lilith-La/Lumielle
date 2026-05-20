<script lang="ts">
  import type { Product } from '$lib/data/products';
  import { cart } from '$lib/stores/cart.svelte';
  import { wishlist } from '$lib/stores/wishlist.svelte';
  import { onMount } from 'svelte';

  const { product, onClose }: { product: Product; onClose: () => void } = $props();

  let addedFlash = $state(false);

  function handleAdd() {
    cart.add(product);
    addedFlash = true;
    setTimeout(() => { addedFlash = false; }, 1200);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') onClose();
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  });

  // Key benefits per product id, with category fallbacks
  const benefitsMap: Record<number, string[]> = {
    1: ['Intense 72-hour hydration', 'Visibly plumps fine lines', 'Weightless, non-sticky texture'],
    2: ['Repairs skin barrier overnight', 'Deeply nourishing for dry skin', 'Wakes to a soft, supple complexion'],
    3: ['Imparts a natural luminous glow', 'Rich in essential fatty acids', 'Absorbs quickly without residue'],
    4: ['Soothes redness and irritation', "Preserves skin's natural pH", 'Rinses clean without stripping'],
    5: ['Fades dark spots and hyperpigmentation', 'Boosts collagen synthesis', 'Antioxidant protection all day'],
    6: ['Balances excess oil production', 'Refines the look of pores', 'Preps skin for deeper moisture absorption'],
    7: ['All-day moisturization with SPF-ready base', 'Whipped texture melts into skin', 'Suitable for all skin types'],
    8: ['Draws out impurities and excess sebum', 'Kaolin clay refines and softens', 'Leaves skin visibly clearer'],
    9: ['Intensive overnight skin regeneration', 'Rosehip and sea buckthorn restore radiance', 'Wakes skin looking rested and firm'],
    10: ['Gently removes makeup and pollution', "Preserves skin's moisture barrier", 'Fragrance-free, sensitive-skin approved'],
    11: ['Boosts natural radiance with every use', 'Fermented actives enhance absorption', 'Evens skin tone over time'],
    12: ['Visibly smooths texture and fine lines', 'Gentle encapsulated retinol formula', 'Minimises irritation for beginners']
  };

  const howToUseMap: Record<string, string> = {
    Serum: 'Apply 2–3 drops to cleansed skin, gently pressing into the face and neck. Use morning and evening before moisturiser. Follow with SPF during the day.',
    Moisturizer: 'Massage a pea-sized amount over the face and décolletage morning and evening, after serum. Allow to absorb fully before applying makeup.',
    'Face Oil': 'Warm 2–4 drops between palms and press gently into skin after serum, or blend a drop into your moisturiser. Use as the final step of your evening routine.',
    Cleanser: 'Dampen skin, apply a small amount, and work into a lather using circular motions. Rinse thoroughly with lukewarm water. Use morning and evening.',
    Toner: 'After cleansing, apply to a cotton pad or pour into palms and press gently into skin. Use before serum for best results.',
    Mask: 'Apply an even layer to clean, dry skin. Leave on for 10–15 minutes, then rinse thoroughly. Use 1–2 times per week for best results.'
  };

  const benefits = $derived(benefitsMap[product.id] ?? ['Deep hydration', 'Gentle formula', 'Dermatologist tested']);
  const howToUse = $derived(howToUseMap[product.category] ?? 'Apply to clean skin as directed. Suitable for daily use. Patch test before first use.');
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  class="overlay"
  role="dialog"
  aria-modal="true"
  aria-label={product.name}
  tabindex="-1"
  onclick={onClose}
  onkeydown={handleKeydown}
>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="modal"
    onclick={(e) => e.stopPropagation()}
    onkeydown={() => {}}
  >
    <button class="close-btn" onclick={onClose} aria-label="Close modal">✕</button>

    <div class="modal-inner">
      <!-- Left: image -->
      <div class="image-col">
        <img src={product.image} alt={product.name} />
      </div>

      <!-- Right: scrollable content -->
      <div class="content-col">
        <p class="category-label">{product.category}</p>
        <h2 class="product-name">{product.name}</h2>
        <p class="price">${product.price}</p>
        <p class="description">{product.description}</p>

        <div class="section">
          <h4 class="section-title">Key Benefits</h4>
          <ul class="benefits-list">
            {#each benefits as benefit}
              <li>{benefit}</li>
            {/each}
          </ul>
        </div>

        <div class="section">
          <h4 class="section-title">How to Use</h4>
          <p class="how-to">{howToUse}</p>
        </div>

        <div class="actions">
          <button
            class="wishlist-btn"
            class:wishlisted={wishlist.has(product.id)}
            onclick={() => wishlist.toggle(product.id)}
            aria-label={wishlist.has(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {wishlist.has(product.id) ? '♥' : '♡'}
            {wishlist.has(product.id) ? 'Wishlisted' : 'Save to wishlist'}
          </button>

          <button
            class="add-btn"
            class:added={addedFlash}
            onclick={handleAdd}
          >
            {addedFlash ? '✓ Added to cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    animation: fade-in 0.25s ease;
  }

  .modal {
    background: #f6f3ee;
    border-radius: 2rem;
    max-width: 900px;
    width: 100%;
    max-height: 85vh;
    overflow: hidden;
    position: relative;
    animation: slide-up 0.32s ease;
    display: flex;
    flex-direction: column;
  }

  .modal-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    max-height: 85vh;
    overflow: hidden;
  }

  .image-col {
    overflow: hidden;
    flex-shrink: 0;
  }

  .image-col img {
    width: 100%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
    display: block;
    border-radius: 2rem 0 0 2rem;
  }

  .content-col {
    padding: 2.5rem 2.5rem 2rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .close-btn {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: background 0.2s ease, transform 0.15s ease;
    backdrop-filter: blur(8px);
  }

  .close-btn:hover {
    background: white;
    transform: scale(1.08);
  }

  .category-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    margin: 0 0 0.6rem;
  }

  .product-name {
    font-size: 2.2rem;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin: 0 0 0.5rem;
    color: #2b2b2b;
  }

  .price {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2b2b2b;
    margin: 0 0 1rem;
  }

  .description {
    font-size: 0.95rem;
    color: #666;
    line-height: 1.7;
    margin: 0 0 1.5rem;
  }

  .section {
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #9c8d81;
    margin: 0 0 0.75rem;
    font-weight: 600;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .benefits-list li {
    font-size: 0.9rem;
    color: #444;
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    line-height: 1.5;
  }

  .benefits-list li::before {
    content: '—';
    color: #c9b6a6;
    flex-shrink: 0;
    margin-top: 0.05em;
  }

  .how-to {
    font-size: 0.9rem;
    color: #444;
    line-height: 1.7;
    margin: 0;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 1.5rem;
  }

  .wishlist-btn {
    border: 1px solid rgba(0, 0, 0, 0.12);
    background: white;
    color: #555;
    padding: 0.8rem 1.5rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.9rem;
    font-family: inherit;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .wishlist-btn:hover {
    border-color: #c97b7b;
    color: #c97b7b;
  }

  .wishlist-btn.wishlisted {
    border-color: #c97b7b;
    color: #c97b7b;
    background: #fdf5f5;
  }

  .add-btn {
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.95rem;
    font-family: inherit;
    font-weight: 500;
    transition: background 0.2s ease, transform 0.15s ease;
    width: 100%;
  }

  .add-btn:hover {
    background: #1a1a1a;
  }

  .add-btn.added {
    background: #7a9e7e;
    transform: scale(0.98);
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from { transform: translateY(28px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  /* Mobile: stack layout */
  @media (max-width: 680px) {
    .overlay {
      padding: 0;
      align-items: flex-end;
    }

    .modal {
      border-radius: 2rem 2rem 0 0;
      max-height: 92vh;
    }

    .modal-inner {
      grid-template-columns: 1fr;
      grid-template-rows: 240px 1fr;
      max-height: 92vh;
      overflow-y: auto;
    }

    .image-col {
      height: 240px;
    }

    .image-col img {
      height: 240px;
      min-height: unset;
      border-radius: 2rem 2rem 0 0;
    }

    .content-col {
      padding: 1.75rem 1.5rem 2rem;
    }

    .product-name {
      font-size: 1.7rem;
    }

    .actions {
      padding-top: 1.25rem;
    }
  }
</style>
