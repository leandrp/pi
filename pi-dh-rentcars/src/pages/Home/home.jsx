import './styleHome.scss'
import { ProductCategory } from '../../components/ProductCategory/productcategory'
import SearchBlock from '../../components/SearchBlock/searchBlock'
import { CardRecomendation } from '../../components/CardRecomendation/CardRecomendation'

export function Home() {
  return (
    <div className="content">
      <SearchBlock />
      <ProductCategory />
      <CardRecomendation />
    </div>
  )
}
