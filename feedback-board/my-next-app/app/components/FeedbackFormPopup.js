
import Button from "./Button"


export default function FeedbackFormPopup(){
    return <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-80 flex md:items-center">
      <div className="w-full">
       <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg overflow-hidden">
         <h2 className="py-4 text-center border-b">
            Make a suggestion
         </h2>
         <form className="p-8">
            <label className="block mt-4 mb-1 text-slate-700">
               Title
            </label>
            <input className="w-full border p-2 rounded-md" type="text" placeholder="A short, descriptive title"/>
            <label className="block mt-4 mb-2">Details</label>
            <textarea className="w-full border" placeholder="Place include any details"></textarea>
            <Button>Attach files</Button>
            <Button primary>Create Post</Button>
         </form>
       </div>
       </div>
    </div>
}