import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {
  const [title, Settitle] = useState('')
  const [subtitle, Setsubtitle] = useState('')
  const [cards, setCards] = useState([])


  const submitHandler = (e) => {

    e.preventDefault();
    if (!title.trim() || !subtitle.trim()) {
      alert("Fill content. You cannot add blank notes.");
      return;
    }
    let Copycards = [...cards]

    Copycards.push({
      title: title.trim(),
      subtitle: subtitle.trim()
    });
    setCards(Copycards)

    console.log("Form is submitted by", title, subtitle)
    Settitle("")
    Setsubtitle("")

  }
  const deleteCard = (index) => {
    const updatedCards = [...cards]
    updatedCards.splice(index, 1)
    setCards(updatedCards)
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-stretch justify-center p-6 gap-3 ">
      <form onSubmit={submitHandler} action="" className="flex items-center justify-center w-1/2 flex-col gap-5 bg-orange-100 rounded-2xl">
        {/* For title */}
        <input
          value={title}
          onChange={(e) => (Settitle(e.target.value))}
          className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500" type="text" placeholder="Write the notes" />
        {/* For subtitle */}
        <input
          value={subtitle}
          onChange={(e) => (Setsubtitle(e.target.value))}
          className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                          focus:border-blue-500" type="text" name="" placeholder="Write the description" />
        <button className=" w-2/3 pt-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200">Add EPCPROMAN notes</button>
      </form>

      <div className="bg-gray-900 w-1/2 rounded-2xl py-4" >
        <h3 className="text-white text-center">Your EPCPROMAN Notes</h3>
        <div className="flex flex-wrap gap-5 p-4 items-start justify-start">
          {cards.map((elem, index) => {

            return (
              <div
                key={index}
                className=" relative group w-40 h-52 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg  overflow-x-auto overflow-y-auto" >
                <button
                  type="button"
                  onClick={() => deleteCard(index)}
                  className="absolute top-2 right-2 rounded-full bg-red-600 text-white cursor-pointer active:scale-90"
                >
                  <X size={18} strokeWidth={0.75} />
                </button>
                <h3 className="mb-1 my-1 text-xl font-semibold text-gray-900 leading-tight">{elem.title}</h3>
                <p className="text-sm leading-6 text-gray-500   break-words">{elem.subtitle}</p>
              </div>)

          })}


          {/* <div className="h-52 w-32 rounded-2xl bg-white"></div>
            <div className="h-52 w-32 rounded-2xl bg-white"></div>
            <div className="h-52 w-32 rounded-2xl bg-white"></div>
            <div className="h-52 w-32 rounded-2xl bg-white"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
