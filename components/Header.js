import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='flex justify-between p-5 max-w-7xl mx-auto items-center'>
            <div className='flex items-center'>
                <div>
                    <Link href="/">
                        <img className='w-44 object-contain cursor-pointer' src="https://ucbd382d867eda2285bc3724c2e9.previews.dropboxusercontent.com/p/thumb/ABgEpZ93-m_y2vgT49K20nlWVjpBxTk9voajPGe7GxF5wQsTmwOods-VS1uHMQbhNZ_FsSEC0LGyArTtSA2cymmm_ad186rVYMpXFeKsKwYNAkso4j_1ttkOh6mM0HwiYs-kRi-7aeTq1vjG5JK6CvzGYk38F3dvg8nbnuwEIOH1_g4kAsxR6Y0wUV-3ckhLM6k0qz9Cj-xVX4GJooeVT-rJa9yuOID0dqsqklmJTr_i3HCbP4xEITno-bufgNFVGoQdWsYxhOHOw53x370dCDSFZJVBI_aejgd2UCHlDWWU7hjKp_FoCfv7LzMf5YUPM0s-PSnEbJRif87mHgAuqdsZ326LB78mdDlbVS8SfXnBFSJpAGSbPe9CfCy-fCMHcpGhlJ5q-xlla04FI3b2k3opWj8fFgzWpRwlMcBnW8WBDEEyjWhg_Y4MPvQN_3jkIh6vG4M5VCOJ3qnjJNim7lI53Sp1wt-cPOQYMpWgC6CRcNEdqmTaZ02ttNgSGWaAH37zjPBYoScamjtZepvr_I4q4tVRKscm4xyfOYS7IoaHu-m8KB9A0Ljz9gQlPLNobUdOjBgBDfnuO0uo3IJK5nAt1jEr5WG2Xg-ORH-nYSkIM710igw6o0J9QgXm37mLY0ArfDRUy9tglGMivols17WtHT9BphIZY9lMf-Q21SiFm3UuPvb6zViH5jDbpFBTZW-_rs7Z30qnjZMJUhJLhojAA4io1Ot468YBrGiEesLglXGEWzmHCUWQsrDq2gn4AucHIIRdlAgt8knzqpLSj7wuBUbxJAaZXUEyznhBbTuQmZzm2ql6_1Y6NnwrxWSwlm0fxyQEgKHMG-OTV1mGK_hvpxdWMJnD-md8X3NBg96Wqwbq7DS-08JhYsQPx2gEDCghHuxmFH7so-h9u_Os9niRRChFieCaVaZ2P-hY01Xbf7QQdqJLejz6zW2S3I_y0nMfAbwIHEg68TyVbduBsgLpLps7Lvf7RLK0N6e3hauPd8Iv_2Zpi2t41YHQaRJy1kpTC0zr-jyND8rjb21bjYRW0gBIbFRzSWFyHySmbXru3a0gZMsMPA7TxF8bYWtL0riQyqNFrn_bBQ86z75pbRW5HoSIOnsA_S4CR4xogi00S852Iu31BRPh7XdwJNn2TYCrINcvEWVwXs2a_tsdHerXyc8LOm6l1zgxOnf8NV4vAnTXGGEe-ieQRz-SgQR5o1sZ0AyvZ31AB3VdtOWS2lRngkv6CvI-35IgCdY7mwgH-g/p.png" alt="" />
                    </Link>
                </div>
                <div className='lg:flex gap-4 hidden'>
                    <h3 className='pointer'>About</h3>
                    <h3 className='pointer'>Contact</h3>
                    <h3 className='text-white pointer bg-green-600 px-2 rounded-[20px]'>Follow</h3>
                </div>
            </div>
            <div className='text-green-600 flex gap-4'>
                <h3 className='pointer'>Sign In</h3>
                <h3 className='px-2 pointer border-2 rounded-[20px]'>Get Started</h3>
            </div>
        </header>
    )
}

export default Header