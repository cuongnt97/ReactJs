import React from "react";

export default function Home() {
  return (
    <section>
      <section id="banner">
        <h4>New Men Collection</h4>
        <h2>KASHMIR</h2>

        <button>Shop now</button>
      </section>

      <div id="category">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="category-card first">
                <h3>Men's Watch</h3>
                <a href="./Men.html">
                  <i className="fa-regular fa-right-long right-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="category-card second">
                <h3>Women's Watch</h3>
                <a href="./women.html">
                  <i className="fa-regular fa-right-long right-icon"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-12">
              <div className="category-card third">
                <h3>Accessories</h3>
                <i className="fa-regular fa-right-long right-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
