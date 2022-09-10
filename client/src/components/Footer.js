import '../styles/Footer.css'
const Footer = () => {
return (
    <div id='footer' >
        <div  id='footer-con'>
                 <ul id='help'>
                    <h2>Get help</h2>
                    <li>Help Center</li>
                    <li>Contact Aurther Support</li>
                    <li>Aurther Purchase Protection</li>
                    <li>Privacy settings</li>
                </ul>
                <ul id='footer-shop'>
                    <h2>Shop</h2>
                    <li>Gift cards</li>
                    <li>Sitemap</li>
                    <li>Aurther blog</li>
                    <li>Aurther United Kingdom</li>
                    <li>Aurther Germany</li>
                    <li>Aurther Canada</li>
                </ul>
                <ul id='footer-sell'>
                    <h2>Sell</h2>
                    <li>Sell on Aurther</li>
                    <li>Teams</li>
                    <li>Forums</li>
                    <li>Affiliates</li>
                </ul>
                <ul id='footer-about'>
                    <h2>About</h2>
                    <li>Aurther, Inc.</li>
                    <li>Policies</li>
                    <li>Investors</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
        </div>
        <div id='social-media-container'>
            <ion-icon className='shadow-pop-tr' name="logo-instagram"></ion-icon>
            <ion-icon className='shadow-pop-tr' name="logo-facebook"></ion-icon>
            <ion-icon className='shadow-pop-tr' name="logo-twitter"></ion-icon>
            <ion-icon className='shadow-pop-tr' name="logo-youtube"></ion-icon>
            <ion-icon className='shadow-pop-tr' name="logo-pinterest"></ion-icon>
        </div>
    </div>
)
}

export default Footer
