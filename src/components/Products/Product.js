import './product.css'

function Product() {
    return (
        <div className="Product">

            <div className="data-div" id="data-div">
                <div className="left">
                    <div className="visual" id="data-visual">
                        <img src="icons/data-left-one.svg" alt="" />
                        <img src="icons/data-left-two.svg" alt="" />
                    </div>
                    <div className="line-div">
                        <img src="images/line-img.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>Knowledge and Data</h1>
                    <p>
                        We are on a mission of collecting the world's entire knowledge. The advent of the
                        internet made the information easily available. We surely live in a world where every
                        individual has access to knowledge that was hard for any 100 years ago. We should be
                        thankful for the internet. But the next challenge elies in reliability, originality and
                        authenticity. The Internet is far from achieving any of those. Knowledge and information
                        has no meaning without these. We are on a mission to organize, structure and
                        authenticate information on the internet. 
                    </p>
                </div>
            </div>

            <div className="algo-div" id="algo-div">
                <div className="left">
                    <div className="visual" id="algo-visual">
                        <img src="icons/algo-left.svg" alt="" />
                    </div>
                    <div className="line-div" >
                        <img src="images/line-img.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>General Purpose AI/Algorithms</h1>
                    <p>
                    Like all great revolutions in human history, AI has to promise a lot to humanity.What we
                    hve seen is the tip of the iceberg. Every repetitive work will be and should be delegated
                    to machines. Humans are meant to be creative and only creative. We are working on a
                    wide range of algorithms to develop General Purpose AI for common use. Currently we
                    are Developing AI-Tutor.
                    </p>
                </div>
            </div>

            <div className="hardware-div" id="hardware-div">
                <div className="left">
                    <div className="visual" id="hardware-visual">
                        <img src="icons/hardware-left.svg" alt="" />
                    </div>
                    <div className="line-div">
                        <img src="images/line-img.png" alt="" />
                    </div>
                </div>
                <div className="right">
                <h1>Hardware</h1>
                    <p>
                    “People who care about software builds their own Hardware” <br />
                    To Support our Algorithms we are building a wide range of hardware devices to run
                    efficiently. We are beginning our journey from the ground. Currently we are building
                    XXXX -- A tablet device to support AI Tutor and pencil.

                    </p>
                </div>
            </div>

            <div className="income-div" id="income-div">
                <div className="left">
                    <div className="visual" id="algo-visual">
                        <img src="icons/income-left.svg" alt="" />
                    </div>
                    <div className="line-div">
                        <img src="images/line-img.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h1>Data Bank & Universal Basic Income</h1>
                    <p>
                    What technology has to offer and will offer to society is a big question? The only way to
                    know is to do it. Data is the new oil and everyone has the right to use their data-oil
                    effectively. We are building a data-intensive ecosystem where customers can get paid for
                    their data usage and they have full rights over how one can use it.
                    </p>
                </div>
            </div>
         
        </div>
    )
}

export default Product
