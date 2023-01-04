// import React from 'react'
import { User } from './types'

const ProfileDetails = ({ profile, education, socials, guarantor, email }: any) => {
    return (
        <>
            <div className='user__details-profileBottom'>
                <div className="personal">
                    <h3>Personal Information</h3>
                    <div className="personal__details">
                        <div>
                            <h4>Full Name</h4>
                            <p>{profile.firstName} {profile.lastName}</p>
                        </div>
                        <div>
                            <h4>Phone Number</h4>
                            <p>{profile.phoneNumber}</p>
                        </div>
                        <div>
                            <h4>Email Address</h4>
                            <p>{email}</p>
                        </div>
                        <div>
                            <h4>BVN</h4>
                            <p>{profile.bvn}</p>
                        </div>
                        <div>
                            <h4>Gender</h4>
                            <p>{profile.gender}</p>
                        </div>
                        <div>
                            <h4>Marital Status</h4>
                            <p>Single</p>
                        </div>
                        <div>
                            <h4>Children</h4>
                            <p>None</p>
                        </div>
                        <div>
                            <h4>Type of Residence</h4>
                            <p>Personal Apartment</p>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h3>Education and Employment</h3>
                    <div className="education__details">
                        <div>
                            <h4>Level of Education</h4>
                            <p>{education.level}</p>
                        </div>
                        <div>
                            <h4>Employment Status</h4>
                            <p>{education.employmentStatus}</p>
                        </div>
                        <div>
                            <h4>Sector of Employment</h4>
                            <p>{education.sector}</p>
                        </div>
                        <div>
                            <h4>Duration of Employment</h4>
                            <p>{education.duration}</p>
                        </div>
                        <div>
                            <h4>Office Email</h4>
                            <p>{education.officeEmail}</p>
                        </div>
                        <div>
                            <h4>Monthly Income</h4>
                            <p>N{education.monthlyIncome[0]} - N{education.monthlyIncome[1]}</p>
                        </div>
                        <div>
                            <h4>Loan Repayment</h4>
                            <p>N{education.loanRepayment}</p>
                        </div>

                    </div>
                </div>
                <div className="socials">
                    <h3>Socials</h3>
                    <div className="socials__details">
                        <div>
                            <h4>Twitter</h4>
                            <p>{socials.twitter}</p>
                        </div>
                        <div>
                            <h4>Facecbook</h4>
                            <p>{socials.facebook}</p>
                        </div>
                        <div>
                            <h4>Instagram</h4>
                            <p>{socials.instagram}</p>
                        </div>
                    </div>
                </div>
                <div className="guarantor">
                    <h3>Guarantor</h3>
                    <div className="guarantor__details">
                        <div>
                            <h4>Full Name</h4>
                            <p>{guarantor.firstName} {guarantor.lastName}</p>
                        </div>
                        <div>
                            <h4>Phone Number</h4>
                            <p>{guarantor.phoneNumber}</p>
                        </div>
                        <div>
                            <h4>Email Address</h4>
                            <p>{guarantor.address}</p>
                        </div>
                        <div>
                            <h4>Relationship</h4>
                            <p>{guarantor.gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDetails;