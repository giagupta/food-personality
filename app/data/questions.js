export const letterMeanings = {
  S: { name: 'Sweet', emoji: '🍰', description: 'Preference for sweet flavors' },
  U: { name: 'Umami', emoji: '🍜', description: 'Preference for savory flavors' },
  M: { name: 'Mild', emoji: '🥗', description: 'Preference for mild spices' },
  H: { name: 'Hot', emoji: '🌶️', description: 'Preference for spicy food' },
  C: { name: 'Crunchy', emoji: '🥨', description: 'Preference for crispy textures' },
  T: { name: 'Tender', emoji: '🥩', description: 'Preference for soft textures' },
  P: { name: 'Pure', emoji: '🍎', description: 'Preference for simple flavors' },
  L: { name: 'Layered', emoji: '👨‍🍳', description: 'Preference for complex flavors' }
}

export const questions = [
  // Mixed questions from different dimensions
  {
    question: "When you're feeling down, what kind of comfort food do you reach for?",
    answers: [
      { text: "Something sweet like cookies or ice cream", type: "S" },
      { text: "A hearty bowl of ramen or soup", type: "U" }
    ]
  },
  {
    question: "Choose your pizza crust:",
    answers: [
      { text: "Thin and crispy", type: "C" },
      { text: "Soft and chewy", type: "T" }
    ]
  },
  {
    question: "How do you like your wings?",
    answers: [
      { text: "Mild or medium - I want to taste the chicken", type: "M" },
      { text: "Extra hot - bring on the heat!", type: "H" }
    ]
  },
  {
    question: "Which pasta dish would you prefer?",
    answers: [
      { text: "Classic aglio e olio (garlic and oil)", type: "P" },
      { text: "Complex lasagna with many layers", type: "L" }
    ]
  },
  {
    question: "At a buffet, which section do you visit first?",
    answers: [
      { text: "Desserts and pastries", type: "S" },
      { text: "Grilled meats and seafood", type: "U" }
    ]
  },
  {
    question: "Pick your ideal texture:",
    answers: [
      { text: "Crispy fried chicken skin", type: "C" },
      { text: "Slow-cooked tender meat", type: "T" }
    ]
  },
  {
    question: "Choose your salsa:",
    answers: [
      { text: "Mild and fresh", type: "M" },
      { text: "Habanero hot", type: "H" }
    ]
  },
  {
    question: "Your ideal cooking style is:",
    answers: [
      { text: "Simple ingredients, minimal seasoning", type: "P" },
      { text: "Multiple components and spices", type: "L" }
    ]
  },
  {
    question: "What's your ideal breakfast?",
    answers: [
      { text: "Pancakes with maple syrup", type: "S" },
      { text: "Eggs Benedict with hollandaise", type: "U" }
    ]
  },
  {
    question: "Your preferred cooking method is:",
    answers: [
      { text: "Deep frying or grilling", type: "C" },
      { text: "Slow cooking or braising", type: "T" }
    ]
  },
  {
    question: "At a Thai restaurant, your go-to spice level is:",
    answers: [
      { text: "Mild to medium - enjoy the flavors", type: "M" },
      { text: "Thai hot - bring on the challenge", type: "H" }
    ]
  },
  {
    question: "Choose your sushi:",
    answers: [
      { text: "Simple nigiri with fresh fish", type: "P" },
      { text: "Dragon roll with multiple ingredients", type: "L" }
    ]
  },
  {
    question: "Choose your ideal snack:",
    answers: [
      { text: "Fruit or candy", type: "S" },
      { text: "Cheese or nuts", type: "U" }
    ]
  },
  {
    question: "How do you like your curry?",
    answers: [
      { text: "Mild and aromatic", type: "M" },
      { text: "Spicy enough to make you sweat", type: "H" }
    ]
  },
  {
    question: "Pick your perfect midnight snack:",
    answers: [
      { text: "Ice cream or chocolate", type: "S" },
      { text: "Leftover pizza or sandwich", type: "U" }
    ]
  },
  {
    question: "Your ideal hot sauce is:",
    answers: [
      { text: "Just a hint of heat", type: "M" },
      { text: "Ghost pepper level", type: "H" }
    ]
  }
]
