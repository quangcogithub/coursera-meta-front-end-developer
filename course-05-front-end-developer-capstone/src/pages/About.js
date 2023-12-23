import restaurant from '../images/Restaurant.jpg';

function About() {
    return (
        <section className='section-about-page'>
            <div className='about-page'>
                <div className='about-page-avatar'>
                    <img src={restaurant}/>
                </div>
                <div className='about-page-desc'>
                    <h2>Little Lemon</h2>
                    <h3>Hanoi</h3>
                    <p>Attractive dishes from Vietnam, providing a wonderful culinary experience.</p>
                </div>
            </div>
        </section>
    )
}

export default About;