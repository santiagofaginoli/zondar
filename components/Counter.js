import { useEffect, useState } from "react";

function App(){
    const[diff, setDiff] = useState(null);
    const[initial, setInitial] = useState(null);

    const tick = () => {
        setDiff(new Date(+new Date() - initial))
    };

    const start = () => { setInitial(+new Date())}
    useEffect(() => {
        if (initial) {
            requestAnimationFrame(tick);
        }
    }, [initial]);

    useEffect(() => {
        if (diff) {
            requestAnimationFrame(tick);
        }
    }, [diff]);

    return (
        <div className='App' onClick={start}>
            <h1 className='timer'>{timeFormat(diff)}</h1>
        </div>
    );
}

const timeFormat = (date) => {
    if (!date) return "00:00:00";

    
}