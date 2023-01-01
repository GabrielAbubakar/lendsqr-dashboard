import { useState } from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Navbar />
            <div className="dashboard__container">
                <Sidebar />
                <div className="content">
                    <h1>Users</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard