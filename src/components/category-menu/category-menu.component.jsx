import DirectoryItem from '../directory-item/directory-item.component';

import categories from '../directories/categories.directory';

import './category-menu.styles.scss';

const CategoryMenu = () => {
  return (
    <div className='categories-container'>
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default CategoryMenu;
