import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <section class="restaurant-favorite_section bd-container">
          <h3 id="restaurants-title" class="content_heading font-20"></h3>

          <restaurants-container></restaurants-container>
        </section>
      </div>
    `;
  },
  async afterRender() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const restaurantsTitle = document.getElementById('restaurants-title');
    const restaurantsContainer = document.querySelector('restaurants-container');

    restaurantsTitle.textContent = 'Loading...';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    restaurants.length === 0 ? (restaurantsTitle.textContent = 'Your Favorite Restaurant is Empty') : (restaurantsTitle.textContent = 'Your Favorite Restaurant');
    restaurantsContainer.restaurants = restaurants;
  },
};

export default Favorite;
