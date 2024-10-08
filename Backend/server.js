const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors()); 
app.use(express.json());


let appointments = [
  { id: 1, name: 'John Doe', date: '2024-08-27', time: '10:00 AM', doctor: 'Dr. Smith' },
  { id: 2, name: 'Jane Smith', date: '2024-08-27', time: '11:00 AM', doctor: 'Dr. Adams' },
];


let patients = [
  { id: 1, name: 'Alice Brown', age: 30, condition: 'Flu', admitted: '2024-08-20' },
  { id: 2, name: 'Bob White', age: 25, condition: 'Broken Leg', admitted: '2024-08-21' },
];


let staff = [
  { id: 1, name: 'Dr. Smith', role: 'Doctor', department: 'Cardiology' },
  { id: 2, name: 'Nurse Johnson', role: 'Nurse', department: 'Emergency' },
];


let supplies = [
  { id: 1, item: 'Bandages', quantity: 100, supplier: 'MediSupplies Inc.' },
  { id: 2, item: 'Gloves', quantity: 500, supplier: 'HealthFirst Ltd.' },
];


app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});


app.post('/api/appointments', (req, res) => {
  const newAppointment = { id: appointments.length + 1, ...req.body };
  appointments.push(newAppointment);
  res.json(newAppointment);
});


app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const index = appointments.findIndex((a) => a.id == id);
  if (index !== -1) {
    appointments[index] = { ...appointments[index], ...req.body };
    res.json(appointments[index]);
  } else {
    res.status(404).json({ error: 'Appointment not found' });
  }
});


app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  appointments = appointments.filter((a) => a.id != id);
  res.json({ message: 'Appointment deleted' });
});


app.get('/api/patients', (req, res) => {
  res.json(patients);
});


app.post('/api/patients', (req, res) => {
  const newPatient = { id: patients.length + 1, ...req.body };
  patients.push(newPatient);
  res.json(newPatient);
});


app.put('/api/patients/:id', (req, res) => {
  const { id } = req.params;
  const index = patients.findIndex((p) => p.id == id);
  if (index !== -1) {
    patients[index] = { ...patients[index], ...req.body };
    res.json(patients[index]);
  } else {
    res.status(404).json({ error: 'Patient not found' });
  }
});


app.delete('/api/patients/:id', (req, res) => {
  const { id } = req.params;
  patients = patients.filter((p) => p.id != id);
  res.json({ message: 'Patient deleted' });
});


app.get('/api/staff', (req, res) => {
  res.json(staff);
});


app.post('/api/staff', (req, res) => {
  const newStaff = { id: staff.length + 1, ...req.body };
  staff.push(newStaff);
  res.json(newStaff);
});


app.put('/api/staff/:id', (req, res) => {
  const { id } = req.params;
  const index = staff.findIndex((s) => s.id == id);
  if (index !== -1) {
    staff[index] = { ...staff[index], ...req.body };
    res.json(staff[index]);
  } else {
    res.status(404).json({ error: 'Staff member not found' });
  }
});


app.delete('/api/staff/:id', (req, res) => {
  const { id } = req.params;
  staff = staff.filter((s) => s.id != id);
  res.json({ message: 'Staff member deleted' });
});


app.get('/api/supplies', (req, res) => {
  res.json(supplies);
});


app.post('/api/supplies', (req, res) => {
  const newSupply = { id: supplies.length + 1, ...req.body };
  supplies.push(newSupply);
  res.json(newSupply);
});


app.put('/api/supplies/:id', (req, res) => {
  const { id } = req.params;
  const index = supplies.findIndex((s) => s.id == id);
  if (index !== -1) {
    supplies[index] = { ...supplies[index], ...req.body };
    res.json(supplies[index]);
  } else {
    res.status(404).json({ error: 'Supply item not found' });
  }
});


app.delete('/api/supplies/:id', (req, res) => {
  const { id } = req.params;
  supplies = supplies.filter((s) => s.id != id);
  res.json({ message: 'Supply item deleted' });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
