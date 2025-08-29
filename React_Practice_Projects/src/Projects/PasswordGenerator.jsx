import { useCallback, useEffect, useRef, useState } from 'react'
import '.././App.css'
const PasswordGenerator = ()=>{
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(6)
    const [isSymbol, setIsSymbol] = useState(false)
    const [isNumber, setIsNumber] = useState(false)

    const generatePassword = useCallback(()=>{
        let pswd= ""
        let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (isNumber){
            char+= '1234567890'
        }
        if (isSymbol){
            char+='!@#$%^&*_-=+./|'
        }
        for (let i=1; i<=length; i++){
            let index = Math.floor((Math.random()*char.length) + 1)
            pswd += char.charAt(index)
        }
        // setPassword(pswd)
    }, [length, isSymbol, isNumber])

    useEffect(()=>{
        generatePassword()
    }, [length, isSymbol, isNumber])

    const handleCopy = ()=>{
        pswdRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }

    const pswdRef= useRef()


    return (
        <div className='page-contaier p-5 justify-center'>
            <div className='p-4 bg-teal-950 w-[60%] rounded-xl h-fit'>
                <div className='flex gap-0.5 items-center'>
                    <input
                        className='py-1 px-2 bg-indigo-50 w-full rounded-l-sm text-black'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        // readOnly
                        type='number'
                        placeholder='Password'
                        ref={pswdRef}
                    />
                    <button onClick={handleCopy} className='bg-blue-500 text-white py-1 px-2  rounded-r-sm'>
                        Copy
                    </button>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <input
                        type='range'
                        className='cursor-pointer'
                        min={6}
                        max={100}
                        onChange={(e)=>setLength(e.target.value)}
                    />
                    <label className='text-orange-400'>Length: {length}</label>
                    
                    <input
                        type='checkbox'
                        className='ml-4 cursor-pointer'
                        value={isNumber}
                        onChange={()=>setIsNumber(prev=>!prev)}
                    />
                    <label className='text-white'>Numbers</label>
                    <input
                        className='ml-4 cursor-pointer'
                        type='checkbox'
                        value={isSymbol}
                        onChange={()=>setIsSymbol(prev=>!prev)}
                    />
                    <label className='text-white'>Symbols</label>
                </div>
            </div>
        </div>
    )
} 

export default PasswordGenerator