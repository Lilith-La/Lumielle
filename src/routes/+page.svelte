<script lang="ts">
  import { products } from '$lib/data/products';
  import { articles } from '$lib/data/articles';
  import type { Article } from '$lib/data/articles';
  import HeroSection from '$lib/components/HeroSection.svelte';
  import FeaturedSection from '$lib/components/FeaturedSection.svelte';
  import CatalogSection from '$lib/components/CatalogSection.svelte';
  import JournalSection from '$lib/components/JournalSection.svelte';
  import ArticleModal from '$lib/components/ArticleModal.svelte';

  const featured = products.slice(0, 3);

  let activeArticle = $state<Article | null>(null);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  function openArticle(article: Article) {
    activeArticle = article;
    document.body.style.overflow = 'hidden';
  }

  function closeArticle() {
    activeArticle = null;
    document.body.style.overflow = '';
  }
</script>

<svelte:head>
  <title>Lumiélle — Luxury Skincare</title>
</svelte:head>

<HeroSection {scrollTo} />
<FeaturedSection products={featured} {scrollTo} />
<CatalogSection {products} />
<JournalSection {articles} onOpen={openArticle} />

{#if activeArticle}
  <ArticleModal article={activeArticle} onClose={closeArticle} />
{/if}

<style>
  :global(body) {
    margin: 0;
    background: #f6f3ee;
    color: #2b2b2b;
    font-family: Inter, sans-serif;
  }
</style>
