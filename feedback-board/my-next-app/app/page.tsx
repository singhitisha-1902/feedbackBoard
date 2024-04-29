'use client';

import Button from "@/app/components/Button"
import {useState} from "react";
import FeedbackItem from "@/app/components/Feedback";
import FeedbackFormPopup from "@/app/components/feedbackFormPopup"

export default function Home() {
  const [showFeedbackPopup, setShowFeedbackPopup]= useState(false);
   function openFeedbackPopup(){
           setShowFeedbackPopup(true);
   }


  return (
   <main className="bg-white max-w-2xl mx-auto shadow-lg md:rounded-lg md:mt-8 overflow-hidden">
<div className="bg-gradient-to-r from-cyan-500 to-blue-400 p-8" >
  <h1 className="font-bold text-xl">
    Anonymous Itisha
  </h1>
  <p className="text-opacity-90 text-slate-700">
    Help me decide what should I build next or how can I improve
  </p>
</div >

<div className="bg-gray-100 px-8 py-2 flex border-b">
  <div className="grow">

  </div>
  <div>
   <Button primary onClick={openFeedbackPopup}>
  Make a suggestion
  </Button>

</div>
</div>
<div className="px-8">
 <FeedbackItem/>
 <FeedbackItem/>
 <FeedbackItem/>
 <FeedbackItem/>
 <FeedbackItem/>
 <FeedbackItem/>
 <FeedbackItem/>

 

</div>

{showFeedbackPopup && (
<FeedbackFormPopup/>
)}
   </main>
  )
}
