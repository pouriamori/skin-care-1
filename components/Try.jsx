import ReactCompareImage from 'react-compare-image';

const Try = () => {
  return (
    <>
      <section>
        <div className="container pt-5">
          <div className="row py-5 align-items-center">
            <div className="col-md-6">
              <ReactCompareImage
                leftImage='/img (17).png'
                rightImage='/img (16).png'
                sliderPositionPercentage={0.5}
              />


            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-4 h4 text-center">
              <h2 className="fw-bold py-3">
                امتحان کن!
              </h2>
              <p className="py-3 lh-lg">
                کافیه فقط یک بار از محصولات ما استفاده کنی
              </p>
              <div className="text-center py-3">
                <button className="btn btn-outline-dark rounded-5">
                  مشاهده برندها
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Try