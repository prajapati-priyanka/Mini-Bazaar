export const productMeta = {
  colors: [
    { name: "Black", hex: "#000000" },
    { name: "Blue", hex: "#2563eb" },
    { name: "Red", hex: "#dc2626" },
  ],

  sizes: [
    {
      label: "S",
      stock: 10,
    },
    {
      label: "M",
      stock: 2,
    },
    {
      label: "L",
      stock: 0,
    },
    {
      label: "XL",
      stock: 4,
    },
  ],

    getProductImages: (image: string) => [
    image,
    image,
    image,
    image,
  ],
};