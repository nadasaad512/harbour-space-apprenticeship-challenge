import { useState, useEffect } from "react";


function Field({ label, value, align = "left" }) {

  return (

    <div
      className={`
        flex
        flex-col
        gap-1
        ${align === "right" ? "items-end" : "items-start"}
      `}
    >

      <span
        className="
          font-medium
          text-[16px]
          leading-6
          tracking-[-0.15px]
          text-[#535353]
          whitespace-nowrap
        "
      >
        {label}
      </span>


      <span
        className="
          font-light
          text-[16px]
          leading-6
          tracking-[-0.16px]
          text-[#535353]
          whitespace-nowrap
        "
      >
        {value}
      </span>


    </div>

  );
}





function CountdownField({ deadline }) {


  const getRemaining = () => {

    const diff = Math.max(
      0,
      deadline.getTime() - Date.now()
    );


    const totalMinutes = Math.floor(diff / 60000);


    const days = Math.floor(
      totalMinutes / (60 * 24)
    );


    const hours = Math.floor(
      (totalMinutes % (60 * 24)) / 60
    );


    const minutes =
      totalMinutes % 60;


    return {
      days,
      hours,
      minutes
    };

  };



  const [remaining,setRemaining] =
    useState(getRemaining);



  useEffect(()=>{


    const id = setInterval(()=>{

      setRemaining(getRemaining());

    },60000);



    return ()=>clearInterval(id);


  },[deadline]);




  return (

    <div
      className="
        flex
        flex-col
        gap-1
        items-end
      "
    >


      <span
        className="
          font-medium
          text-[16px]
          leading-6
          tracking-[-0.15px]
          text-[#535353]
          whitespace-nowrap
        "
      >
        Application closes in
      </span>



      <span
        className="
          flex
          gap-[6px]
          font-light
          text-[16px]
          leading-6
          tracking-[-0.16px]
          text-[#535353]
          whitespace-nowrap
        "
      >

        {remaining.days} Day

        <span className="text-[#DADADA]">
          :
        </span>


        {remaining.hours} Hrs


        <span className="text-[#DADADA]">
          :
        </span>


        {remaining.minutes} Min


      </span>


    </div>

  );


}






export default function BottomStickyBar(){


const deadline =
new Date(
  Date.now() +
  (6 * 24 * 60 + 22 * 60 + 56)
  *
  60000
);



return (


<div
className="
w-full
bg-white
border-t
border-[#E5E5E5]
"
>


<div

className="
max-w-[1440px]
mx-auto
min-h-[86px]
px-10
py-5
flex
items-center
justify-between
gap-6
"


>


{/* Program Name */}

<div
className="
flex
flex-col
gap-1
"
>


<span

className="
font-semibold
text-[18px]
leading-6
tracking-[-0.15px]
text-[#2B2B2B]
whitespace-nowrap
"

>

Zeptolab

</span>



<span

className="
font-light
text-[16px]
leading-6
tracking-[-0.16px]
text-[#959595]
whitespace-nowrap
"

>

Marketing Performance

</span>



</div>





<Field
label="Location"
value="Bangkok"
/>



<Field
label="Duration"
value="1 Year Full-Time"
/>




<Field
label="Start date"
value="3 Aug 2020"
/>




<Field
label="Application deadline"
value="30 June 2020"
/>




<CountdownField
deadline={deadline}
/>



</div>


</div>


);


}