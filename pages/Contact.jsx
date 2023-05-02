import React from 'react';
// import GoogleMapReact from 'google-map-react';
const Contact = () => {
  return (
    <section>
      <div className='py-12 bg-indigo-950'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center text-gray-100 mb-8'>
            Contact Us
          </h2>

          <div className='flex flex-col md:flex-row'>
            {/* //form  */}
            <div className='md:w-1/2 p-4 '>
              <form action='' className='bg-white p-6 shadow-md rounded-lg'>
                <div className='mb-4'>
                  <label htmlFor='' className='block font-bold text-gray-700'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-400'
                    id=''
                    placeholder='your name here '
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='' className='block font-bold text-gray-700'>
                    Email
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-400'
                    id=''
                    placeholder='your email here'
                  />
                </div>
                <div className='mb-4'>
                  <label htmlFor='' className='block font-bold text-gray-700'>
                    Message
                  </label>
                  <textarea
                    rows='5'
                    className='w-full border border-gray-400'
                    id=''
                    placeholder='Enter your message here...'
                  />
                </div>
                <div className='text-center'>
                  <button className='bg-blue text-white py-2 px-4 rounded bg-blue-600'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* //goolemap  */}
            <div className='md:w-1/2 p-4'>
              <div style={{ height: '100%', width: '100%' }}>
                {/* <GoogleMapReact
                  gooleUrlKeye={{
                    key: 'My_Google_Map_key',
                  }}
                  defaultCenter={{
                    lat: 37.7749,
                    lng: -122.4194,
                  }}
                  defaultZoom={11}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
