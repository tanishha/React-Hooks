import {
    useEffect
} from 'react'

const Test = (count) => {
    useEffect(() => {
        if (count >= 1) {
            document.title = `Count (${count})`;
        } else {
            document.title = `Count`;
        }
    }, [count]);
}

export default Test