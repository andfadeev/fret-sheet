import {useEffect, useState} from 'react'
import E2 from './assets/E2.svg'
import F2 from './assets/F2.svg'
import './App.css'
import { motion } from "motion/react"


// E2 to E3: Open 6th string (E2) to 12th fret 6th string (E3)
// A2 to A3: Open 5th string (A2) to 12th fret 5th string (A3)
// D3 to D4: Open 4th string (D3) to 12th fret 4th string (D4)
// G3 to G4: Open 3rd string (G3) to 12th fret 3rd string (G4)
// B3 to B4: Open 2nd string (B3) to 12th fret 2nd string (B4)
// E4 to E5 (or E6): Open 1st string (E4) to around 19th-24th fret (E6 if available)

const guitarNotes = [
    { id: "E2", image: E2, title: "E", locations: [{ string: "6", fret: "0" }] },
    { id: "F2", image: F2, title: "F", locations: [{ string: "6", fret: "1" }] },
    // { title: "A", locations: [{ string: "6", fret: "5" }, { string: "5", fret: "0" }] },
    // { title: "D", locations: [{ string: "5", fret: "5" }, { string: "4", fret: "0" }] },
    // { title: "G", locations: [{ string: "3", fret: "0" }] },
    // { title: "B", locations: [{ string: "2", fret: "0" }] },
    // { title: "E", locations: [{ string: "1", fret: "0" }] }
];

const getRandomNote = () => {
    const randomNote = guitarNotes[Math.floor(Math.random() * guitarNotes.length)];
    const randomLocation = randomNote.locations[Math.floor(Math.random() * randomNote.locations.length)];
    return { ...randomNote, location: randomLocation };
};

type RadioLabelProps = {
    htmlFor: string;
    content: string;
};


function RadioLabel({htmlFor, content}: RadioLabelProps) {
    return <motion.label htmlFor={htmlFor}
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="opacity-75 hover:opacity-100 block items-center justify-between p-5 text-gray-500 border border-gray-500 rounded-3xl cursor-pointer text-center peer-checked:border-gray-600 peer-checked:text-white peer-checked:bg-gray-600 peer-checked:opacity-100"
    >{content}</motion.label>
}

function App() {
    const validateAnswer = () => {
        if (selectedNote === currentNote.title && fretNumber === currentNote.location.fret) {
            nextQuestion();
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
    const [selectedNote, setSelectedNote] = useState(null);
    const [fretNumber, setFretNumber] = useState(null);
    const [wrongAnswer, setWrongAnswer] = useState(false);

    useEffect(() => {
        if (selectedNote != null && fretNumber != null) {
            validateAnswer();
        }
    }, [selectedNote, fretNumber]);

    return (
        <div className={'container mx-auto p-5'}>

            <div className={'border border-gray-400 p-5 flex justify-between rounded-3xl mb-5'}>

                <div className={'text-3xl text-gray-900 font-extrabold'}>guitar fret wizard</div>
                {/*<div>^</div>*/}

            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1 border border-gray-400 flex justify-center p-10 rounded-3xl">
                    <img src={currentNote.image}
                         alt={currentNote.id}/>
                </div>
                <div className="col-span-3 md:col-span-2 border border-gray-400 p-10 rounded-3xl">

                    <h3 className="text-xl text-gray-900 font-extrabold">pick note</h3>
                    <form className="mt-5 flex flex-wrap gap-2">
                        {["A", "B", "C", "D", "E", "F", "G"].map((note) => (
                            <div key={note} >
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

                    <h2 className="mt-10 text-xl text-gray-900 font-extrabold">pick {currentNote.location.string}th string fret</h2>

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
                        <div className={'border border-gray-400 p-5 flex gap-2 justify-between rounded-2xl mt-5 font-extrabold text-lg'}>
                            <div>try again</div>

                            <div>
                                <button className={'underline text-gray-600 hover:text-black cursor-pointer'}
                                        onClick={nextQuestion}
                                >or go next</button>
                            </div>
                        </div>
                    }

                    {/*<div className={' p-5 text-center mt-5 rounded-3xl text-xl font-extrabold text-white bg-teal-500'}>{JSON.stringify(currentNote)}</div>*/}
                </div>
            </div>
      </div>
  )
}

export default App
