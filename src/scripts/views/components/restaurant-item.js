import CONFIG from '../../globals/config';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      pictureId, name, rating, id, city, description,
    } = this._restaurant;

    this.innerHTML = `
      <a title="${name}" aria-label="${name}" href="${`/#/detail/${id}`}" class="restaurant-item_link bd-block">
        <div class="restaurant-item_header">
          <img data-src="${
            pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + pictureId : './placeholder.png'
          }" alt="${name}" width="100%" height="150px" class="restaurant-item_img lazyload">
        </div>

        <div class="restaurant-item_content">
          <h4 class="restaurant-item_name font-16">${name}</h4>
          <p class="restaurant-item_description">${description}</p>
          <div class="restaurant-item_info">
            <span class="restaurant-item_rating">
              <svg class="restaurant-item_icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.1891 5.51719L10.2219 4.94063L8.44847 1.34532C8.40003 1.24688 8.32034 1.16719 8.2219 1.11875C7.97503 0.996878 7.67503 1.09844 7.55159 1.34532L5.77815 4.94063L1.81097 5.51719C1.70159 5.53282 1.60159 5.58438 1.52503 5.6625C1.43247 5.75764 1.38146 5.88563 1.38322 6.01835C1.38498 6.15107 1.43936 6.27767 1.5344 6.37032L4.40472 9.16875L3.72659 13.1203C3.71069 13.2122 3.72086 13.3068 3.75595 13.3932C3.79105 13.4796 3.84966 13.5545 3.92514 13.6093C4.00062 13.6642 4.08995 13.6967 4.183 13.7034C4.27605 13.71 4.3691 13.6904 4.45159 13.6469L8.00003 11.7813L11.5485 13.6469C11.6453 13.6984 11.7578 13.7156 11.8657 13.6969C12.1375 13.65 12.3203 13.3922 12.2735 13.1203L11.5953 9.16875L14.4657 6.37032C14.5438 6.29375 14.5953 6.19375 14.611 6.08438C14.6532 5.81094 14.4625 5.55782 14.1891 5.51719V5.51719Z"
                  fill="#FFC400" />
              </svg>
              ${rating}
            </span>
            <span class="restaurant-item_city">${city}</span>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
