import { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'


export function FavoriteButton({ car }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <p onClick={handleToggleFavorite}>
      {isFavorite ? (
        <AiFillHeart className="favorite" />
      ) : (
        <AiOutlineHeart className="not-favorite" />
      )}
    </p>
  )
}
