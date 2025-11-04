import React from 'react'

export default function HowToPlay() {
  return (
    <div dir="rtl">
      <section 
      className="bg-white"
      data-aos="fade-up"
      >

        
        <div className='max-w-6xl mx-auto text-center'>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          طريقة لعب 
        </h2>

        {/* logo txt: */}
         <img
          src="/src/assets/images/meengaddhaTxt.svg"
          alt="Meengaddha Logo Text"
          className='w-28 md:w-36 mx-auto mb-6'
        />

        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 text-center"
          data-aos="zoom-in-up"
        >
          {/* Step 1 */}
          <div>
            <img
              src="/src/assets/images/hand.svg"
              alt="team"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">١. كونوا فريقكم</h3>
            <p className="text-gray-700">
              اجمعوا العائلة والأصدقاء وحددوا الفرق.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <img
              src="/src/assets/images/target.svg"
              alt="categories"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">٢. اختاروا الفئات</h3>
            <p className="text-gray-700">
              اختاروا نوع الأسئلة أو الفئات اللي تحبونها قبل بدء التحدي.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <img
              src="/src/assets/images/hourglass.svg"
              alt="play"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">٣. شغّلوا اللعبة وابدأوا اللعب</h3>
            <p className="text-gray-700">
              شغّلوا اللعبة على التلفزيون وابدأوا التحدي مع الضحك والمتعة!
            </p>
          </div>
        </div>
      
    </section>
        </div>
  )
}
