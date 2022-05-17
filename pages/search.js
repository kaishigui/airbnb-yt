import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
  return (
    <div>
        <Header />

        <main className='flex'>
            <section>
                <p className='text-xs'> 300+ Stays for 5 number of guest</p>

                <h1 className='text-3xl font-semibold mt-2 mb-6'> Stays in Mars</h1>

                <div className=''>
                    <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95 
                      active:bg-gray-100 transition transform duration-100
                      ease-out'>
                     Cancellation Flexibility
                    </p>
                    <p className='px-4 py-2 border rounded-full 
                      cursor-pointer hover:shadow-lg active:scale-95 
                      active:bg-gray-100 transition transform duration-100
                      ease-out'>
                      Type of Place    
                    </p>
                </div>
            </section>

        </main>
        <Footer />
    </div>
  )
}

export default search