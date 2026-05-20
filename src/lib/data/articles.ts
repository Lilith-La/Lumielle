export type Article = {
  tag: string;
  title: string;
  intro: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    tag: 'Ritual',
    title: 'The art of a morning skincare ritual',
    intro: 'How slowing down your morning routine can transform your skin — and your mindset.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    body: [
      'There is something quietly powerful about a morning ritual. Not a rushed routine of steps squeezed between alarms and coffee, but an intentional sequence — a few minutes that belong only to you.',
      'Begin with a gentle cleanse using lukewarm water. Cold water tightens, hot water strips. Lukewarm is the balance your skin asks for each morning. Follow with a hydrating toner, pressed softly into skin with your palms — no cotton, no friction.',
      'Next, your serum. Two to three drops warmed between fingertips before application. Serums work by penetrating deeply, so giving them warmth and time matters. Let it absorb for sixty seconds before layering.',
      "Moisturizer seals everything in. Choose one suited to your skin's mood that morning — lighter on warmer days, richer in colder months. Then SPF, without exception. Even indoors, even in winter.",
      'The ritual ends where it began: with intention. Take one breath. Notice how your skin feels. This small act of attention, repeated daily, is what transforms a routine into a ritual — and a ritual into results.'
    ]
  },
  {
    tag: 'Ingredients',
    title: "Rosehip oil: nature's retinol",
    intro: 'Why this ancient botanical is a cornerstone of our formulas.',
    image: 'https://images.unsplash.com/photo-1591019479261-1a103585c559?q=80&w=1200&auto=format&fit=crop',
    body: [
      'Rosehip oil has been used for centuries across South America, Egypt and Europe — pressed from the seeds of wild rose bushes, it carries a concentration of nutrients that few other botanicals can match.',
      "What makes rosehip exceptional is its naturally occurring trans-retinoic acid — a form of vitamin A that works similarly to synthetic retinol, but with far less irritation. This makes it ideal for sensitive skin types who cannot tolerate harsher actives.",
      "It is also rich in essential fatty acids, particularly linoleic acid (omega-6) and alpha-linolenic acid (omega-3). These lipids repair the skin's moisture barrier, reducing water loss and improving resilience over time. Studies have shown consistent rosehip use reduces hyperpigmentation, fine lines and scar tissue.",
      "In our Lumière Oil, we use cold-pressed rosehip seed oil — a method that preserves heat-sensitive nutrients that would otherwise be destroyed by conventional extraction. The result is an oil that genuinely feeds skin rather than simply coating it.",
      'Apply two to three drops to clean skin in the evening, after serums and before heavier creams. Give it four to six weeks of consistent use — the skin rewards patience.'
    ]
  },
  {
    tag: 'Evening ritual',
    title: "Double cleansing: the ritual you're missing",
    intro: 'A guide to evening skin prep that actually works while you sleep.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    body: [
      'Double cleansing originated in Korean skincare and has since become one of the most widely adopted evening practices in modern skincare — for good reason. A single cleanser, however good, rarely removes everything the day leaves behind.',
      "The first cleanse is oil-based. Oil dissolves oil — sunscreen, sebum, makeup and pollution particles that sit in the skin's lipid layer. Massage an oil cleanser or cleansing balm into dry skin for thirty to sixty seconds, then emulsify with water and rinse. This step alone transforms how clean skin actually feels.",
      'The second cleanse is water-based. Now that the surface is clear, a gentle foam or gel cleanser can address the skin itself — removing sweat, residue and anything the first cleanse loosened. This is the step where our Rose Cleanser excels: mild enough not to strip, thorough enough to genuinely cleanse.',
      'What follows clean skin is what matters most. Serums, treatments and oils absorb dramatically better on skin that has been properly cleared. Double cleansing is not about doing more — it is about doing it right so that everything else you apply actually works.',
      'Reserve this ritual for evenings. In the morning, a simple rinse with water or a single gentle cleanse is all skin needs after a night of repair.'
    ]
  }
];
