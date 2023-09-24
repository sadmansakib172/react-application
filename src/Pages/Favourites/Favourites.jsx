import { useEffect, useState } from "react";
import FavouritesCard from "./FavouritesCard";


const Favourites = () => {

    const [favorites, setFavorites] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow]= useState(false)
    const [totalPrice, setTotalPrice]= useState(0)

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        if (favoriteItems) {
            setFavorites(favoriteItems)
            const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)
            setTotalPrice(total)
        }
        else {
            setNoFound('NO Data Found')
        }
    }, [])
    console.log(favorites)

    const handleRemove = ()=>{
        localStorage.clear()
        setFavorites([])
        setNoFound('NO Data Found')
    }
    return (
        <div>
          {noFound ? (
            <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
          ) : (
            <div>
              {favorites.length > 0 && (
                <div>
                    <button
                  onClick={handleRemove}
                  className="px-5 bg-green-200 block mx-auto"
                >
                  Deleted All favorites
                </button>
                <h2>Total Price: {totalPrice}</h2>
   
                </div>
              )}
    
              <div className="grid grid-cols-2 gap-5">
                {
                    isShow ? favorites.map((phone) => (
                        <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                      )) 
                      
                      : favorites.slice(0,2).map((phone) => (
                        <FavouritesCard key={phone.id} phone={phone}></FavouritesCard>
                      ))
                }
              </div>
    
              {favorites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                {isShow ? 'see less' : 'see more'}
              </button>}
            </div>
          )}
        </div>
      );
    };
    
export default Favourites;