import MealItem from './MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'cheese rocket',
    description: 'half mozzarella & half sausage',
    price: 6.5,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/78ae7879-0e8e-4594-9fbc-1040fce8d6f2_d3.jpg',
  },
  {
    id: 'm2',
    name: 'mighty potato',
    description: 'sausage coated with potato',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/f12716ef-6ad4-4ba8-88ba-9b578abcc79a_d3.jpg',
  },
  {
    id: 'm3',
    name: 'mighty kumara',
    description: 'sausage coated with kumara',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/7d96d4e3-8996-4916-a314-268837a084f1_d3.jpg',
  },
  {
    id: 'm4',
    name: 'giant',
    description: 'extra large chicken sausage',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/2381590a-b7e2-4fe1-ab1e-8a2e3bbd0e0b_d3.jpg',
  },
  {
    id: 'm5',
    name: 'original',
    description: 'chicken sausage',
    price: 5,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/07a3253a-9c66-428e-86b5-677e35d322ba_d3.jpg',
  },
  {
    id: 'm6',
    name: 'mozza potato',
    description: 'mozzarella coated with potato',
    price: 8,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/862e762d-7f80-4564-b43d-3c7f614452b9_d3.jpg',
  },
  {
    id: 'm7',
    name: 'mozza kumara',
    description: 'mozzarella coated with kumara',
    price: 8,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/ab35d153-eded-4f6f-b401-0cfd0fef75ad_d3.jpg',
  },
  {
    id: 'm8',
    name: 'mozzarella',
    description: 'mozzarella cheese',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/0850c016-9789-400d-83f7-786e000549f9_d3.jpg',
  },
  {
    id: 'm9',
    name: 'crunch bites',
    description: 'mozzarella coated with cereal',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/23f1bfd3-cf08-4472-84b2-71ba9de9a378_d3.jpg',
  },
  {
    id: 'm10',
    name: 'nacho',
    description: 'mozzarella coated with nacho',
    price: 7,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/28333a17-fe75-45f1-bc00-041f16f1b20c_d3.jpg',
  },

  {
    id: 'm11',
    name: 'chocolate',
    description: 'moro chocolate',
    price: 6,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/0ab4a00d-28f3-4497-9f17-c56adf1aa6b7_d3.jpg',
  },
  {
    id: 'm12',
    name: 'choco peanut',
    description: 'snickers chocolate',
    price: 6,
    img: 'https://d2vwsr3mua7yp8.cloudfront.net/61641070-5b4a-4ac5-8cac-d382c14aa1f9_d3.jpg',
  },
];

const AvailableMeals = props => {
  const mealList = DUMMY_MEALS.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      img={meal.img}
    />
  ));

  return (
    <section>
      <ul>{mealList}</ul>
    </section>
  );
};
export default AvailableMeals;
