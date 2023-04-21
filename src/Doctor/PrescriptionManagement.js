import React, { Component } from "react";
import "../Doctor_styles/PrescriptionManagement.css";

class PrescriptionManagementDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prescriptions: [
        {
          id: 1,
          medication: "Metformin",
          dosage: "500mg",
          instructions: "Take once daily with food",
          dateIssued: "2023-04-15",
          patientId: 1,
        },
        {
          id: 2,
          medication: "Lisinopril",
          dosage: "10mg",
          instructions: "Take once daily",
          dateIssued: "2023-04-10",
          patientId: 1,
        },
      ],
      medication: "",
      dosage: "",
      instructions: "",
    };
  }

  handleEdit = (id) => {
    const prescriptionToEdit = this.state.prescriptions.find((p) => p.id === id);
  
    this.setState({
      medication: prescriptionToEdit.medication,
      dosage: prescriptionToEdit.dosage,
      instructions: prescriptionToEdit.instructions,
      editing: true,
      editingId: id,
    });
  };
  
  handleDelete = (id) => {
    const updatedPrescriptions = this.state.prescriptions.filter(
      (p) => p.id !== id
    );
  
    this.setState({
      prescriptions: updatedPrescriptions,
    });
  };
  
  handleMedicationChange = (event) => {
    this.setState({ medication: event.target.value });
  };

  handleDosageChange = (event) => {
    this.setState({ dosage: event.target.value });
  };

  handleInstructionsChange = (event) => {
    this.setState({ instructions: event.target.value });
  };

  handleDownload = (id) => {
  
    const prescriptionToDownload = this.state.prescriptions.find((p) => p.id === id);
    console.log(prescriptionToDownload);
    const fileName = `${prescriptionToDownload.medication}_${prescriptionToDownload.dosage}.txt`;
    console.log(fileName);
    const fileContents = `
      Medication: ${prescriptionToDownload.medication}
      Dosage: ${prescriptionToDownload.dosage}
      Instructions: ${prescriptionToDownload.instructions}
      Date Issued: ${prescriptionToDownload.dateIssued}
    `;
    console.log(fileContents)
    // Create a new Blob object with the file contents and set the MIME type
    const blob = new Blob([fileContents], { type: "text/plain;charset=utf-8" });

    // Use the browser's built-in save functionality to save the file to the user's machine
    const link = document.createElement("a");
    link.download = fileName;
    link.href = window.URL.createObjectURL(blob);
    link.click();
  }

  handleIssuePrescription = () => {
    const { medication, dosage, instructions } = this.state;

    // Generate a unique ID for the new prescription
    const id = Math.max(...this.state.prescriptions.map((p) => p.id)) + 1;

    // Create a new prescription object
    const newPrescription = {
      id: id,
      medication: medication,
      dosage: dosage,
      instructions: instructions,
      dateIssued: new Date().toISOString().slice(0, 10),
      patientId: 1, // In a real app, this would be obtained from the selected patient
    };

    // Add the new prescription to the state
    this.setState((prevState) => ({
      prescriptions: [...prevState.prescriptions, newPrescription],
      medication: "",
      dosage: "",
      instructions: "",
    }));
  };

  render() {
    const { prescriptions, medication, dosage, instructions } = this.state;

    return (
      <div className="prescription-management">
        <h1>Prescription Management</h1>
        <div className="new-prescription">
          <h2>Issue New Prescription</h2>
          <div>
            <label>Medication:</label>
            <input
              type="text"
              value={medication}
              onChange={this.handleMedicationChange}
            />
          </div>
          <div>
            <label>Dosage:</label>
            <input
              type="text"
              value={dosage}
              onChange={this.handleDosageChange}
            />
          </div>
          <div>
            <label>Instructions:</label>
            <input
              type="text"
              value={instructions}
              onChange={this.handleInstructionsChange}
            />
          </div>
          <button onClick={this.handleIssuePrescription}>Issue Prescription</button>
        </div>
        <div className="prescription-history">
          <h2>Prescription History</h2>
          <table>
            <thead>
              <tr>
                <th>Medication</th>
                <th>Dosage</th>
                <th>Instructions</th>
                <th>Date Issued</th>
              </tr>
            </thead>
            <tbody>
              {prescriptions.map((p) => (
                <tr key={p.id}>
                  <td>{p.medication}</td>
                  <td>{p.dosage}</td>
                  <td>{p.instructions}</td>
                  <td>{p.dateIssued}</td>
                  <td>
                  <button className="btn" onClick={() => this.handleEdit(p.id)}>
                  Edit
                  </button>
                <button className="btn" onClick={() => this.handleDelete(p.id)} > 
                Delete 
                </button>
                <button className="btn" onClick={() => this.handleDownload(p.id)}>
                    Download
                  </button>
                </td>
                </tr>
                ))}
                </tbody>
                </table>
                </div>
                </div>
                );
                }
                }

export default PrescriptionManagementDoctor;
