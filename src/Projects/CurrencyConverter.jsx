import { ArrowUpDown } from "lucide-react"
import { useEffect, useState } from "react"

const CurrencySelectorCard = ({label, convertFrom='USD', convertTo, currencyOptions, handleSelect=()=>{}, convertAmt=1, convertToAmt, oppositType, handleAmtChange=()=>{}})=>{
    
    return(
    <div className="border-white border-2 rounded-xl p-3 font-semibold text-gray-600">
        <div className="flex items-center justify-between gap-2 lg:gap-32 mb-0.5">
        <label>{label}</label>
        <label>Currency Type</label>
        </div>
        <div className="flex items-center justify-between gap-2 lg:gap-32">
            <input
            type="number"
            className="w-full"
            value={label === 'From'? convertAmt: convertToAmt}
            readOnly={label !== 'From'? true:false}
            onChange={(e)=>handleAmtChange(e.target.value)}
            />
            <select
                value={convertTo || convertFrom}
                onChange={(e)=>handleSelect(e.target.value)}
            >
                {currencyOptions?.filter((item)=> item !== oppositType)?.map((currency)=>
                    <option key={currency} value={currency}>{currency}</option>
                )}
            </select>
        </div>
    </div>)
}

function useCurrencyProvider(currency){
    const [options, setOptions] = useState([])
    const APIKEY = '4ceff5dd4c19724d0256a17c'
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=> setOptions(res.conversion_rates))
    }, [currency])
    return options
}

function smartRound(value, tolerance = 0.001) {
  const nearest = Math.round(value);
  if (Math.abs(value - nearest) < tolerance) {
    return nearest; // round to integer if very close
  }
  return value; // otherwise keep original
}

const CurrencyConverter = ()=>{
    const [convertAmt, setConvertAmt] = useState(1)
    const [convertToAmt, setConverToAmt] = useState('')
    const [convertFrom, SetConvertFrom] = useState('USD')
    const [convertTo, SetConvertTo] = useState('INR')
    const Currencies = useCurrencyProvider(convertFrom)
    const currencyOptions = Object.keys(Currencies)
    const handleConvert = ()=>{
        const currencyValue = Currencies[convertTo]
        const convertedValue = (currencyValue * Number(convertAmt)).toFixed(2)
        setConverToAmt(convertedValue)
    }

    const handleSwap = ()=>{
        setConvertAmt(convertToAmt || 1)
        SetConvertFrom(convertTo)
        setConverToAmt(convertAmt)
        SetConvertTo(convertFrom)
    }
    return(
        <div className="page-container justify-center items-center bg-[url('https://images.pexels.com/photos/5921122/pexels-photo-5921122.jpeg')] bg-img-manager">
            <div className="flex flex-col gap-3 bg-transparent h-fit w-full md:w-1/2 p-8 backdrop-blur-sm rounded-xl relative border-white border-2">
                <CurrencySelectorCard
                label={'From'}
                convertFrom={convertFrom}
                currencyOptions={currencyOptions}
                handleSelect={SetConvertFrom}
                convertAmt={convertAmt}
                oppositType = {convertTo}
                handleAmtChange={setConvertAmt}
                />
                <button onClick={handleSwap} className="bg-blue-500 text-white font-semibold rounded-md px-2 py-0.5 hover:bg-blue-700 w-fit absolute top-[123px] left-1/2 -translate-x-1/2 flex items-center gap-1">
                    Swap <ArrowUpDown className="h-5 w-5"/>
                </button>
                <CurrencySelectorCard
                label={'To'}
                convertTo={convertTo}
                currencyOptions={currencyOptions}
                handleSelect={SetConvertTo}
                convertToAmt={convertToAmt}
                oppositType = {convertFrom}
                />
                <button disabled={!convertAmt} type="button" onClick={handleConvert} className="bg-blue-500 text-white font-semibold rounded-md p-2 mt-2 hover:bg-blue-700">
                    Convert {convertFrom} to {convertTo}
                </button>
            </div>
        </div>
    )   
}

export default CurrencyConverter