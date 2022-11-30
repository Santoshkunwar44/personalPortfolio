
import Sliders from 'infinite-react-carousel';
import { useEffect, useState } from 'react';
import Project from '../../local/project/Project';
const Slider = ({ item }) => {
    const [slidersItems, setSlidersItems] = useState([])
    useEffect(() => {
        setSlidersItems(item.map((itemssss, index) => <Project index={index} item={itemssss} />))


    }, [item])
    return (
        <>
            {
                slidersItems.length > 0 &&
                <Sliders dotsClass={"carousel-dots"} arrows={false} dots={true} infinite={true} slidesToShow={3} autoplay={true} initalSlide={true} interval={2000} className="react-slider-projects">
                    {slidersItems}
                </Sliders>
            }

        </>
    )
}

export default Slider