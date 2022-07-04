import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <hero-element></hero-element>

        <section class="section bd-container">
          <h3 id="restaurants-title" class="content_heading font-20"></h3>

          <restaurants-container>
            ${createRestaurantItemTemplate(20)}
          </restaurants-container>
        </section>
      </div>
    `;
  },

  async afterRender() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const restaurantsTitle = document.getElementById('restaurants-title');
    const restaurantsContainer = document.querySelector('restaurants-container');

    try {
      restaurantsTitle.textContent = 'Loading...';
      const restaurants = await RestaurantSource.homePage();
      restaurantsTitle.textContent = 'Explore Restaurants';
      restaurantsContainer.restaurants = restaurants;
    } catch (error) {
      restaurantsTitle.textContent = "The page you're looking for isn't found";
      restaurantsContainer.style.display = 'none';
    }
  },
};

export default Home;
