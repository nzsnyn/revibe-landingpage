import React from 'react'
import money from '../assets/money_icon.svg'
import check_icon from '../assets/check_icon.svg'
import check_round from '../assets/check_round_icon.svg'
import gear_icon from '../assets/gear_icon.svg'
import reuse_icon from '../assets/reuse_icon.svg'
import logo_icon from '../assets/icon_header.png'

const About = () => {

    const title = 'font-bold text-4xl pt-8 pb-6'
    const text = 'font-light text-2xl mb-6'

    let cardContent = [
        {
            link: "src/assets/cloth.png",
            title: "Cloth",
            caption: "casual, formal, sportswear, outerwear, vintage, streetwear, hingga party wear!"
        },
        {
            link: "src/assets/shoes.png",
            title: "Shoes",
            caption: "sneakers, heels, boots, loafers, sandals, hingga sepatu formal!"
        },
        {
            link: "src/assets/bag.png",
            title: "Bag",
            caption: "tote, sling bag, backpack, clutch, shoulder bag, hingga tas formal!"
        },
        {
            link: "src/assets/furniture.png",
            title: "Furniture",
            caption: "sofa, meja, kursi, lemari, rak, hingga dekorasi unik!"
        },
        {
            link: "src/assets/electronic.png",
            title: "Electronic",
            caption: "smartphone, laptop, kamera, tablet, speaker, hingga perangkat rumah tangga!"
        }
    ]

    return (
        <div id='about' className='w-3/4 mx-auto'>
            <h1 className={title}>Our Mission</h1>
            <p className={text}>Menghadirkan pengalaman belanja preloved yang berkualitas, terjangkau, dan berkelanjutan, serta menginspirasi setiap individu untuk berkontribusi dalam menjaga lingkungan melalui pilihan fashion yang lebih bijak dan penuh makna.
            </p>

            <h1 className={title}>Our Values</h1>
            <div className='flex justify-between'>
                <div className='w-52 border p-4 rounded'>
                    <img className='pb-3' src={money} alt="" />
                    <h1 className='font-bold'>Harga Terjangkau</h1>
                    <p className='text-gray-400'>Dapatkan barang berkualitas dengan harga lebih ramah kantong!</p>
                </div>
                <div className='w-52 border p-4 rounded'>
                    <img className='pb-3' src={gear_icon} alt="" />
                    <h1 className='font-bold'>Proses Mudah</h1>
                    <p className='text-gray-400'>Find what you need quickly with our search and filter tools</p>
                </div>
                <div className='w-52 border p-4 rounded'>
                    <img className='pb-3' src={check_icon} alt="" />
                    <h1 className='font-bold'>Pilihan Unik</h1>
                    <p className='text-gray-400'>Temukan item yang berbeda dan penuh karakter untuk gaya yang standout.</p>
                </div>
                <div className='w-52 border p-4 rounded'>
                    <img className='pb-3' src={check_round} alt="" />
                    <h1 className='font-bold'>Kepercayaan & Kualitas</h1>
                    <p className='text-gray-400'>We work with local farmers and food makers to ensure the highest quality products</p>
                </div>
                <div className='w-52 border p-4 rounded'>
                    <img className='pb-3' src={reuse_icon} alt="" />
                    <h1 className='font-bold'>Keberlanjutan</h1>
                    <p className='text-gray-400'>Pilihan preloved membantu mengurangi limbah dan menjaga lingkungan</p>
                </div>
            </div>

            <div className='flex justify-center align-middle mt-10'>
                <div className='w-3/6 flex justify-center align-middle'>
                    <img src={logo_icon} alt="" />
                </div>
                <div className='w-3/6'>
                    <h1 className={title}>Who We Are</h1>
                    <p className='font-light text-lg'>ReVibe adalah platform marketplace yang berfokus pada fashion dan barang preloved berkualitas. Kami hadir untuk menghubungkan kamu dengan barang-barang unik dan penuh cerita, sambil mempromosikan gaya hidup berkelanjutan. Dengan ReVibe, kamu bisa tampil keren, hemat, dan berkontribusi dalam menjaga lingkungan. Karena Kami percaya setiap barang punya kesempatan kedua, dan setiap pilihan bisa membawa perubahan!</p>
                </div>
            </div>


            <div>
                <h1 className={title}>What you can find on <span className='text-green-500'>Re</span><span className='text-blue-700'>Vibe</span></h1>

                <div className='flex justify-between'>
                    {
                        cardContent.map((content, index) => (
                            <div key={index} className='w-52 border p-4 rounded-lg'>
                                <img className='pb-3 rounded' src={content.link} alt={content.title} />
                                <h1 className='font-bold'>{content.title}</h1>
                                <p className='text-gray-400'>{content.caption}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default About