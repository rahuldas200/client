import React from 'react'
import videoUpload from '../assets/videoUpload.png'

const Steps = () => {

    const steps = [
        {
            step:"step 1 : Copy the link",
            do:"Go instragram ,copy the video link"
        },
        {
            step:"step 2 : Paste the link",
            do:"Come back here , past the link"
        }, 
        {
            step:"step 3 : Click download button",
            do:"Click on the download button"
        },
        {
            step:"step 4 : Save the video",
            do:"The video will be saved to your device"
        }
    ];

  return (
    <div className='w-11/12 mx-auto  mb-10 border-b-[1px] border-b-richblack-500'>
        <h1 className='text-3xl text-richblack-25 font-bold  mt-4 text-center max-sm:mb-7'>How its Works</h1>
        <div className='flex gap-10 mt-6 m-10 max-sm:flex-col max-sm:m-2'>
            <div className='flex gap-7  w-6/12 justify-center max-sm:w-full max-sm:gap-3 max-sm:justify-start'>         
                {/* <div className='w-8 flex flex-col mt-[70px] max-sm:mt-3'>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='p-1 bg-richblack-25 rounded-full w-2'></p>
                        <p className=' bg-richblack-500 w-[2px] h-[5.3rem]'></p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='p-1 bg-richblack-25 rounded-full w-2'></p>
                        <p className=' bg-richblack-500 w-[2px] h-[5.3rem]'></p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='p-1 bg-richblack-25 rounded-full w-2'></p>
                        <p className=' bg-richblack-500 w-[2px] h-[5.3rem]'></p>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <p className='p-1 bg-richblack-25 rounded-full w-2'></p>
                    </div>
                   
                </div> */}
                <div className='flex flex-col gap-10 justify-center max-sm:gap-5'>
                        {
                            steps.map( (element,index) => (
                                <div key={index}>
                                    <h2 className='text-lg font-semibold  text-richblack-50'>{element.step}</h2>
                                    <p className='text-base   font-medium text-richblack-500'>{element.do}</p>
                                </div>
                            ))
                        }
                </div>
            </div>
            <div className='w-6/12 flex justify-center items-center max-sm:w-full'>
                <img src={videoUpload} alt="" className='w-[70%] steps-img max-sm:w-full'/>
            </div>
            
        </div>

    </div>
  )
}

export default Steps
