import Image from 'next/image'
import React from 'react'

 const analyticsCard =[
    {
        id:1,
        title: 'Total Borrowed',
        amount: '$45,231.89',
        analytics: '+20% from last month',
        icon: '/borrow.svg'
    },
    {
        id:2,
        title: 'Loan Released',
        amount: '$45,231.89',
        analytics: '+10% from last month',
        icon: '/loan.svg'
    },
    {
        id:3,
        title: 'Investment',
        amount: '$45,231.89',
        analytics: '+20% from last month',
        icon: '/investment.svg'
    },
    {
        id:4,
        title: 'Savings',
        amount: '$45,231.89',
        analytics: '+20% from last week',
        icon: '/savings.svg'
    },
]

const Cards = () => {
  return (
    <section className='w-full'>
        <div className='grid grid-cols-4 gap-5 w-full '>
            {
                analyticsCard.map(analyse=>{
                    const {title, amount, icon, analytics, id}=analyse
                    return(
                        <div className='flex justify-between border-1 shadow-2xl bg-white rounded-[20px] px-5 py-3'>
                            <div key={analyse.id}>
                                <p className='font-semibold text-[12px]'>{title}</p>
                                <p className='text-xl font-bold py-2'>{amount}</p>
                                <p className='text-[12px] font-medium text text-neutral-500'>{analytics}</p>
                            </div>
                            <Image src={analyse.icon} alt='icon' width={50} height={50} />
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Cards