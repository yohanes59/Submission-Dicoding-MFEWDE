import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
      return `
      <section class="restaurant-detail_section bd-container">
        <h2 id="restaurants-title" class="content_heading font-20"></h2>

        <restaurant-detail>
          ${createRestaurantDetailTemplate()}
        </restaurant-detail>
      </section>
      `;
    },

    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()

      const restaurantTitle = document.getElementById('restaurants-title');
      const restaurantContainer = document.querySelector('restaurant-detail');

      try {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantSource.detailPage(url.id);
        restaurantContainer.restaurantDetail = restaurant;

        const reviewerName = document.getElementById('input-name');
        const userReview = document.getElementById('input-review');
        const submitReview = document.getElementById('submit-review');
        submitReview.addEventListener('click', async () => {
          const review = {
            id: `${restaurant.restaurant.id}`,
            name: `${reviewerName.value}`,
            review: `${userReview.value}`,
          };
          const sendReview = await RestaurantSource.inputReview(review);
          console.log(sendReview);
        });

        LikeButtonInitiator.init({
          likeButtonContainer: document.getElementById('like-button-container'),
          favoriteRestaurants: FavoriteRestaurantIdb,
          restaurant: {
            id: restaurant.restaurant.id,
            name: restaurant.restaurant.name,
            description: restaurant.restaurant.description,
            pictureId: restaurant.restaurant.pictureId,
            rating: restaurant.restaurant.rating,
            city: restaurant.restaurant.city,
          },
        });
      } catch (error) {
        restaurantTitle.textContent = "The page you're looking for isn't found";
        restaurantContainer.style.display = 'none';
      }
    },
  };

export default Detail;
