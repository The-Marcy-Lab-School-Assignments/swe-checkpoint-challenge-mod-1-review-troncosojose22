// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const regexp = /[!#?]/;

  if (!regexp.exec(title)) {
    const lowerCasedTitle = title.toLowerCase();
    const titleArray = lowerCasedTitle.split(' ');
    const slug = titleArray.join('-');

    return slug;
  }

  return null;
};

createSlug('Hello World');

module.exports = {
  createSlug,
};
