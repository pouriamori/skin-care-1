import { data } from '../lib/data';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react'

const FilteredProducts = () => {

  const [parent] = useAutoAnimate();

  const allProducts = data.slice();
  const wetProducts = allProducts.filter((item) => item.for === 'پوست چرب');
  const dryProducts = allProducts.filter((item) => item.for === 'پوست خشک');
  const normalProducts = allProducts.filter((item) => item.for === 'پوست معمولی');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);


  const [allClicked, setAllClicked] = useState(true);
  const [wetClicked, setWetClicked] = useState(false);
  const [dryClicked, setDryClicked] = useState(false);
  const [normalClicked, setNormalClicked] = useState(false);
  const resetClicked = () => {
    setAllClicked(false);
    setWetClicked(false);
    setDryClicked(false);
    setNormalClicked(false);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src="/img (20).png" alt="" className="img-arrow-1 d-none d-md-inline-block" />
              <h2 className="fw-bold">
                جدیدترین محصولات ما
              </h2>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-md-10 row p-2" ref={parent}>

              {filteredProducts.map((item, index) => {
                return (
                  <div className="col-md-4 px-4 py-3" key={index}>
                    <div className="products-slider-card bg-white rounded-4 shadow d-flex overflow-hidden">
                      <div className="col-6 position-relative">
                        <img src={item.img} alt="" className="products-slider-image" />
                      </div>
                      <div className="col-6 text-start p-3">
                        <h4 className="fw-bold py-2">
                          {item.title}
                        </h4>
                        <p className="small">
                          {item.for}
                        </p>
                        <p className="d-flex align-items-center justify-content-between pt-4">
                          <span className="h2 fw-bold">{item.price}</span>
                          <span className="small">هزارتومان</span>
                        </p>
                        <div className="p-2">
                          <button className="btn btn-outline-dark rounded-5 btn-sm w-100">
                            خرید
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}



            </div>

            <div className="col-md-2 p-2 d-none d-md-block">
              <ul className="lh-lg text-start px-2">
                <li className="h4 py-2">
                  <button
                    className={`btn btn-lg rounded-5 ${allClicked ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => {
                      resetClicked()
                      setAllClicked(true)
                      setFilteredProducts(allProducts)
                    }}>
                    همه
                  </button>
                </li>
                <li className="h4 py-2">
                  <button
                    className={`btn btn-lg rounded-5 ${wetClicked ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => {
                      resetClicked()
                      setWetClicked(true)
                      setFilteredProducts(wetProducts)
                    }}>
                    پوست چرب
                  </button>
                </li>
                <li className="h4 py-2">
                  <button
                    className={`btn btn-lg rounded-5 ${dryClicked ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => {
                      resetClicked()
                      setDryClicked(true)
                      setFilteredProducts(dryProducts)
                    }}>
                    پوست خشک
                  </button>
                </li>
                <li className="h4 py-2">
                  <button
                    className={`btn btn-lg rounded-5 ${normalClicked ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => {
                      resetClicked()
                      setNormalClicked(true)
                      setFilteredProducts(normalProducts)
                    }}>
                    پوست معمولی
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FilteredProducts