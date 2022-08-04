import dashboardImage from "./assets/images/dashboard.webp";
import recipeImage from "./assets/images/mealify.webp";
import shoppeImage from "./assets/images/shoppe.webp";
import brochureImage from "./assets/images/brochure.webp";

export const data = [
  {
    id: 1,
    projectNumber: "01",
    color: "red",
    imgSrc: dashboardImage,
    title: "Covid-19 Statistic Dashboard",
    description:
      "This application is a map dashboard that shows statistics and geographic information about Covid-19.",
    projectLink: "https://dashboard.jasonanthonblack.com/",
    gitHubLink: "https://github.com/j-a-black/map-statistics-dashboard",
  },
  {
    id: 2,
    projectNumber: "02",
    color: "green",
    imgSrc: recipeImage,
    title: "Recipe Search App",
    description:
      "This application takes a single ingredient provided by the user and finds recipes that include the specified ingredient. A split screen layout is used to dynamically render recipe results and specific information such as ingredients, cooking instructions, and a link to a video with additional guidance. ",
    projectLink: "https://cupboard.jasonanthonblack.com/",
    gitHubLink: "https://github.com/j-a-black/cupboard-cra",
  },
  {
    id: 3,
    projectNumber: "03",
    color: "purple",
    imgSrc: shoppeImage,
    title: "Shopping Cart",
    description:
      "Shopping cart for a fictitious retail bakery that utilizes the web storage API. Users can add and remove products and adjust the quantities of products",
    projectLink: "https://shoppe.jasonanthonblack.com/",
    gitHubLink: "https://github.com/j-a-black/shoppe-cra-v4",
  },
  {
    id: 4,
    projectNumber: "04",
    color: "blue",
    imgSrc: brochureImage,
    title: "Brochure Website",
    description: "Landing page for a fictitious private catering company.",
    projectLink: "https://dashboard.jasonanthonblack.com/",
    gitHubLink: "https://github.com/j-a-black/seaside-catering-cra",
  },
];
