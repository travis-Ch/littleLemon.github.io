import {Link ,NavLink, Outlet} from 'react-router-dom'
import { users } from '../data/data'

//component


//image
import restaurantfoodMain from '../assets/restauranfoodMain.jpg'
import  MarioandAdrian1 from '../assets/MarioandAdrian-A.png'
import MarioandAdrian2 from '../assets/MarioandAdrian-b.png'
import RateStar from '../assets/RateStar.png'
import doublequote from '../assets/doublequote.png'
import userImage from '../assets/user.png'
import { lemonDessert, greekSalad, burger } from '../assets'
import RateStarYellow from '../assets/RateStarYellow.png'


export default function Home() {
  return (
    <>
        <section className="heroSection" id='hero'>
            <article>
                <img src={restaurantfoodMain} alt="restaurantImage" />
                <div className="container">
                    <div className="paragraph">
                        <div className="title">
                            <h1>Little Lemon</h1>
                            <h3>Chicago</h3>
                        </div>
                        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <Link to="/reservation" className='buttonCTA reserve'>Reserve a Table</Link>
                </div>
            </article>
        </section>

        <section className="menuSection" id='menu'>
            <article>
                <div className="menuHeader">
                    <h1>Menu</h1>
                    <Link to='/orderOnline' className='buttonCTA onlineMenu'>Online Menu</Link>
                </div>
                <hr />
                <div className='menuMain'>
                    <h5>Specials</h5>
                    <hr />
                    <MenuCard/>
                </div>
            </article>
        </section>

        <section className="testimonialsSection" id="testimoials">
                    <h1>Testimonials</h1>
                    <div className="testCardContainer">
                        <TestimonialsCard/>
                    </div>
        </section>

        <section className="aboutSection" id="aboutMe">
            <article>
                <div className="contentContainer">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.</p>
                </div>
                <div className="imgContainer">
                    <img src={MarioandAdrian1} alt="About-Mario" className='imgmario' />
                    <img src={MarioandAdrian2} alt="About-Adrian" className='imgadrian' />
                </div>
            </article>
        </section>
    </>
  )
}

function TestimonialsCard() {
    const cardList = users.map((user) =>
    <div className="card" key={user.id}>
        <div className="imgContainer">
            <img src={doublequote} alt="double-quote" className='quote' />
            <img src={RateStar} alt="rate-star" className='rate' />
        </div>
        <p className='comment'>{user.comment}</p>
        <div className="userInfoContainer">
            <img src={userImage} alt={user.imageID} className='userImg'/>
            <div className="titleContainer">
                <b>{user.name}</b>
                <p>{user.job}</p>
            </div>
        </div>
    </div>
    )
    return (
        <>
            {cardList}
        </>
    )
}

function MenuCard() {
    const menuCarditems = [
    {
        id:"1",
        imageID:lemonDessert,
        name:"Lemon Dessert",
        price:"12.00",
        link:"/orderOnline",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
    },
    {
        id:"2",
        imageID:greekSalad,
        name:"Greek Salad",
        price:"15.00",
        link:"/orderOnline",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
    },
    {
        id:"3",
        imageID:burger,
        name:"Hamburger",
        price:"16.00",
        link:"/orderOnline",
        description:"Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
    },
]
    const menuList = menuCarditems.map((menuItem) => 
    <div className="menuCard" key={menuItem.id}>
        <img src={menuItem.imageID} alt={menuItem.name}/>
        <div className="menu-body">
            <div className="menuHeader">
                <h6 className='menuName'>{menuItem.name}</h6>
                <h6 className='menuPrice'>{menuItem.price}</h6>
            </div>
            <img src={RateStarYellow} alt="menu-rate" />
            <p>{menuItem.description}</p>
            <Link to={menuItem.link} className='buttonCTA'>Order a delivery</Link>
        </div>
    </div>
    )

    return(
        <div className="menuCardContainer">{menuList}</div>
    )
}
