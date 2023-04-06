import { useState } from 'react';
import { ProductCategory } from '../../components/ProductCategory/productcategory';
import SearchBlock from '../../components/SearchBlock/searchBlock';
import { CardRecomendation } from '../../components/CardRecomendation/CardRecomendation';
import './styleHome.scss';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="content">
      <SearchBlock />
      <ProductCategory onSelectCategory={setSelectedCategory} />
      <CardRecomendation selectedCategory={selectedCategory} />
    </div>
  );
}

