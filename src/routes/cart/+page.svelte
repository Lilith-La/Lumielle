<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';

  let form = $state({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    note: ''
  });

  let submitted = $state(false);
  let errors = $state<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.city.trim()) e.city = 'Required';
    if (!form.zip.trim()) e.zip = 'Required';
    return e;
  }

  function handleOrder() {
    errors = validate();
    if (Object.keys(errors).length > 0) return;
    submitted = true;
    cart.clear();
  }
</script>

<div class="page">
  <nav>
    <a href="/" class="logo">Lumiélle</a>
    <a href="/" class="back">← Continue shopping</a>
  </nav>

  {#if submitted}
    <div class="success">
      <div class="success-icon">✓</div>
      <h2>Order placed!</h2>
      <p>Thank you for your order. We'll send a confirmation to <strong>{form.email}</strong>.</p>
      <a href="/" class="btn-primary">Back to shop</a>
    </div>
  {:else}
    <div class="layout">
      <!-- Cart items -->
      <div class="cart-section">
        <h1>Your Cart</h1>

        {#if cart.items.length === 0}
          <div class="empty">
            <p>Your cart is empty.</p>
            <a href="/" class="btn-primary">Shop now</a>
          </div>
        {:else}
          <div class="items">
            {#each cart.items as item}
              <div class="item">
                <img src={item.image} alt={item.name} />
                <div class="item-info">
                  <p class="item-category">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p class="item-desc">{item.description}</p>
                </div>
                <div class="item-controls">
                  <div class="qty">
                    <button onclick={() => cart.updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onclick={() => cart.updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p class="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                  <button class="remove" onclick={() => cart.remove(item.id)}>Remove</button>
                </div>
              </div>
            {/each}
          </div>

          <div class="totals">
            <div class="totals-row">
              <span>Subtotal</span>
              <span>${cart.total.toFixed(2)}</span>
            </div>
            <div class="totals-row">
              <span>Shipping</span>
              <span>{cart.total >= 100 ? 'Free' : '$9.99'}</span>
            </div>
            {#if cart.total < 100}
              <p class="shipping-note">Free shipping on orders over $100</p>
            {/if}
            <div class="totals-row total">
              <span>Total</span>
              <span>${(cart.total + (cart.total >= 100 ? 0 : 9.99)).toFixed(2)}</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Order form -->
      {#if cart.items.length > 0}
        <div class="form-section">
          <h2>Delivery details</h2>

          <form onsubmit={(e) => { e.preventDefault(); handleOrder(); }}>
            <div class="field">
              <label for="name">Full name</label>
              <input id="name" bind:value={form.name} class:error={errors.name} />
              {#if errors.name}<span class="err">{errors.name}</span>{/if}
            </div>

            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" bind:value={form.email} class:error={errors.email} />
              {#if errors.email}<span class="err">{errors.email}</span>{/if}
            </div>

            <div class="field">
              <label for="phone">Phone (optional)</label>
              <input id="phone" type="tel" bind:value={form.phone} />
            </div>

            <div class="field">
              <label for="address">Address</label>
              <input id="address" bind:value={form.address} class:error={errors.address} />
              {#if errors.address}<span class="err">{errors.address}</span>{/if}
            </div>

            <div class="row">
              <div class="field">
                <label for="city">City</label>
                <input id="city" bind:value={form.city} class:error={errors.city} />
                {#if errors.city}<span class="err">{errors.city}</span>{/if}
              </div>
              <div class="field">
                <label for="zip">ZIP / Postal</label>
                <input id="zip" bind:value={form.zip} class:error={errors.zip} />
                {#if errors.zip}<span class="err">{errors.zip}</span>{/if}
              </div>
            </div>

            <div class="field">
              <label for="note">Order note (optional)</label>
              <textarea id="note" bind:value={form.note} rows="3"></textarea>
            </div>

            <button type="submit" class="btn-primary submit">
              Place order — ${(cart.total + (cart.total >= 100 ? 0 : 9.99)).toFixed(2)}
            </button>
          </form>
        </div>
      {/if}
    </div>
  {/if}
</div>

<style>
  :global(body) {
    margin: 0;
    background: #f6f3ee;
    color: #2b2b2b;
    font-family: Inter, sans-serif;
  }

  .page {
    min-height: 100vh;
    padding: 2rem 7%;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
  }

  .logo {
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    text-decoration: none;
    color: #2b2b2b;
  }

  .back {
    text-decoration: none;
    color: #888;
    font-size: 0.95rem;
    transition: color 0.2s;
  }

  .back:hover { color: #2b2b2b; }

  .layout {
    display: grid;
    grid-template-columns: 1fr 420px;
    gap: 4rem;
    align-items: start;
  }

  /* Cart section */
  .cart-section h1 {
    font-size: 2.5rem;
    letter-spacing: -0.04em;
    margin-bottom: 2rem;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .item {
    display: grid;
    grid-template-columns: 100px 1fr auto;
    gap: 1.5rem;
    background: white;
    border-radius: 1.2rem;
    padding: 1.2rem;
    align-items: center;
  }

  .item img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 0.8rem;
  }

  .item-category {
    color: #9c8d81;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0;
  }

  .item-info h3 {
    margin: 0.3rem 0 0.4rem;
    font-size: 1.1rem;
  }

  .item-desc {
    color: #888;
    font-size: 0.85rem;
    margin: 0;
    line-height: 1.5;
  }

  .item-controls {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.6rem;
  }

  .qty {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: #f6f3ee;
    border-radius: 999px;
    padding: 0.3rem 0.6rem;
  }

  .qty button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: #2b2b2b;
    line-height: 1;
    padding: 0 0.2rem;
    transition: opacity 0.15s;
  }

  .qty button:hover { opacity: 0.5; }
  .qty span { font-weight: 600; min-width: 1.2rem; text-align: center; }

  .item-price {
    font-weight: 600;
    font-size: 1.05rem;
    margin: 0;
  }

  .remove {
    border: none;
    background: none;
    color: #bbb;
    font-size: 0.8rem;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;
  }

  .remove:hover { color: #c97b7b; }

  .totals {
    background: white;
    border-radius: 1.2rem;
    padding: 1.5rem;
    margin-top: 1.5rem;
  }

  .totals-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    color: #555;
    font-size: 0.95rem;
  }

  .totals-row.total {
    border-top: 1px solid #eee;
    margin-top: 0.5rem;
    padding-top: 1rem;
    font-weight: 700;
    font-size: 1.1rem;
    color: #2b2b2b;
  }

  .shipping-note {
    font-size: 0.8rem;
    color: #9c8d81;
    margin: 0;
  }

  /* Form */
  .form-section {
    background: white;
    border-radius: 1.5rem;
    padding: 2rem;
    position: sticky;
    top: 2rem;
  }

  .form-section h2 {
    font-size: 1.6rem;
    letter-spacing: -0.03em;
    margin-bottom: 1.5rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin-bottom: 1rem;
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  label {
    font-size: 0.85rem;
    color: #666;
    font-weight: 500;
  }

  input, textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.7rem;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    background: #fafafa;
    color: #2b2b2b;
    width: 100%;
    box-sizing: border-box;
  }

  input:focus, textarea:focus {
    border-color: #2b2b2b;
    box-shadow: 0 0 0 3px rgba(43, 43, 43, 0.07);
  }

  input.error {
    border-color: #c97b7b;
  }

  .err {
    font-size: 0.8rem;
    color: #c97b7b;
  }

  textarea { resize: vertical; }

  .btn-primary {
    display: inline-block;
    border: none;
    background: #2b2b2b;
    color: white;
    padding: 1rem 1.8rem;
    border-radius: 999px;
    cursor: pointer;
    font-size: 0.95rem;
    font-family: inherit;
    text-decoration: none;
    transition: opacity 0.2s;
  }

  .btn-primary:hover { opacity: 0.8; }

  .submit {
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  /* Empty */
  .empty {
    text-align: center;
    padding: 6rem 0;
    color: #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  /* Success */
  .success {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
    text-align: center;
    gap: 1rem;
  }

  .success-icon {
    width: 5rem;
    height: 5rem;
    background: #2b2b2b;
    color: white;
    border-radius: 50%;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .success h2 {
    font-size: 2.5rem;
    letter-spacing: -0.04em;
    margin: 0;
  }

  .success p {
    color: #666;
    font-size: 1.05rem;
    max-width: 400px;
  }

  @media (max-width: 900px) {
    .layout {
      grid-template-columns: 1fr;
    }

    .form-section {
      position: static;
    }

    .item {
      grid-template-columns: 80px 1fr;
    }

    .item-controls {
      grid-column: 1 / -1;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
