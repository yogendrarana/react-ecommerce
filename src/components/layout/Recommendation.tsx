import { useState, useRef, RefObject } from 'react'

// import data
import data from '../../data/data'

// import components
import Card from '../utils/Card'

// menus
const menus = ['Trending', "Popular"];

const Recommendation = () => {
    const [recommendation, setRecommendation] = useState(menus[0]);

    const recommendRef: RefObject<HTMLElement> = useRef(null);

    // scroll to recommendations
    const handleMenuClick = (mnu: string) => {
        setRecommendation(mnu)
    };

    if (data && !data[0]) {
        return
    }

    return (
        <>
            <section ref={recommendRef} className="px-[10rem]">
                <ul className='flex gap-[2.5rem] items-center justify-center'>
                    {
                        menus.map((menu, index) =>
                            <li key={index}>
                                <button 
                                    onClick={() => handleMenuClick(menu)} 
                                    className={`mb-[2rem] text-[3rem] duration-300 ${menu === recommendation ? "text-black" : "text-[#b2beb5] "}`} 
                                >
                                    {menu}
                                </button>
                            </li>
                        )
                    }
                </ul>


                <div className="grid grid-cols-4 gap-[1rem]">
                    {recommendation === menus[0] && data.slice(0, 4).map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })}

                    {recommendation === menus[1] && data.slice(0, 4).map((item, index) => {
                        return (
                            <Card key={index} item={item} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Recommendation;