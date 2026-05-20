let ids = $state<number[]>([]);

export const wishlist = {
  get ids() { return ids; },
  toggle(id: number) {
    if (ids.includes(id)) {
      ids = ids.filter(i => i !== id);
    } else {
      ids = [...ids, id];
    }
  },
  has(id: number) { return ids.includes(id); }
};
