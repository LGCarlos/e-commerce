const BUTTON_TYPE = {
  detail: 'Detail',
  more: 'See more',
  back: 'Go back',
  add: 'Add to cart',
};

const PATH = {
  home: '/',
  detail: '/detail',
  cart: '/cart',
};

const SELECT_ID = {
  colors: 'colorCode',
  storages: 'storageCode',
};

const CRUMBS = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Detail',
    path: '/detail',
  },
];

const START = 0;
const ITEMS_DISPLAYED = 20;

const PLACEHOLDER = 'Find a product...';
const NO_RESULTS = 'Not matched results';
const LOGO_TEXT = 'Company logo';
const BASKET_TEXT = 'Basket image';
const GITHUB_TEXT = 'Github icon';
const LINKEDIN_TEXT = 'Linkedin icon';
const DESCRIPTION = 'Description';

const FOOTER_DESCRIPTION = 'e-Commerce Powered by LGCarlos';
const GITHUB = 'https://github.com/LGCarlos/';
const LINKEDIN = 'https://www.linkedin.com/in/carlos-js-lopez';

module.exports = {
  BUTTON_TYPE,
  PATH,
  START,
  ITEMS_DISPLAYED,
  PLACEHOLDER,
  NO_RESULTS,
  LOGO_TEXT,
  BASKET_TEXT,
  DESCRIPTION,
  SELECT_ID,
  CRUMBS,
  GITHUB_TEXT,
  LINKEDIN_TEXT,
  FOOTER_DESCRIPTION,
  GITHUB,
  LINKEDIN,
};
