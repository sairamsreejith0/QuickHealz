import React, { Component } from "react";
import "../Doctor_styles/DoctorDashboard.css";

class DoctorDashboard extends Component {
  constructor(props) {
    super(props);
    if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
    this.state = {
      PatientManagement: false,
      OnlineConsultation1: false,
      AppointmentManagement1: false,
      PrescriptionManagement: false,
      PatientEducation1: false,
      ReferralManagement: false,
      redirectToPatientManagement : false,
      redirectToOnlineConsultation: false,
      redirectToAppointmentManagement: false,
      redirectToPrescriptionManagement: false,
      redirectToPatientEducation: false,
      redirectToReferralManagement: false,
    };
  }

  handlePatientManagement = () => {
    this.setState({ redirectToPatientManagement: true });
  };

  handleOnlineConsultation = () => {
    this.setState({ redirectToOnlineConsultation: true });
  };

  handleAppointmentManagement = () => {
    this.setState({ redirectToAppointmentManagement: true });
  };

  handlePrescriptionManagement = () => {
    this.setState({ redirectToPrescriptionManagement: true });
  };

  handlePatientEducation = () => {
    this.setState({ redirectToPatientEducation: true });
  };

  handleReferralManagement = () => {
    this.setState({ redirectToReferralManagement: true });
  };
  Logout = () => {
    try {
      localStorage.removeItem('userData');
      localStorage.removeItem('token');
      window.location.href = 'http://localhost:3000/Login';
      console.log(localStorage)
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  render() {
    const {
      patientManagement,
      onlineConsultation,
      PrescriptionManagement,
      appointmentManagement,
      patientEducation,
      referralManagement,
      redirectToPatientManagement,
      redirectToOnlineConsultation,
      redirectToPrescriptionManagement,
      redirectToAppointmentManagement,
      redirectToPatientEducation,
      redirectToReferralManagement,      
    } = this.state;

    if (redirectToPatientManagement) {
      window.location.href = "http://localhost:3000/PatientManagementDoctor";
    }
    if (redirectToOnlineConsultation) {
      window.location.href = "http://localhost:3000/OnlineConsultationDoctor";
    }
    if (redirectToAppointmentManagement) {
      window.location.href = "http://localhost:3000/AppointmentManagementDoctor";
    }
    if (redirectToPrescriptionManagement) {
      window.location.href = "http://localhost:3000/PrescriptionManagementDoctor";
    }
    if (redirectToPatientEducation) {
      window.location.href = "http://localhost:3000/PatientEducationDoctor";
    }
    if (redirectToReferralManagement) {
      window.location.href = "http://localhost:3000/ReferralManagementDoctor";
    }

    return (
      <div className="doctor-dashboard">
        <h1>Doctor Dashboard</h1>
        <div className="dashboard-options">
        <div
            className={patientManagement ? "option active" : "option"}
            onClick={this.handlePatientManagement}
          >
            Patient Management
          </div>
          <div
            className={onlineConsultation ? "option active" : "option"}
            onClick={this.handleOnlineConsultation}
          >
            Online Consultation
          </div>
          <div
            className={appointmentManagement ? "option active" : "option"}
            onClick={this.handleAppointmentManagement}
          >
            Appointment Management
          </div>
          <div
            className={PrescriptionManagement ? "option active" : "option"}
            onClick={this.handlePrescriptionManagement}
          >
            Prescription Management
          </div>
          <div
            className={patientEducation ? "option active" : "option"}
            onClick={this.handlePatientEducation}
          >
            Patient Education
          </div>
          <div
            className={referralManagement ? "option active" : "option"}
            onClick={this.handleReferralManagement}
          >
            Referral Management
          </div>
        </div>
        <button onClick={this.Logout}>Logout</button>
      </div>
    );
  }
}


export default DoctorDashboard;
