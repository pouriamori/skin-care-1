import { data } from '../lib/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const ProductsSlider = () => {

  const allProducts = data.slice();
  return (
    <>
      <section>
        <div className="container">
          <div className="row py-2">

            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={3}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 3
                },
                0: {
                  slidesPerView: 1
                }
              }}
            >
              {allProducts.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="col-md-12 px-4 py-2">
                      <div className="bg-white rounded-4 shadow d-flex products-slider-card">
                        <div className="col-7 position-relative overflow-hidden">
                          <img src={item.img} alt="" className="products-slider-image" />
                        </div>
                        <div className="col-5 text-start p-3">
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
                          <div className="px-2 pt-2">
                            <button className="btn btn-outline-dark rounded-5 btn-sm w-100">
                              خرید
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsSlider