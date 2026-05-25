<script lang="ts">
  import type { Article } from '$lib/data/articles';

  const { articles, onOpen }: {
    articles: Article[];
    onOpen: (article: Article) => void;
  } = $props();
</script>

<section class="journal" id="journal">
  <div class="journal-label">
    <p class="small-label">Journal</p>
    <h2>Rituals, ingredients & slow beauty.</h2>
  </div>

  <div class="journal-grid">
    {#each articles as article, i}
      <article class="journal-card" class:journal-card--large={i === 0}>
        <img src={article.image} alt={article.title} loading="lazy" />
        <div class="journal-content">
          <span class="tag">{article.tag}</span>
          <h3>{article.title}</h3>
          <p>{article.intro}</p>
          <button class="read-btn" onclick={() => onOpen(article)}>Read more →</button>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  .journal { padding: 4rem 7% 8rem; }

  .journal-label { margin-bottom: 3rem; }

  .small-label {
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: #9c8d81;
    font-size: 0.8rem;
    margin: 0 0 0.5rem;
  }

  h2 {
    margin-top: 1rem;
    margin-bottom: 0;
    font-size: 3rem;
    line-height: 1.05;
    letter-spacing: -0.04em;
  }

  .journal-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;
  }

  .journal-card {
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .journal-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.07);
  }

  .journal-card--large { grid-row: 1 / 3; }
  .journal-card--large img { height: 360px; }

  .journal-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
  }

  .journal-content { padding: 1.5rem; }

  .tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: #9c8d81;
  }

  h3 {
    margin: 0.5rem 0 0.6rem;
    font-size: 1.2rem;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .journal-content p {
    color: #888;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1rem;
  }

  .read-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    color: #2b2b2b;
    padding: 0;
    font-family: inherit;
    transition: opacity 0.2s;
  }

  .read-btn:hover { opacity: 0.5; }

  @media (max-width: 900px) {
    .journal-grid { grid-template-columns: 1fr; }
    .journal-card--large { grid-row: auto; }
    h2 { font-size: 2.2rem; }
  }

  @media (max-width: 600px) {
    .journal { padding: 3rem 5% 6rem; }
    h2 { font-size: 1.9rem; }
    .journal-card--large img { height: 260px; }
    .journal-card img { height: 180px; }
    .journal-content { padding: 1.2rem; }
  }
</style>
