import './styleHome.scss'
import { Card } from '../../components/Card/card'
import SearchBlock from '../../components/SearchBlock/searchBlock'
import { CardRecomendation } from '../../components/CardRecomendation/cardRecomendation'

export function Home() {
  return (
    <div className="content">
      <SearchBlock />
      <Card />
      <CardRecomendation />
    </div>
  )
}
