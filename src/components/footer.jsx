import React from 'react'
import '../Styles/footer.css';

export default function Footer() {
  return (
    <div>
        <br/>
        <br/>
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">"Mana" is a dynamic online platform dedicated to delivering home-cooked meals straight to your doorstep. With a focus on quality, convenience, and community, Mana offers a diverse selection of freshly prepared dishes crafted by talented home cooks. Customers can explore an array of culinary delights ranging from traditional comfort foods to international cuisines, all made with love and care in home kitchens. Whether you're craving a taste of nostalgia or seeking new culinary adventures, Mana strives to satisfy every palate while fostering a sense of connection through shared meals. Experience the joy of homemade goodness with Mana – where delicious meals are just a click away.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="#">Breakfast</a></li>
              <li><a href="#">Full meals</a></li>
              <li><a href="#">Snacks</a></li>
              <li><a href="#">Fast Food</a></li>
              <li><a href="#">Italian</a></li>
      
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}
