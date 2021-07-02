import React, {useState} from 'react';





const App =()=>{
    const purple = 'yellow'
    const [bg, setbg] = useState(purple); 
    const [name, setname] = useState('Clicked Me');
    const bgChange =()=>{
        let newbg = 'Grey';
        setbg(newbg);
        setname('Changed !!🤔')
    }
    
    const bgBack = () =>{
        setbg(purple);
        setname('Back to Normal 🙂')
    }
    return (
        <>
            <main style={{backgroundColor: bg}}>
                <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </main>
        </>
    )
}

export default App;