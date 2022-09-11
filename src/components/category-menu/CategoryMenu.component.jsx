import CategoryItem from '../category-item/category-item.component';

import categories from '../directories/categories.directory';

const CategoryMenu = () => {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  )
}

export default CategoryMenu;