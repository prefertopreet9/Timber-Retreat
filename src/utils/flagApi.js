export const fetchCountryFlag = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const data = await response.json();
    if (data && data.length > 0 && data[0].flags) {
      return data[0].flags.svg; // Return the SVG flag URL
    }
    return null;
  } catch (error) {
    console.error("Error fetching the flag:", error);
    return null;
  }
};
