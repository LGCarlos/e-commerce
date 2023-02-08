const BUTTON_TYPE = {
  detail: 'Detail',
  more: 'See more',
  back: 'Go back',
  add: 'Add to cart',
};

const PATH = {
  home: '/',
  detail: '/detail',
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
const DESCRIPTION = 'Description';

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
};
