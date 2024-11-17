import React from 'react'
import money from '../assets/money_icon.svg'
import check_icon from '../assets/check_icon.svg'
import check_round from '../assets/check_round_icon.svg'
import gear_icon from '../assets/gear_icon.svg'
import reuse_icon from '../assets/reuse_icon.svg'
import logo_icon from '../assets/icon_header.png'
import cloth from '../assets/cloth.png'
import shoes from '../assets/shoes.png'
import bag from '../assets/bag.png'
import furniture from '../assets/furniture.png'
import electronic from '../assets/Electronic.png'


const About = () => {

    const title = 'font-bold text-2xl md:text-4xl pt-4 md:pt-8 pb-4 md:pb-6'
    const text = 'font-light text-lg md:text-2xl mb-4 md:mb-6'

    let cardContent = [
        {
            link: cloth,
            title: "Cloth",
            caption: "casual, formal, sportswear, outerwear, vintage, streetwear, hingga party wear!"
        },
        {
            link: shoes,
            title: "Shoes",
            caption: "sneakers, heels, boots, loafers, sandals, hingga sepatu formal!"
        },
        {
            link: bag,
            title: "Bag",
            caption: "tote, sling bag, backpack, clutch, shoulder bag, hingga tas formal!"
        },
        {
            link: furniture,
            title: "Furniture",
            caption: "sofa, meja, kursi, lemari, rak, hingga dekorasi unik!"
        },
        {
            link: electronic,
            title: "Electronic",
            caption: "smartphone, laptop, kamera, tablet, speaker, hingga perangkat rumah tangga!"
        }
    ]

    return (
        <div id='about' className='w-full px-4 mx-auto md:w-3/4'>
            <h1 className={title}>Our Mission</h1>
            <p className={text}>Menghadirkan pengalaman belanja preloved yang berkualitas, terjangkau, dan berkelanjutan, serta menginspirasi setiap individu untuk berkontribusi dalam menjaga lingkungan melalui pilihan fashion yang lebih bijak dan penuh makna.
            </p>

            <h1 className={title}>Our Values</h1>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full p-4 mb-4 border rounded md:w-52 md:mb-0'>
                    <img className='pb-3' src={money} alt="" />
                    <h1 className='font-bold'>Harga Terjangkau</h1>
                    <p className='text-gray-400'>Dapatkan barang berkualitas dengan harga lebih ramah kantong!</p>
                </div>
                <div className='w-full p-4 mb-4 border rounded md:w-52 md:mb-0'>
                    <img className='pb-3' src={gear_icon} alt="" />
                    <h1 className='font-bold'>Proses Mudah</h1>
                    <p className='text-gray-400'>Find what you need quickly with our search and filter tools</p>
                </div>
                <div className='w-full p-4 mb-4 border rounded md:w-52 md:mb-0'>
                    <img className='pb-3' src={check_icon} alt="" />
                    <h1 className='font-bold'>Pilihan Unik</h1>
                    <p className='text-gray-400'>Temukan item yang berbeda dan penuh karakter untuk gaya yang standout.</p>
                </div>
                <div className='w-full p-4 mb-4 border rounded md:w-52 md:mb-0'>
                    <img className='pb-3' src={check_round} alt="" />
                    <h1 className='font-bold'>Kepercayaan & Kualitas</h1>
                    <p className='text-gray-400'>We work with local farmers and food makers to ensure the highest quality products</p>
                </div>
                <div className='w-full p-4 border rounded md:w-52'>
                    <img className='pb-3' src={reuse_icon} alt="" />
                    <h1 className='font-bold'>Keberlanjutan</h1>
                    <p className='text-gray-400'>Pilihan preloved membantu mengurangi limbah dan menjaga lingkungan</p>
                </div>
            </div>

            <div className='flex flex-col justify-center mt-10 align-middle md:flex-row'>
                <div className='flex justify-center w-full mb-4 align-middle md:w-3/6 md:mb-0'>
                    <img src={logo_icon} alt="" />
                </div>
                <div className='w-full md:w-3/6'>
                    <h1 className={title}>Who We Are</h1>
                    <p className='text-base font-light md:text-lg'>ReVibe adalah platform marketplace yang berfokus pada fashion dan barang preloved berkualitas. Kami hadir untuk menghubungkan kamu dengan barang-barang unik dan penuh cerita, sambil mempromosikan gaya hidup berkelanjutan. Dengan ReVibe, kamu bisa tampil keren, hemat, dan berkontribusi dalam menjaga lingkungan. Karena Kami percaya setiap barang punya kesempatan kedua, dan setiap pilihan bisa membawa perubahan!</p>
                </div>
            </div>


            <div className='container px-4 py-8 mx-auto' id='product'>
                <h1 className='mb-8 text-2xl font-bold text-center'>Our Product</h1>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {cardContent.map((item, index) => (
                        <div key={index} className='flex flex-col items-center p-4 border rounded-lg shadow-sm'>
                            <img src={item.link} alt={item.title} className='object-cover w-full h-32 mb-4' />
                            <h2 className='mb-2 text-xl font-semibold'>{item.title}</h2>
                            <p className='text-center text-gray-600'>{item.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About