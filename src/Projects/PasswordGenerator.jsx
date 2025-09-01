import { useCallback, useEffect, useRef, useState } from 'react'
import '.././App.css'
import { RefreshCw } from 'lucide-react'
const PasswordGenerator = () => {
    const [password, setPassword] = useState("")
    const [length, setLength] = useState(6)
    const [isSymbol, setIsSymbol] = useState(false)
    const [isNumber, setIsNumber] = useState(false)

    const generatePassword = useCallback(() => {
        let pswd = ""
        let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (isNumber) {
            char += '1234567890'
        }
        if (isSymbol) {
            char += '!@#$%^&*_-=+./|'
        }
        for (let i = 1; i <= length; i++) {
            let index = Math.floor((Math.random() * char.length) + 1)
            pswd += char.charAt(index)
        }
        setPassword(pswd)
    }, [length, isSymbol, isNumber])

    useEffect(() => {
        generatePassword()
    }, [length, isSymbol, isNumber])

    const handleCopy = () => {
        pswdRef.current?.select()
        window.navigator.clipboard.writeText(password)
    }

    const pswdRef = useRef()


    return (
        <div className='page-container justify-center items-center bg-[url("https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg")] bg-img-manager'>
            <div className='p-4 backdrop-blur-sm border-white border-2 w-full md:w-[60%] rounded-xl h-fit'>
                <label className='text-gray-400 mb-1 inline-block'>Generated Password:</label>
                <div className='input-wrapper'>
                    <input
                        className='py-1 px-2 flex-1 h-full rounded-l-sm rounded-r-none'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        readOnly
                        placeholder='Password'
                        ref={pswdRef}
                    />
                    <button onClick={handleCopy} disabled={!password} className='bg-blue-500 text-white h-full px-2 rounded-r-sm hover:bg-blue-600'>
                        Copy Password
                    </button>
                </div>
                <div className='flex items-center gap-8 mt-4 flex-wrap w-full'>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <input
                            type='range'
                            className='cursor-pointer'
                            min={6}
                            max={64}
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label className='text-orange-400'>Length: {length}</label>
                    </div>
                    <div className='flex items-center gap-3 flex-wrap justify-between md:justify-start'>
                        <input
                            type='checkbox'
                            className='cursor-pointer'
                            value={isNumber}
                            onChange={() => setIsNumber(prev => !prev)}
                        />
                        <label className='text-white'>Numbers</label>

                        <input
                            className='cursor-pointer'
                            type='checkbox'
                            value={isSymbol}
                            onChange={() => setIsSymbol(prev => !prev)}
                        />
                        <label className='text-white'>Symbols</label>

                        <button onClick={generatePassword} className='bg-blue-500 hover:bg-blue-600 text-white h-full min-w-[64px] px-2 py-0.5 rounded-sm ml-4'><RefreshCw className='h-4.5' /> New </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator