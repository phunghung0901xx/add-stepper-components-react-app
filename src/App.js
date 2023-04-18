import Stepper from 'react-stepper-horizontal';
import './App.css';

function App() {
  const steps = [
    { title: 'User details' },
    { title: 'Payment' },
    { title: 'Booking confirmation' },
  ];
  const activeStep = 1;

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep} />
    </div>
  )
}
export default App;