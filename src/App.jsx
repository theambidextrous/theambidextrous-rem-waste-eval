import { ToastContainer } from 'react-toastify';
import { MainContainer, SkipSelectionPage, Stepper, BottomBar } from './Components/';
import { StepperItems } from './Constants/StepperItems';
import './App.css'
import { useState } from 'react';

const App = () => {
  const [skip, setSelectedSkip] = useState(undefined);

  const skipChangeHandler = (selectedSkip) => {
    setSelectedSkip(selectedSkip);
  }

  return (
    <MainContainer>
      <Stepper items={StepperItems} />
      <SkipSelectionPage onSkipSelectionChanged={skipChangeHandler} />
      { skip && skip.size && (
        <BottomBar skip={skip} />
      )}
      <ToastContainer />
    </MainContainer>
  )
}

export default App
