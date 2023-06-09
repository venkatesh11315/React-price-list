import React from "react";


function CardView() {
    return (
        <div>
            <div class="container">
                <h1 style={{ textAlign: "center" }}>
                    Pricing Table
                </h1>
                <p style={{ textAlign: "center" }}>
                    The list price is the price that the manufacturer of an item
                    suggests that a store should charge for it  Pricing Table
                </p>
                <div className="row">
                    {/* card 1 */}
                    <div className="col-4">
                        <div className="card  border-secondary" style={{ textAlign: "center" }}>
                            <h1 className="card-titla">
                                BASIC
                            </h1>
                            <hr />
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p><b>Full suppport:</b> No</p>
                            <p><b>Duraction:</b> 30Days</p>
                            <p><b>Stroge:</b> 10GB</p>
                            <h1>₹250</h1>
                            <button className="btn   mt-1 mb-2  btn-secondary" style={{borderRadius:"40px"}}>BUY NOW</button>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="col-4">
                        <div className="card border-info " style={{ textAlign: "center" }}>

                            <h1 className="card-titla" >PRO</h1>
                            <hr />
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p><b>Full suppport: </b> Yes</p>
                            <p><b>Duraction:</b> 60Days</p>
                            <p><b>Stroge:</b> 100GB</p>
                            <h1>₹300</h1>
                            <button type="button" className="btn btn-info mt-1 mb-2  " style={{borderRadius:"40px"}}>BUY NOW</button>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="col-4" style={{ textAlign: "center" }}>
                        <div className="card border-secondary mb-4">
                            <h1 className="card-titla">PERMINIUM</h1>
                            <hr />
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p><b>Full suppport:</b> Yes</p>
                            <p><b>Duraction:</b> 120Days</p>
                            <p><b>Stroge:</b> 150GB</p>
                            <h1>₹600</h1>
                            <button className="btn  mt-1 mb-2 btn-secondary" style={{borderRadius:"40px"}}>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default CardView;