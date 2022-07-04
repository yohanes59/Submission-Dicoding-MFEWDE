Feature('Reviewing Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Reviewing one restaurant', async ({ I }) => {
  I.wait(1);
  I.see('Your Favorite Restaurant is Empty', '.content_heading');

  I.amOnPage('/');

  I.wait(2);
  I.seeElement('.restaurant-item_link');
  I.click(locate('.restaurant-item_link').first());

  I.wait(1);
  I.seeElement('#input-name');
  I.click('#input-name');
  I.type('Bejo', 100);

  I.seeElement('#input-review');
  I.click('#input-review');
  I.type('Tempatnya bagus, Makanannya Enak, puas banget makan disini!', 100);

  I.seeElement('#submit-review');
  I.click('#submit-review');
});
