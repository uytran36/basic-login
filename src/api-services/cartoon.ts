export default async function loadCartoon() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");
  const data = await res.json();

  return data;
}
