import React from 'react'

const Card = () => {
    return (
        <div> 
            <div class="" style={{ border: "2px solid #fff", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", width: "100%" }} >
               <br />
                <form method="post">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="profile-img h-75">
                                <img src="/girl.png" alt="" />
                            </div>
                            <div className="col-md-5">
                                <div className="profile-work my-2">
                                    <button style={{ padding: "4px", width: "100px", background: "transparent", borderRadius: "10px" }}>See Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="profile-head text-center">
                                <h5>Kshiti Ghelani</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11" style={{
                            marginTop: "-130px",
                            marginLeft: "160px",
                            background: "transparent",
                            display: "flex",
                        }}>

                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                        </div>
                        <hr style={{ width: "60%", margin: "-60px auto" }} />
                        <br />
                        <div className="col-md-11" style={{
                            marginTop: "-60px",  // Adjust the margin-top value as needed
                            marginLeft: "160px",
                            background: "transparent",
                            display: "flex"
                        }}>

                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                            <table className="table" >
                                <p>Nationality</p>
                                <p>India</p>
                            </table>
                        </div>
                    </div>
                </form>

                <br />    <br />
                <div className='row'>
                    <div className='col-lg-10 mx-5'>
                        <h2 className='col-lg-10 mx-3'>Write Your Response </h2>

                    </div>

                    <div class="col-12 col-md-10 mx-auto" style={{ backgroundColor: "rgba(227, 227, 227, 1)", padding: "15px" }}>
                        Thank You
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col-lg-3'>
                        <button className='btn btn-secondary mx-4'>Reject Request</button>
                    </div>
                    <div className='col-lg-4 offset-lg-4 d-flex justify-content-end'>
                        <button className='btn btn-light mx-2 ' style={{ border: "2px solid rgba(78, 90, 94, 1)" }}>Accept Request</button>
                        <button className='btn btn-success'>Send</button>
                    </div>
                </div>
                <br />
            </div>
        </div>


    )
}

export default Card