import React from 'react'

const Header = () => {
    return (
        <div className='container mt-5'>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/karyawan" className="navbar-brand">Karyawan</a></div>
                    <div><a href="/Produk" className="navbar-brand">Produk</a></div>
                </nav>
            </header>
        </div>
    )
}

export default Header
