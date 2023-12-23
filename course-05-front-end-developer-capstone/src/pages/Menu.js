import phoBo from '../images/Pho_Bo.jpg';
import bunCha from '../images/Bun_Cha.jpg';
import banhMi from '../images/Banh_Mi.jpg';

function Menu() {
    return (
        <section>
            <div className='menu-page'>
                <div className='menu-page-dishes'>
                    <article className="menu-page-dish">
                        <div>
                            <img src={phoBo}/>
                        </div>
                        <div>
                            <h3 className='dish-name'>Pho Bo</h3>
                            <h3 className='dish-price'>$37</h3>
                            <p className='dish-desc'>This is a Vietnamese noodle dish consisting of rice noodles, broth, meat and fresh herbs such as scallion, cilantro, and onion. Pho is served in a thick ceramic bowl when the broth is still boiling hot, and is sided with some fresh basils, bean sprouts, and a lime wedge.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </div>
                    </article>
                    <article className="menu-page-dish">
                        <div>
                            <img className="dish" src={bunCha}/>
                        </div>
                        <div>
                            <h3 className='dish-name'>Bun Cha</h3>
                            <h3 className='dish-price'>$35</h3>
                            <p className='dish-desc'>This is a Vietnamese dish, consists of rice vermicelli noodles (bun), grilled pork pieces (cha) and a broth that is both a marinade for the meat and a dip. It is usually eaten as street food or in restaurants that focus entirely on the art of bun cha. The Vietnamese eat it exclusively as a lunch dish.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </div>
                    </article>
                    <article className="menu-page-dish">
                        <div>
                            <img className="dish" src={banhMi}/>
                        </div>
                        <div>
                            <h3 className='dish-name'>Banh Mi</h3>
                            <h3 className='dish-price'>$17</h3>
                            <p className='dish-desc'>This is a Vietnamese sandwich. A banh mi traditionally is composed of a handful of ingredients: bread, meat, vegetables, and condiments. The bread is a Vietnamese baguette, which is characterized by a thin, crispy crust and airy crumb inside.</p>
                            <p className='dish-delivery'>Oder delivery <b>44</b></p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Menu;