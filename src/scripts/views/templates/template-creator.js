const createRestaurantItemTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-skeleton">
        <div class="restaurant-item_header">
          <img src="./placeholder.png" alt="test" width="100%" height="150px" class="restaurant-item_img">
        </div>

        <div class="restaurant-item_content">
          <h4 class="restaurant-item_name font-16 restaurant-item_skeleton">Lorem ipsum dolor sit.</h4>
          <p class="restaurant-item_description restaurant-item_skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
            justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
            Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
            Aenean
            leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
            quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
          <div class="restaurant-item_info">
            <span class="restaurant-item_rating restaurant-item_skeleton">5.0</span>
            <span class="restaurant-item_city restaurant-item_skeleton">Loremips</span>
          </div>
        </div>
      </div>
  `;
  }
  return template;
};

const createRestaurantDetailTemplate = () => `
  <div class="restaurant-detail_header">
  <img src="./placeholder.png" alt="test" width="100%" height="250px" class="restaurant-detail_img">
  </div>

  <div>
  <div class="restaurant-content_container">
    <h2 class="restaurant-detail_name font-18 restaurant-detail_skeleton">Lorem ipsum dolor sit</h2>

    <div class="restaurant-detail_categories">
      <span class="restaurant_category restaurant-detail_skeleton">Lorem</span> . <span class="restaurant_category restaurant-detail_skeleton">ipsum</span>
    </div>

    <div class="restaurant-detail_rating restaurant-detail_skeleton">4.2</div>
  </div>

  <div class="restaurant-content_container">
    <h3 class="restaurant-detail_title font-16">Restaurant Info</h3>

    <div class="restaurant-content_location">
      <h4 class="restaurant-detail_subtitle">Location</h4>
      <span class="restaurant-detail_location bd-block restaurant-detail_skeleton">Lorem, ipsum</span>
    </div>

    <div>
      <h4 class="restaurant-detail_subtitle">About this restaurant</h4>
      <p class="restaurant-detail_description restaurant-detail_skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
      commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
      nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
      Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
      Aenean
      leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
      quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
    </div>
  </div>

  <div class="restaurant-content_container">
    <h3 class="restaurant-detail_title font-16">Menu</h3>

    <div class="restaurant-content_menu">
      <div>
        <h4 class="restaurant-detail_subtitle">Foods</h4>

        <ul class="restaurant-menu_list">
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
        </ul>
      </div>

      <div>
        <h4 class="restaurant-detail_subtitle">Drinks</h4>

        <ul class="restaurant-menu_list">
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
          <li class="restaurant-menu_item restaurant-detail_skeleton">Lorem</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="restaurant-content_container">
    <h3 class="restaurant-detail_title font-16">Reviews</h3>

    <div class="restaurant-content_reviews">
      <div class="restaurant-detail_review">
        <div class="restaurant-review_header">
          <svg class="restaurant-review_icon" width="40" height="40" viewBox="0 0 40 40" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 3.33333C10.965 3.33333 3.33331 10.965 3.33331 20C3.33331 29.035 10.965 36.6667 20 36.6667C29.035 36.6667 36.6666 29.035 36.6666 20C36.6666 10.965 29.035 3.33333 20 3.33333ZM20 11.6667C22.8783 11.6667 25 13.7867 25 16.6667C25 19.5467 22.8783 21.6667 20 21.6667C17.1233 21.6667 15 19.5467 15 16.6667C15 13.7867 17.1233 11.6667 20 11.6667ZM11.49 27.9533C12.985 25.7533 15.4783 24.2867 18.3333 24.2867H21.6666C24.5233 24.2867 27.015 25.7533 28.51 27.9533C26.38 30.2333 23.3583 31.6667 20 31.6667C16.6416 31.6667 13.62 30.2333 11.49 27.9533Z"
              fill="#30D076" />
          </svg>

          <div>
            <span class="restaurant-review_name bd-block restaurant-detail_skeleton">Lorem ipsum</span>
            <span class="restaurant-review_date bd-block restaurant-detail_skeleton">Lorem ipsum</span>
          </div>
        </div>

        <p class="restaurant-review_review restaurant-detail_skeleton">Lorem ipsum dolor sit amet}</p>
      </div>
    </div>
  </div>

  <div class="restaurant-content_container">
    <form>
      <div class="restaurant-form">
        <input aria-label="enter your name" placeholder="Enter your name" type="text" id="input-name"
          class="restaurant-input" required>
      </div>

      <div class="restaurant-form">
        <textarea aria-label="enter your review" placeholder="Enter your review" id="input-review"
          class="restaurant-input" required></textarea>
      </div>

      <button type="submit" id="submit-review" class="restaurant-review_submit">Submit review</button>
    </form>
  </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button title="Like this restaurant" aria-label="like this restaurant" id="like-button"
    class="restaurant-detail_like">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 21C11.355 20.428 10.626 19.833 9.85501 19.2H9.84501C7.13001 16.98 4.05301 14.468 2.69401 11.458C2.24801 10.5 2.01101 9.45799 2.00001 8.39999C1.99853 7.68198 2.14052 6.9709 2.41765 6.30852C2.69478 5.64613 3.10147 5.0458 3.61382 4.54276C4.12617 4.03972 4.73387 3.64412 5.40122 3.37919C6.06858 3.11426 6.78214 2.98534 7.50001 2.99999C8.68064 3.00186 9.83585 3.34308 10.828 3.98299C11.264 4.26596 11.6584 4.60825 12 4.99999C12.344 4.60999 12.738 4.26799 13.173 3.98299C14.1647 3.34295 15.3197 3.00171 16.5 2.99999C17.2179 2.98534 17.9314 3.11426 18.5988 3.37919C19.2662 3.64412 19.8739 4.03972 20.3862 4.54276C20.8986 5.0458 21.3052 5.64613 21.5824 6.30852C21.8595 6.9709 22.0015 7.68198 22 8.39999C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.50001 4.99999C6.56852 4.98834 5.67008 5.34484 5.00001 5.99199C4.68047 6.30587 4.42728 6.68078 4.25549 7.09445C4.0837 7.50811 3.99682 7.95209 4.00001 8.39999C4.01101 9.16999 4.18601 9.92999 4.51201 10.628C5.15354 11.9267 6.01914 13.102 7.06901 14.1C8.06001 15.1 9.20001 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.9741 13.1236 18.8397 11.9485 19.481 10.65C19.813 9.94599 19.991 9.17799 20.001 8.39999C20.0029 7.95337 19.9154 7.51089 19.7434 7.09868C19.5715 6.68646 19.3187 6.31288 19 5.99999C18.3312 5.34991 17.4326 4.99048 16.5 4.99999C15.9373 4.99521 15.38 5.10955 14.8647 5.33551C14.3494 5.56146 13.8877 5.8939 13.51 6.31099L12 8.05099L10.49 6.31099C10.1123 5.8939 9.65064 5.56146 9.13531 5.33551C8.61999 5.10955 8.06268 4.99521 7.50001 4.99999Z"
        fill="white" />
    </svg>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button title="Unlike this restaurant" aria-label="unlike this restaurant" id="like-button"
    class="restaurant-detail_like">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 8.39999C1.99988 7.68236 2.1428 6.97191 2.4204 6.31014C2.69801 5.64838 3.10474 5.04859 3.61681 4.54582C4.12889 4.04306 4.73604 3.6474 5.40279 3.38198C6.06953 3.11657 6.78249 2.98671 7.5 3C8.34896 2.99549 9.18919 3.17146 9.96499 3.51627C10.7408 3.86107 11.4345 4.36682 12 5C12.5655 4.36682 13.2592 3.86107 14.035 3.51627C14.8108 3.17146 15.651 2.99549 16.5 3C17.2175 2.98671 17.9305 3.11657 18.5972 3.38198C19.264 3.6474 19.8711 4.04306 20.3832 4.54582C20.8953 5.04859 21.302 5.64838 21.5796 6.31014C21.8572 6.97191 22.0001 7.68236 22 8.39999C22 13.756 15.621 17.8 12 21C8.387 17.773 2 13.76 2 8.39999Z"
        fill="white" />
    </svg>
  </button>
`;

export {
	createRestaurantItemTemplate,
	createRestaurantDetailTemplate,
	createLikeRestaurantButtonTemplate,
	createUnlikeRestaurantButtonTemplate,
};
