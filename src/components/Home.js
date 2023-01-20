import React from "react";

const Home = (props) => {
    console.log(props)
    return (
        <>
            <div className="card-container">
                <div className="add-to-cart">
                    <span style={{ fontWeight: 'bold', background: 'red', height: '23px', width: '23px', borderRadius: '50%', color: '#fff' }}>{props.data.length}</span>
                    <img src="https://www.freeiconspng.com/thumbs/cart-icon/shopping-cart-icon-19.png" />
                </div>
                <h2>Redux</h2>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3eMsvXGJXNJF4woNGXa4QHvTwcLcdgKIvP3VWXiydSawoH7nSmj4bZw47N8SfoHUulQ&usqp=CAU' alt='kknjb' />
                    </div>
                    <div className="text-wrapper item">
                        <span>
                            I-Phone
                        </span>
                        <span>Price: $1000.00</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button
                            onClick={() => { props.addToCartHandler({ price: 1000, name: 'i-phone11' }) }}>
                            Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;