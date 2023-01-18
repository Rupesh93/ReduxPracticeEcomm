import React from "react";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
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
                <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Home;