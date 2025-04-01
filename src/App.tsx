import {useEffect, useState} from 'react'
import note1 from './assets/note1.svg'
import './App.css'
import { motion } from "motion/react"
import { toast } from "react-hot-toast";


const data = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]


const frets = [
    {
        image: note1,
        title: "A",
        titleAlternative: "la",
        locations: [
            {
                string: 6,
                fret: 5
            },
            {
                string: 5,
                fret: 0
            },
        ]
    },
    {
        "image": "note5",
        "title": "B2",
        "titleAlternative": "si",
        "locations": [
            { "string": 6, "fret": 7 },
            { "string": 5, "fret": 2 }
        ]
    },
]

const guitarNotes = [
    { title: "E", locations: [{ string: "6", fret: "0" }] },
    { title: "A", locations: [{ string: "6", fret: "5" }, { string: "5", fret: "0" }] },
    { title: "D", locations: [{ string: "5", fret: "5" }, { string: "4", fret: "0" }] },
    { title: "G", locations: [{ string: "3", fret: "0" }] },
    { title: "B", locations: [{ string: "2", fret: "0" }] },
    { title: "E", locations: [{ string: "1", fret: "0" }] }
];


// function getRandomNote(notes) {
//     if (!notes || notes.length === 0) return null;
//
//     // Pick a random note from the list
//     const randomNote = notes[Math.floor(Math.random() * notes.length)];
//
//     // Pick a random location from the selected note
//     const randomLocation = randomNote.locations[Math.floor(Math.random() * randomNote.locations.length)];
//
//     return {
//         image: randomNote.image,
//         title: randomNote.title,
//         titleAlternative: randomNote.titleAlternative,
//         ... randomLocation
//     };
// }

const getRandomNote = () => {
    const randomNote = guitarNotes[Math.floor(Math.random() * guitarNotes.length)];
    const randomLocation = randomNote.locations[Math.floor(Math.random() * randomNote.locations.length)];
    return { ...randomNote, location: randomLocation };
};



type NoteAnswerProps = {
    note: string;
};

function NoteAnswer({ note }: NoteAnswerProps) {
    return <li>
        <input type="radio"
               id={note}
               name="hosting"
               value="hosting-small"
               className="hidden peer" required/>
        <label htmlFor={note}
               className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">{note}</div>
            </div>
        </label>
    </li>
}

function App() {
    // const [msg, setMsg] = useState(data[0])
    // const [note, setNote] = useState(getRandomNote(frets))

    const validateAnswer = () => {
        console.log("in validate")
        // if (selectedNote === currentNote.title && fretNumber === currentNote.location.fret) {
        if (true) {
            toast.success("Correct! Next question...");
            setSelectedNote(null);
            setFretNumber(null);
            setCurrentNote(getRandomNote());
        } else {
            toast.error("Incorrect! Try again.");
        }
    };

    const [currentNote, setCurrentNote] = useState(getRandomNote);
    const [selectedNote, setSelectedNote] = useState(null);
    const [fretNumber, setFretNumber] = useState(null);

    useEffect(() => {
        console.log("IN use effect" + selectedNote + " " + fretNumber)
        if (selectedNote != null && fretNumber != null) {
            validateAnswer();
        }
    }, [selectedNote, fretNumber]);

    // const handleClick = () => {
    //     setNote(getRandomNote(frets));
    // };

    return (
        <div className={'container mx-auto p-5'}>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1 border border-gray-400 flex justify-center p-10 rounded-3xl">
                    <img src={note1} alt="Music Note"/>
                </div>
                <div className="col-span-3 md:col-span-2 border border-gray-400 p-10 rounded-3xl">
                    <h3 className="text-xl text-gray-900 font-extrabold">pick note</h3>
                    {/*<ul className="mt-5 flex gap-2">*/}

                    {/*    <NoteAnswer note={'A'}/>*/}
                    {/*    <NoteAnswer note={'B'}/>*/}
                    {/*    <NoteAnswer note={'C'}/>*/}
                    {/*    <NoteAnswer note={'D'}/>*/}
                    {/*    <NoteAnswer note={'E'}/>*/}
                    {/*    <NoteAnswer note={'F'}/>*/}
                    {/*    <NoteAnswer note={'G'}/>*/}


                    {/*</ul>*/}

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
                                <label htmlFor={note}
                                       className = "block items-center justify-between p-5 text-gray-500 border border-gray-500 rounded-3xl cursor-pointer hover:text-gray-600 hover:bg-gray-100 text-center peer-checked:border-blue-600 peer-checked:text-blue-600"


                                >{note}</label>
                            </div>
                        ))}
                    </form>

                    <h2 className="mt-10 text-xl text-gray-900 font-extrabold">pick 6th string fret</h2>

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
                                    <label htmlFor={`fret-${num}`}


                                           className = "block items-center justify-between p-5 text-gray-500 border border-gray-500 rounded-3xl cursor-pointer hover:text-gray-600 hover:bg-gray-100 text-center peer-checked:border-blue-600 peer-checked:text-blue-600">{num}</label>
                                </div>
                            ))}
                    </form>

                    {/*<ul className="gap-2 flex flex-wrap mt-5">*/}

                    {/*    {Array.from({ length: 13 }, (_, i) => (*/}
                    {/*        <li className={"items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 text-center"} key={i}>{i}</li>*/}
                    {/*    ))}*/}

                    {/*</ul>*/}

                    {/*<div>*/}
                    {/*    <motion.button*/}
                    {/*        // onClick={handleClick}*/}
                    {/*        className="mt-10 inline-flex items-center justify-center h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"*/}
                    {/*        whileHover={{ scale: 1.05 }}*/}
                    {/*        whileTap={{ scale: 0.95 }}>Submit</motion.button>*/}
                    {/*</div>*/}

                    {/*<div className={" mt-10 mb-10 p-5 rounded-2xl"}>{JSON.stringify(currentNote)}</div>*/}
                    {/*<div className={" mt-10 mb-10 p-5 rounded-2xl"}>*/}
                    {/*    NOte: {selectedNote} Fret: {fretNumber}*/}
                    {/*</div>*/}



                    {/*<form className="mt-4">*/}
                    {/*    {[...Array(13).keys()]*/}
                    {/*        .map((num) => num.toString())*/}
                    {/*        .map((num) => (*/}
                    {/*        <div key={num} className="inline-flex items-center space-x-2 mr-2">*/}
                    {/*            <input*/}
                    {/*                type="radio"*/}
                    {/*                id={`fret-${num}`}*/}
                    {/*                name="fret"*/}
                    {/*                value={num}*/}
                    {/*                checked={fretNumber === num}*/}
                    {/*                onChange={(e) => setFretNumber(e.target.value)}*/}
                    {/*            />*/}
                    {/*            <label htmlFor={`fret-${num}`}>{num}</label>*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</form>*/}

                </div>


            </div>




            {/*<motion.div*/}
            {/*    key={msg}*/}
            {/*    initial={{ scale: 0 }} animate={{ scale: 1 }}  className={'border border-white mt-10 mb-10 rounded-xl text-white p-5'}>{msg}*/}
            {/*</motion.div>*/}




      </div>
  )
}

export default App
