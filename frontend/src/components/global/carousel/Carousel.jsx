
import Sliders from 'infinite-react-carousel';
import { useEffect, useState } from 'react';
import Project from '../../local/project/Project';
const Slider = ({ item }) => {
    const [slidersItems, setSlidersItems] = useState([])
    useEffect(() => {
        setSlidersItems(item.map((itemssss, index) => <Project index={index} item={itemssss} />))
    }, [item])

    const [noOfItems, setNumOfItems] = useState(3)


    useEffect(() => {
        window.addEventListener("resize", handleItems)

        return () => window.removeEventListener("resize", handleItems)
    })


    useEffect(() => {
        handleItems()




    }, [])

    const handleItems = () => {
        const innerWith = window.innerWidth;


        if (innerWith < 768 && innerWith > 600) {
            setNumOfItems(3)
        } else if (innerWith < 600) {
            setNumOfItems(2)
        } else if (innerWith > 1200) {
            setNumOfItems(4)
        }
    }

    return (
        <>
            {
                slidersItems.length > 0 &&
                <Sliders dotsClass={"carousel-dots"} centerMode={(noOfItems === 2 || noOfItems === 3) ? false : true} arrows={false} dots={true} infinite={true} slidesToShow={noOfItems} autoplay={true} initalSlide={true} interval={2000} className="react-slider-projects">
                    {slidersItems}
                </Sliders>
            }

        </>
    )
}

export default Slider