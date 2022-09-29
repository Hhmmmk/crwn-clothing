import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const NavigationHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={NavigationHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
