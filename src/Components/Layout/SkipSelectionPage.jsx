import { SkipSelectionForm } from '../Form/SkipSelectionForm';
import { StepperPageTitle } from '../Text/StepperPageTitle';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { SkipsDatasource } from '../../Datasource/SkipsDatasource';
import { findSkipImages  } from '../../Constants/SkipImages';

export const SkipSelectionPage = ({ onSkipSelectionChanged }) => {
  const [skips, setSkipsData] = useState([]);
  const [size, setSelectedSize] = useState(null);
  const [skip, setSelectedSkip] = useState(undefined);

  useEffect(() => {
    let isMounted = true;
    async function loadData(){
      const { data, success } = await SkipsDatasource();
      if(isMounted){
        if(success){
          setSkipsData(data);
        }else{
          toast(data, {type: 'error', autoClose: '5000'});
        }
      }
    }
    loadData();
    return () => isMounted = false;
  }, []);

  const onFormSelectionChanged = (formData) => {
    const { skipSize } = formData;
    if(skipSize){
      const skipId = Number(skipSize);
      const selectedSkip = skips.find(skp => skp.id === skipId);
      if(selectedSkip){
        setSelectedSkip(selectedSkip);
        setSelectedSize(selectedSkip.size);
        onSkipSelectionChanged(selectedSkip);
      }else{
        setSelectedSkip(undefined);
        setSelectedSize(null);
        onSkipSelectionChanged(undefined);
      }
    }else{
      onSkipSelectionChanged(undefined);
    }
  }

  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 mt-8 pt-8">
      <div className="mb-8 lg:mb-0">
        <div className="relative overflow-hidden bg-transparent mb-4 h-96">
          <div className='absolute top-3 right-4 z-20 bg-rem-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md'> { skip ? `${skip.size} Yards`: '----'}</div>
          <img
            src={findSkipImages(size)}
            alt={`${size} skip`}
            className="h-full w-full object-cover object-center rounded-lg"
          />
          { skip && !skip.allowed_on_road && (
            <div className='absolute bottom-3 left-2 z-20 space-y-2'>
              <div className='bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-alert-triangle w-4 h-4 text-yellow shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                <span className='text-xs font-medium text-yellow'>
                  Not Allowed On The Road
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className='pb-40 md:pb-0'>
        <StepperPageTitle> Choose Your Skip Size </StepperPageTitle>
        <p className='text-rem-gray-600 mb-8'> Select the skip size that best suits your needs </p>
        <SkipSelectionForm changeHandler={onFormSelectionChanged} data={skips} />
        <div className="mb-6">
          
          { skip && skip.price_before_vat ? (
            <p className="text-2xl font-bold text-rem-gray-400">
              Price: £ {skip.price_before_vat + skip.vat} 
              <br></br>
              <span className='text-xs font-400 text-rem-gray-700'>(Inc. vat)</span>
            </p>
          ): (
            <p className="text-2xl font-bold text-rem-gray-400">
              Price: £ _ _ _
               <br></br>
              <span className='text-xs font-400 text-rem-gray-700'> (Inc. vat)</span>
            </p>
          )} 
        </div>
      </div>

    </div>
  );
};