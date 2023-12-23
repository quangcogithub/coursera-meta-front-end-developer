import chef from '../images/Restaurant_Chef.jpg';
import user from '../images/pngwing.png';
import restaurant from '../images/Restaurant.jpg';
import phoBo from '../images/Pho_Bo.jpg';
import bunCha from '../images/Bun_Cha.jpg';
import banhMi from '../images/Banh_Mi.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function clickReserveTable() {
        navigate("/booking");
    }

    function clickAllDishes() {
        navigate("/menu");
    }

    return (
        <>
            <section className='section-hero'>
                <div className='hero'>
                    <div className='hero-desc'>
                        <h2>Little Lemon</h2>
                        <h3>Hanoi</h3>
                        <p>These are the most delicious and unique dishes of Vietnam that have been famous in international media.</p>
                        <button onClick={clickReserveTable}>Reserve Table</button>
                    </div>
                    <div className='hero-avatar'>
                        <img src={chef}/>
                    </div>
                </div>
            </section>
            <section className='section-highlight'>
                <div className='highlight'>
                    <div className='highlight-title'>
                        <h2>Specials</h2>
                        <button onClick={clickAllDishes}>All</button>
                    </div>
                    <div className='highlight-dishes'>
                        <article className="highlight-dish">
                            <img src={phoBo}/>
                            <div className='dish-head'>
                                <h3 className='dish-name'>Pho Bo</h3>
                                <h3 className='dish-price'>$37</h3></div>
                            <p className='dish-desc'>This is a Vietnamese noodle dish consisting of rice noodles, broth, meat and fresh herbs such as scallion, cilantro, and onion. Pho is served in a thick ceramic bowl when the broth is still boiling hot, and is sided with some fresh basils, bean sprouts, and a lime wedge.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </article>
                        <article className="highlight-dish">
                            <img className="dish" src={bunCha}/>
                            <div className='dish-head'>
                                <h3 className='dish-name'>Bun Cha</h3>
                                <h3 className='dish-price'>$35</h3></div>
                            <p className='dish-desc'>This is a Vietnamese dish, consists of rice vermicelli noodles (bun), grilled pork pieces (cha) and a broth that is both a marinade for the meat and a dip. It is usually eaten as street food or in restaurants that focus entirely on the art of bun cha. The Vietnamese eat it exclusively as a lunch dish.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </article>
                        <article className="highlight-dish">
                            <img className="dish" src={banhMi}/>
                            <div className='dish-head'>
                                <h3 className='dish-name'>Banh Mi</h3>
                                <h3 className='dish-price'>$17</h3></div>
                            <p className='dish-desc'>This is a Vietnamese sandwich. A banh mi traditionally is composed of a handful of ingredients: bread, meat, vegetables, and condiments. The bread is a Vietnamese baguette, which is characterized by a thin, crispy crust and airy crumb inside.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </article>
                    </div>
                </div>
            </section>
            <section className='section-testimonials'>
                <div className='testimonials'>
                    <div className='testimonial-title'>
                        <h2>Testimonials</h2>
                    </div>
                    <div className='testimonial-ratings'>
                        <article className="testimonial-rating">
                            <h3>Rating</h3>
                            <div>
                                <img className="user-image" src={user}/>
                                <p className="user-name">Nguyen Van A</p>
                            </div>
                            <p className="user-comment">Good</p>
                        </article>
                        <article className="testimonial-rating">
                            <h3>Rating</h3>
                            <div>
                                <img className="user-image" src={user}/>
                                <p className="user-name">Tran Van B</p>
                            </div>
                            <p className="user-comment">Good</p>
                        </article>
                        <article className="testimonial-rating">
                            <h3>Rating</h3>
                            <div>
                                <img className="user-image" src={user}/>
                                <p className="user-name">Le Thi C</p>
                            </div>
                            <p className="user-comment">Good</p>
                        </article>
                        <article className="testimonial-rating">
                            <h3>Rating</h3>
                            <div>
                                <img className="user-image" src={user}/>
                                <p className="user-name">Vu Thi D</p>
                            </div>
                            <p className="user-comment">Good</p>
                        </article>
                    </div>
                </div>
            </section>
            <section className='section-about'>
                <div className='about'>
                    <div className='about-desc'>
                        <h2>Little Lemon</h2>
                        <h3>Hanoi</h3>
                        <p>Attractive dishes from Vietnam, providing a wonderful culinary experience.</p>
                    </div>
                    <div className='about-avatar'>
                        <img src={restaurant}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;