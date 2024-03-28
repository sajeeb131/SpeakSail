import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Table from '../../components/table/Table'
const LessonsTable = () => {

    
    return (
        <div>
            <Navbar/>
            <Table data={"011193042", "Sentence Dictation"} />
            <Footer/>
        </div>
    )
}

export default LessonsTable
