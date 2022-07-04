import CONFIG from "../../globals/config";

class RestaurantDetail extends HTMLElement {
	set restaurantDetail(restaurantDetail) {
		this._restaurantDetail = restaurantDetail.restaurant;
		this.render();
	}

	render() {
		const {
			pictureId,
			name,
			categories,
			address,
			city,
			rating,
			description,
			menus,
			customerReviews,
		} = this._restaurantDetail;

		this.innerHTML = `
      <div class="restaurant-detail_header">
        <img data-src="${pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + pictureId : "./placeholder.png"}" 
        alt="${name}" width="100%" height="250px" class="restaurant-detail_img lazyload">

        <div id="like-button-container" class="like_button_container"></div>
      </div>

      <div>
        <div class="restaurant-content_container">
          <h2 class="restaurant-detail_name font-18">${name}</h2>

          <div class="restaurant-detail_categories">${categories.map((category) => `
              <span class="restaurant_category">${category.name}</span>
            `).join(" . ")}
          </div>

          <div class="restaurant-detail_rating">
            <svg class="restaurant-detail_icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.1891 5.51719L10.2219 4.94063L8.44847 1.34532C8.40003 1.24688 8.32034 1.16719 8.2219 1.11875C7.97503 0.996878 7.67503 1.09844 7.55159 1.34532L5.77815 4.94063L1.81097 5.51719C1.70159 5.53282 1.60159 5.58438 1.52503 5.6625C1.43247 5.75764 1.38146 5.88563 1.38322 6.01835C1.38498 6.15107 1.43936 6.27767 1.5344 6.37032L4.40472 9.16875L3.72659 13.1203C3.71069 13.2122 3.72086 13.3068 3.75595 13.3932C3.79105 13.4796 3.84966 13.5545 3.92514 13.6093C4.00062 13.6642 4.08995 13.6967 4.183 13.7034C4.27605 13.71 4.3691 13.6904 4.45159 13.6469L8.00003 11.7813L11.5485 13.6469C11.6453 13.6984 11.7578 13.7156 11.8657 13.6969C12.1375 13.65 12.3203 13.3922 12.2735 13.1203L11.5953 9.16875L14.4657 6.37032C14.5438 6.29375 14.5953 6.19375 14.611 6.08438C14.6532 5.81094 14.4625 5.55782 14.1891 5.51719V5.51719Z"
                fill="#FFC400" />
            </svg>
            ${rating}
          </div>
        </div>

        <div class="restaurant-content_container">
          <h3 class="restaurant-detail_title font-16">Restaurant Info</h3>

          <div class="restaurant-content_location">
            <h4 class="restaurant-detail_subtitle">Location</h4>
            <span class="restaurant-detail_location bd-block">${address}, ${city}</span>
          </div>

          <div>
            <h4 class="restaurant-detail_subtitle">About this restaurant</h4>
            <p class="restaurant-detail_description">${description}</p>
          </div>
        </div>

        <div class="restaurant-content_container">
          <h3 class="restaurant-detail_title font-16">Menu</h3>

          <div class="restaurant-content_menu">
            <div>
              <h4 class="restaurant-detail_subtitle">Foods</h4>

              <ul class="restaurant-menu_list">
                ${menus.foods.map((food) => `
                  <li class="restaurant-menu_item">${food.name}</li>
                `).join("")}
              </ul>
            </div>

            <div>
              <h4 class="restaurant-detail_subtitle">Drinks</h4>

              <ul class="restaurant-menu_list">
                ${menus.drinks.map((drink) => `
                  <li class="restaurant-menu_item">${drink.name}</li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>

        <div class="restaurant-content_container">
          <h3 class="restaurant-detail_title font-16">Reviews</h3>

          <div class="restaurant-content_reviews">
            ${customerReviews.map((customerReview) => `
              <div class="restaurant-detail_review">
                <div class="restaurant-review_header">
                  <svg class="restaurant-review_icon" width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 3.33333C10.965 3.33333 3.33331 10.965 3.33331 20C3.33331 29.035 10.965 36.6667 20 36.6667C29.035 36.6667 36.6666 29.035 36.6666 20C36.6666 10.965 29.035 3.33333 20 3.33333ZM20 11.6667C22.8783 11.6667 25 13.7867 25 16.6667C25 19.5467 22.8783 21.6667 20 21.6667C17.1233 21.6667 15 19.5467 15 16.6667C15 13.7867 17.1233 11.6667 20 11.6667ZM11.49 27.9533C12.985 25.7533 15.4783 24.2867 18.3333 24.2867H21.6666C24.5233 24.2867 27.015 25.7533 28.51 27.9533C26.38 30.2333 23.3583 31.6667 20 31.6667C16.6416 31.6667 13.62 30.2333 11.49 27.9533Z"
                      fill="#30D076" />
                  </svg>

                  <div>
                    <span class="restaurant-review_name bd-block">${customerReview.name}</span>
                    <span class="restaurant-review_date bd-block">${customerReview.date}</span>
                  </div>
                </div>

                <p class="restaurant-review_review">${customerReview.review}</p>
              </div>
            `).join("")}
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
	}
}

customElements.define("restaurant-detail", RestaurantDetail);
