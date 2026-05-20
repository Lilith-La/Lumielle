<script lang="ts">
  import type { Article } from '$lib/data/articles';

  const { article, onClose }: { article: Article; onClose: () => void } = $props();
</script>

<div
  class="overlay"
  onclick={onClose}
  onkeydown={(e) => e.key === 'Escape' && onClose()}
  role="dialog"
  aria-modal="true"
  tabindex="-1"
>
  <div class="modal" onclick={(e) => e.stopPropagation()} onkeydown={() => {}} role="document">
    <button class="close" onclick={onClose}>✕</button>
    <img src={article.image} alt={article.title} class="modal-img" />
    <div class="body">
      <span class="tag">{article.tag}</span>
      <h2>{article.title}</h2>
      <p class="intro">{article.intro}</p>
      <div class="text">
        {#each article.body as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    animation: fade-in 0.25s ease;
  }

  .modal {
    background: #f6f3ee;
    border-radius: 2rem;
    max-width: 720px;
    width: 100%;
    max-height: 88vh;
    overflow-y: auto;
    position: relative;
    animation: slide-up 0.3s ease;
  }

  .close {
    position: sticky;
    top: 1.2rem;
    float: right;
    margin: 1.2rem 1.2rem 0 0;
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.2s;
  }

  .close:hover { background: white; }

  .modal-img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    border-radius: 2rem 2rem 0 0;
    margin-top: -3rem;
  }

  .body { padding: 2rem 2.5rem 2.5rem; }

  .tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #9c8d81;
  }

  h2 {
    font-size: 2rem;
    letter-spacing: -0.04em;
    margin: 0.5rem 0 0;
    line-height: 1.15;
  }

  .intro {
    color: #9c8d81;
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    border-left: 3px solid #c9b6a6;
    padding-left: 1rem;
  }

  .text p {
    color: #444;
    font-size: 1rem;
    line-height: 1.85;
    margin: 0 0 1.2rem;
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slide-up {
    from { transform: translateY(24px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @media (max-width: 900px) {
    .overlay { padding: 1rem; align-items: flex-end; }
    .modal { max-height: 92vh; border-radius: 2rem 2rem 0 0; }
    .modal-img { border-radius: 2rem 2rem 0 0; margin-top: 0; }
    .body { padding: 1.5rem; }
  }
</style>
