import './footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="social-links-container">
                <ul>
                    <li>
                        <img src="icons/fcebook.svg" alt="facebook"/>
                    </li>
                    <li>
                    <img src="icons/instagram.svg" alt="instagram"/>
                        
                    </li>
                    <li>
                    <img src="icons/linkedin.svg" alt="linkedin"/>
                       
                    </li>
                    <li>
                    <img src="icons/twitter.svg" alt="twitter"/>
                       
                    </li>
                </ul>
            </div>
            <div className="subscribe-container">
                <input type="email" placeholder="Enter email address" />
                <button> Subscribe </button>
            </div>
        </div>
    )
}

export default Footer
