Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.wait(1);
  I.see('Your Favorite Restaurant is Empty', '.content_heading');

  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.restaurant-item_link');
  I.click(locate('.restaurant-item_link').first());

  I.wait(1);
  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.wait(1);

  I.seeElement('.restaurant-item_link');
  I.click(locate('.restaurant-item_link').first());

  I.seeElement('#like-button');
  I.wait(1);
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.wait(1);
  I.see('Your Favorite Restaurant is Empty', '.content_heading');
});
