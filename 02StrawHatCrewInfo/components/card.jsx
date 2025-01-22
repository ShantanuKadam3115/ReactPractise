import React from "react";

function Card(props){
    const payload = props.payload
    console.log(payload)
    return(
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-5  ">
            <img className="w-24  rounded-full mx-auto" src={payload.pic} alt="" width="384" height="512"/>
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        {payload.quote}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                         {payload.name}
                    </div>
                    <div>
                        {payload.role}, StrawHats
                    </div>
                </figcaption>
            </div>
        </figure>
    )
    
}

export default Card