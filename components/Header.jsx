import { BsFillBagFill } from "react-icons/bs"
import { motion } from "framer-motion"

const Header = () => {

  const motionTransition = { duration: 3, type: 'spring' }

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row px-md-5 px-3">
            <div className="col-md-2 pt-4 row justify-content-between text-end pb-2">
              <div className="text-center text-md-end">
                <h2 className="fw-bold py-2 h1">
                  فروش ویژه
                </h2>
                <p>
                  فقط تا سه تیر ماه!
                </p>
              </div>
              <div className="d-none d-md-block">
                <h2 className="fw-bold py-2 h1">
                  500
                </h2>
                <p>
                  مشتری روزانه !
                </p>
              </div>
            </div>
            <div className="col-md-8 text-center row">
              <div className="col" />
              <motion.div
                className="grad-primary-light-4 shadow rounded-circle hero-circle position-relative"
                initial={{ bottom: '3rem' }}
                whileInView={{ bottom: '0rem' }}
                transition={motionTransition}
              >
                <img src="/img (18).png" alt=""
                  className="position-absolute bottom-0 end-0" />
                <div className="position-absolute hero-item w-50 d-none d-md-inline-block">
                  <ul className="d-flex text-center align-items-center">
                    <li className="col-8 bg-white rounded-4 p-2 shadow-lg ms-3 py-3">
                      با گارانتی 30 روزه
                    </li>
                    <li
                      className="col-4 bg-white p-2 shadow circle-4 shadow-lg border-5 border-dark border d-flex align-items-center justify-content-center">
                      <BsFillBagFill className='h3' />
                    </li>
                  </ul>
                </div>

              </motion.div>
              <div className="col" />
            </div>
            <div className="col-md-2 pt-4 row justify-content-between text-start">
              <div className="text-center text-md-start pb-2">
                <h2 className="fw-bold py-2 h1">
                  جدید ترین
                </h2>
                <p>
                  کرم های دنیا با تخفیف!
                </p>
              </div>
              <div className="d-none d-md-block">
                <h2 className="fw-bold py-2 h1">
                  120.000
                </h2>
                <p>
                  عضو فعال!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header