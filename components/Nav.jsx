import Link from 'next/link';
import { useState } from 'react';
import { BsList } from "react-icons/bs"


const Nav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className=''>
        <div className="container">
          <div className="row py-4 align-items-center d-none d-md-flex">
            <div className="col-md-2">
              <div className='px-4'>
                <input type="text" className='form-control py-1 border-0' placeholder='جستجو...' />
              </div>
            </div>
            <div className="col-md-8">
              <ul className='d-flex'>
                <Link href={'/'}>
                  <li className='trans-all px-2'>
                    خانه
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className='trans-all px-2'>
                    جدید ترین ها
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className='trans-all px-2'>
                    برند ها
                  </li>
                </Link>
                <Link href={'/'}>
                  <li className='trans-all px-2'>
                    تماس با ما
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-2">
              <p className='text-start fw-bold h5'>
                Lorem.ir
              </p>
            </div>
          </div>
        </div>
        {/* نوبار موبایل */}
        <div className="row w-100 d-md-none">
          <div className="col-6">
            <div
              className={`bg-primary p-3 shadow-lg w-50 h-100 mobile-menu ${mobileMenu ? 'd-md-none' : 'd-none'}`}>
              <ul className='text-center'>
                <li className='py-2'>
                  <div className='h5 p-1'>
                    Lorem.ir
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    خانه
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    جدیدترین ها
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    برند ها
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    تماس با ما
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    ثبت نام
                  </div>
                </li>
                <li className='py-2'>
                  <div className='h3 rounded-3 bg-transparent-4 p-3'>
                    ورود
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 p-3">
            <div className='text-start'>
              <button
                className='btn btn-primary btn-lg shadow-lg text-white'
                onClick={() => { setMobileMenu(!mobileMenu) }}
              >
                <BsList className='h1' />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav