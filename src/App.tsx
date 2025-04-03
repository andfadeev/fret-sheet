import {useEffect, useState} from 'react'
import E2 from './assets/E2.svg'
import F2 from './assets/F2.svg'
import G2 from './assets/G2.svg'
import A2 from './assets/A2.svg'
import B2 from './assets/B2.svg'
import C3 from './assets/C3.svg';
import D3 from './assets/D3.svg';
import E3 from './assets/E3.svg';
import F3 from './assets/F3.svg';
import G3 from './assets/G3.svg';
import A3 from './assets/A3.svg';
import B3 from './assets/B3.svg';
import C4 from './assets/C4.svg';
import D4 from './assets/D4.svg';
import E4 from './assets/E4.svg';
import F4 from './assets/F4.svg';
import G4 from './assets/G4.svg';
import A4 from './assets/A4.svg';
import B4 from './assets/B4.svg';
import C5 from './assets/C5.svg';
import D5 from './assets/D5.svg';
import E5 from './assets/E5.svg';

import './App.css'
import {motion} from "motion/react"

const guitarNotes = [
    {
        id: "E2", image: E2, title: "E", locations: [{string: "6", fret: "0"}]
    },
    {
        id: "F2", image: F2, title: "F", locations: [{string: "6", fret: "1"}]
    },
    {
        id: "G2", image: G2, title: "G", locations: [{string: "6", fret: "3"}]
    },
    {
        id: "A2",
        image: A2,
        title: "A",
        locations: [
            {string: "6", fret: "5"},
            {string: "5", fret: "0"}
        ]
    },
    {
        id: "B2",
        image: B2,
        title: "B",
        locations: [
            {string: "6", fret: "7"},
            {string: "5", fret: "2"}
        ]
    },
    {
        id: "C3",
        image: C3,
        title: "C",
        locations: [
            {string: "6", fret: "8"},
            {string: "5", fret: "3"}
        ]
    },
    {
        id: "D3",
        image: D3,
        title: "D",
        locations: [
            {string: "6", fret: "10"},
            {string: "5", fret: "5"},
            {string: "4", fret: "0"}
        ]
    },
    {
        id: "E3",
        image: E3,
        title: "E",
        locations: [
            {string: "6", fret: "12"},
            {string: "5", fret: "7"},
            {string: "4", fret: "2"}
        ]
    },
    {
        id: "F3",
        image: F3,
        title: "F",
        locations: [
            {string: "5", fret: "8"},
            {string: "4", fret: "3"}
        ]
    },
    {
        id: "G3",
        image: G3,
        title: "G",
        locations: [
            {string: "5", fret: "10"},
            {string: "4", fret: "5"},
            {string: "3", fret: "0"}
        ]
    },
    {
        id: "A3",
        image: A3,
        title: "A",
        locations: [
            {string: "5", fret: "12"},
            {string: "4", fret: "7"},
            {string: "3", fret: "2"}
        ]
    },
    {
        id: "B3",
        image: B3,
        title: "B",
        locations: [
            {string: "4", fret: "9"},
            {string: "3", fret: "4"}
        ]
    },
    {
        id: "C4",
        image: C4,
        title: "C",
        locations: [
            {string: "4", fret: "10"},
            {string: "3", fret: "5"},
            {string: "2", fret: "1"}
        ]
    },
    {
        id: "D4",
        image: D4,
        title: "D",
        locations: [
            {string: "4", fret: "12"},
            {string: "3", fret: "7"},
            {string: "2", fret: "3"}
        ]
    },
    {
        id: "E4",
        image: E4,
        title: "E",
        locations: [
            {string: "3", fret: "9"},
            {string: "2", fret: "5"},
            {string: "1", fret: "0"}
        ]
    },
    {
        id: "F4",
        image: F4,
        title: "F",
        locations: [
            {string: "3", fret: "10"},
            {string: "2", fret: "6"},
            {string: "1", fret: "1"}
        ]
    },
    {
        id: "G4",
        image: G4,
        title: "G",
        locations: [
            {string: "3", fret: "12"},
            {string: "2", fret: "8"},
            {string: "1", fret: "3"}
        ]
    },
    {
        id: "A4",
        image: A4,
        title: "A",
        locations: [
            {string: "2", fret: "10"},
            {string: "1", fret: "5"}
        ]
    },
    {
        id: "B4",
        image: B4,
        title: "B",
        locations: [
            {string: "2", fret: "12"},
            {string: "1", fret: "7"}
        ]
    },
    {
        id: "C5",
        image: C5,
        title: "C",
        locations: [
            {string: "1", fret: "8"}
        ]
    },
    {
        id: "D5",
        image: D5,
        title: "D",
        locations: [
            {string: "1", fret: "10"}
        ]
    },
    {
        id: "E5",
        image: E5,
        title: "E",
        locations: [
            {string: "1", fret: "12"}
        ]
    }
];

const getRandomNote = () => {
    const randomNote = guitarNotes[Math.floor(Math.random() * guitarNotes.length)];
    const randomLocation = randomNote.locations[Math.floor(Math.random() * randomNote.locations.length)];
    return {...randomNote, location: randomLocation};
};

//
// const CloseIcon = () => {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
//     </svg>
//
// }
//
// const MenuIcon = () => {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
//                 className="size-6 cursor-pointer">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
//     </svg>
//
// }

function toOrdinal(numStr: string) {
    const num = parseInt(numStr, 10);
    if (isNaN(num) || num < 1 || num > 6) {
        throw new Error("Input must be a string representing a number from '1' to '6'");
    }

    const suffixes = ["th", "st", "nd", "rd", "th", "th", "th"];
    return num + suffixes[num];
}


type RadioLabelProps = {
    htmlFor: string;
    content: string;
};


function RadioLabel({htmlFor, content}: RadioLabelProps) {
    return <motion.label htmlFor={htmlFor}
                         whileHover={{scale: 1.05}}
                         whileTap={{scale: 0.95}}
                         className="opacity-75 hover:opacity-100 block items-center justify-between p-5 text-gray-500 border border-gray-500 rounded-3xl cursor-pointer text-center peer-checked:border-gray-600 peer-checked:text-white peer-checked:bg-gray-600 peer-checked:opacity-100"
    >{content}</motion.label>
}

function App() {
    const validateAnswer = () => {
        if (selectedNote === currentNote.title && fretNumber === currentNote.location.fret) {
            nextQuestion();
            setCorrectAnswer(true);
        } else {
            setWrongAnswer(true);
        }
    };

    const nextQuestion = () => {
        setSelectedNote(null);
        setFretNumber(null);
        setWrongAnswer(false);
        setCurrentNote(getRandomNote());
    }

    const [currentNote, setCurrentNote] = useState(getRandomNote);
    const [selectedNote, setSelectedNote] = useState<string | null>(null);
    const [fretNumber, setFretNumber] = useState<string | null>(null);
    const [wrongAnswer, setWrongAnswer] = useState<boolean>(false);
    const [correctAnswer, setCorrectAnswer] = useState<boolean>(false);

    useEffect(() => {
        let timer : number;
        if (correctAnswer) {
            timer = setTimeout(() => {
                setCorrectAnswer(false);
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [correctAnswer]);

    useEffect(() => {
        if (selectedNote != null && fretNumber != null) {
            validateAnswer();
        }
    }, [selectedNote, fretNumber]);

    return (
        <div className={'container mx-auto p-5'}>

            <div className={'border border-gray-400 p-5 flex justify-between items-center rounded-3xl mb-5'}>

                <div className={'text-3xl text-gray-900 font-extrabold leading-none'}>guitar fret wizard</div>

                {/*<div className={'text-xl text-gray-700 font-extrabold leading-none'}>open</div>*/}

                {/*<MenuIcon/>*/}
                {/*<CloseIcon/>*/}

            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1 border border-gray-400 p-10 rounded-3xl justify-center flex flex-col">
                    <img
                        className={'block'}
                        src={currentNote.image}
                        alt={currentNote.id}/>

                    {/*<div className={'flex justify-between'}>*/}

                    {/*    <div>*/}
                    {/*        <div>Correct</div>*/}
                    {/*    </div>*/}

                    {/*    <div>*/}
                    {/*        <div>Wrong</div>*/}
                    {/*    </div>*/}

                    {/*    <div>*/}
                    {/*        <div>Percent</div>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
                <div className="col-span-3 md:col-span-2 border border-gray-400 p-10 rounded-3xl">

                    <h3 className="text-xl text-gray-900 font-extrabold">pick note</h3>
                    <form className="mt-5 flex flex-wrap gap-2">
                        {["A", "B", "C", "D", "E", "F", "G"].map((note) => (
                            <div key={note}>
                                <input
                                    type="radio"
                                    id={note}
                                    name="note"
                                    value={note}
                                    checked={selectedNote === note}
                                    onChange={(e) => setSelectedNote(e.target.value)}
                                    className="hidden peer"
                                />
                                <RadioLabel htmlFor={note}
                                            content={note}/>
                            </div>
                        ))}
                    </form>

                    <h2 className="mt-10 text-xl text-gray-900 font-extrabold">pick <span
                        className={'text-red-800'}>{toOrdinal(currentNote.location.string)}</span> string fret</h2>

                    <form className="mt-5 flex flex-wrap gap-2">
                        {[...Array(13).keys()]
                            .map((num) => num.toString())
                            .map((num) => (
                                <div key={num}>
                                    <input
                                        type="radio"
                                        id={`fret-${num}`}
                                        name="fret"
                                        value={num}
                                        checked={fretNumber === num}
                                        onChange={(e) => setFretNumber(e.target.value)}
                                        className="hidden peer"
                                    />
                                    <RadioLabel htmlFor={`fret-${num}`}
                                                content={num}/>
                                </div>
                            ))}
                    </form>

                    {wrongAnswer &&
                        <motion.div
                            initial={{opacity: 0, scale: 0.95}} // Start slightly smaller
                            animate={{opacity: 1, scale: 1}}  // Smoothly scale up
                            exit={{opacity: 0, scale: 0.95}}  // Fade out subtly
                            transition={{
                                duration: 0.5,
                                ease: "easeOut", // Makes opacity change feel more natural
                                scale: {type: "spring", stiffness: 200, damping: 20, bounce: 0.2},
                            }}
                            className={'border border-gray-400 p-5 flex gap-2 justify-between rounded-2xl mt-5 font-extrabold text-lg'}>
                            <div>try again</div>

                            <div>
                                <button className={'underline text-gray-600 hover:text-black cursor-pointer'}
                                        onClick={nextQuestion}
                                >or go next
                                </button>
                            </div>
                        </motion.div>
                    }

                    {correctAnswer && <motion.div
                        initial={{opacity: 0, scale: 0.95}} // Start slightly smaller
                        animate={{opacity: 1, scale: 1}}  // Smoothly scale up
                        exit={{opacity: 0, scale: 0.95}}  // Fade out subtly
                        transition={{
                            duration: 0.5,
                            ease: "easeOut", // Makes opacity change feel more natural
                            scale: {type: "spring", stiffness: 200, damping: 20, bounce: 0.2},
                        }}

                        className={'border border-gray-400 p-5 flex gap-2 justify-between rounded-2xl mt-5 font-extrabold text-lg'}>
                        <div>correct</div>

                        {/*<div>*/}
                        {/*    <button className={'underline text-gray-600 hover:text-black cursor-pointer'}*/}
                        {/*            onClick={nextQuestion}*/}
                        {/*    >or go next</button>*/}
                        {/*</div>*/}
                    </motion.div>}

                    {/*<div className={' p-5 text-center mt-5 rounded-3xl text-xl font-extrabold text-white bg-teal-500'}>{JSON.stringify(currentNote)}</div>*/}
                </div>
            </div>
        </div>
    )
}

export default App
