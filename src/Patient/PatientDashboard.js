import React, { Component } from "react";
import "../Patient_styles/PatientDashboard.css"; // Import CSS for styling
import axios from "axios";


class PatientDashboard extends Component {
  constructor(props) {
    
    super(props);
    if(!(localStorage.getItem('userData')))
    {
      window.location.href="http://localhost:3000/Login";
    }
    // Initialize state with initial data
    this.state = {
      onlineConsultation: false,
      appointmentManagement: false,
      medicationManagement: false,
      healthRecords: false,
      patientEducation: false,
      billingAndPayment: false,
      feedbackAndRating: false,
      redirectToAppointmentManagement: false,
      redirectToOnlineConsultation:false,
      redirectToMedicationManagement:false,
      redirectToHealthRecords:false,
      redirectToPatientEducation:false,
      redirectToProfile:false,
      languageSelection: "English", // Set default language
    };
  }

  // Function to handle language selection change
  handleLanguageChange = (e) => {
    this.setState({ languageSelection: e.target.value });
  }
  handleOnlineConsultaion = () => {
    this.setState({ redirectToOnlineConsultation: true }); // Update state to trigger redirection
  }
  handleAppointmentManagement=()=>{
    this.setState({redirectToAppointmentManagement:true});
  }
  handleMedicationManagement=()=>{
    this.setState({redirectToMedicationManagement:true});
  }
  handleHealthRecords=()=>{
    this.setState({redirectToHealthRecords:true});
  }
  handlePatientEducation = () => {
    this.setState({redirectToPatientEducation:true});
  }
  handleProfile = () => {
    this.setState({redirectToProfile:true});
  }
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
      onlineConsultation,
      appointmentManagement,
      medicationManagement,
      healthRecords,
      patientEducation,
      billingAndPayment,
      Profile,
      feedbackAndRating,
      languageSelection,
      redirectToOnlineConsultation,
      redirectToAppointmentManagement,
      redirectToMedicationManagement,
      redirectToHealthRecords,
      redirectToPatientEducation,
      redirectToProfile
      
    } = this.state;

    if (redirectToOnlineConsultation) {
        window.location.href = "http://localhost:3000/OnlineConsultation"; // Replace with your desired URL
      }
    if(redirectToAppointmentManagement)
    {
        window.location.href = "http://localhost:3000/AppointmentManagement";
    }
    if(redirectToMedicationManagement)
    {
        window.location.href = "http://localhost:3000/MedicationManagement";
    }
    if(redirectToHealthRecords)
    {
        window.location.href = "http://localhost:3000/HealthRecords";
    }
    if(redirectToPatientEducation)
    {
        window.location.href = "http://localhost:3000/PatientEducation";
    }
    if(redirectToProfile)
    {
        window.location.href = "http://localhost:3000/Profile";
    }

    return (
      <div className="patient-dashboard">
        <h1>Patient Dashboard</h1>
        <div className="dashboard-options">
          <div
            className={onlineConsultation ? "option active" : "option"}
            onClick={this.handleOnlineConsultaion}
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
            className={medicationManagement ? "option active" : "option"}
            onClick={this.handleMedicationManagement}
          >
            Medication Management
          </div>
          <div
            className={healthRecords ? "option active" : "option"}
            onClick={this.handleHealthRecords}
          >
            Health Records
          </div>
          <div
            className={patientEducation ? "option active" : "option"}
            onClick={this.handlePatientEducation}
          >
            Patient Education
          </div>
          <div
            className={billingAndPayment ? "option active" : "option"}
            onClick={() => this.setState({ billingAndPayment: !billingAndPayment })}
          >
            Billing and Payment
          </div>
          <div
            className={Profile ? "option active" : "option"}
            onClick={this.handleProfile}
          >
            Profile
          </div>
        </div>
        <div className="language-selection">
          <label htmlFor="languageSelect">Language Selection:</label>
          <select id="languageSelect" value={languageSelection} onChange={this.handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <button onClick={this.Logout}>Logout</button>
        
      </div>
    );
    }
  }

export default PatientDashboard;
