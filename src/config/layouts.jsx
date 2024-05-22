import React from 'react'
import Header from '../component/header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
    return (
        <section>
            <Header />
            <Outlet/>
        </section>
    )
}

export default Layouts