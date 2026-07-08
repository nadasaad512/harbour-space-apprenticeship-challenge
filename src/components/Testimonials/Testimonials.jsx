import { useRef, useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";
import { DEFAULT_TESTIMONIALS } from "./DataTestimonials";


export default function Testimonials({ data }) {


  const testimonials =
    Array.isArray(data?.testimonials) &&
    data.testimonials.length > 0
      ? data.testimonials
      : DEFAULT_TESTIMONIALS;



  const CARD_GAP = 41;
  const CARD_WIDTH = 800;
  const CARD_STEP = CARD_WIDTH + CARD_GAP;



  const containerRef = useRef(null);
  const pillRef = useRef(null);


  const [isDragging, setIsDragging] = useState(false);
  const [sidePad, setSidePad] = useState(0);



  const initialIndex =
    testimonials.length > 2 ? 1 : 0;



  const drag = useRef({
    startX: 0,
    scrollLeftStart: 0,
    moved: false,
  });



  const velocityRef = useRef(0);

  const lastMoveRef = useRef({
    x: 0,
    t: 0,
  });



  const activeIndexRef =
    useRef(initialIndex);



  const snapFrame = useRef(null);

  const idleTimeout = useRef(null);





  const stopSnapAnim = () => {

    if (snapFrame.current) {

      cancelAnimationFrame(
        snapFrame.current
      );

      snapFrame.current = null;

    }

  };





  const measureAndCenter = () => {

    const el = containerRef.current;

    if (!el) return;



    const pad =
      Math.max(
        (el.clientWidth - CARD_WIDTH) / 2,
        0
      );



    setSidePad(pad);



    requestAnimationFrame(() => {

      if (containerRef.current) {

        containerRef.current.scrollLeft =
          activeIndexRef.current *
          CARD_STEP;

      }

    });


  };





  useEffect(() => {


    measureAndCenter();


    window.addEventListener(
      "resize",
      measureAndCenter
    );



    return () => {


      window.removeEventListener(
        "resize",
        measureAndCenter
      );


      stopSnapAnim();



      if (idleTimeout.current) {

        clearTimeout(
          idleTimeout.current
        );

      }


    };


  }, []);







  const animateScrollTo = (
    target,
    duration = 320
  ) => {


    const el =
      containerRef.current;


    if (!el) return;



    stopSnapAnim();



    const start =
      el.scrollLeft;


    const distance =
      target - start;



    const startTime =
      performance.now();




    const easeOutCubic = (t) =>
      1 - Math.pow(1 - t, 3);




    const step = (now) => {


      const elapsed =
        now - startTime;



      const t =
        Math.min(
          elapsed / duration,
          1
        );



      el.scrollLeft =
        start +
        distance *
        easeOutCubic(t);




      if (t < 1) {

        snapFrame.current =
          requestAnimationFrame(step);


      } else {

        snapFrame.current = null;

      }


    };



    snapFrame.current =
      requestAnimationFrame(step);


  };







  const snapToIndex = (index) => {


    const clamped =
      Math.min(
        Math.max(index, 0),
        testimonials.length - 1
      );



    activeIndexRef.current =
      clamped;



    animateScrollTo(
      clamped * CARD_STEP
    );


  };








  const handleMouseMove = (e) => {


    if (!containerRef.current)
      return;



    const rect =
      containerRef.current
      .getBoundingClientRect();



    const x =
      e.clientX - rect.left;


    const y =
      e.clientY - rect.top;





    if (pillRef.current) {


      pillRef.current.style.opacity =
        "0.9";



      pillRef.current.style.transform =
        `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${isDragging ? 0.9 : 1})`;

    }






    if (idleTimeout.current)
      clearTimeout(idleTimeout.current);




    if (!isDragging) {


      idleTimeout.current =
        setTimeout(() => {


          if (pillRef.current)

            pillRef.current.style.opacity =
              "0";


        },400);


    }






    if (isDragging) {


      const now =
        performance.now();



      const walk =
        e.clientX -
        drag.current.startX;




      if (Math.abs(walk) > 3)

        drag.current.moved = true;




      containerRef.current.scrollLeft =
        drag.current.scrollLeftStart -
        walk;






      const dt =
        now -
        lastMoveRef.current.t;



      if (dt > 0) {


        const dx =
          e.clientX -
          lastMoveRef.current.x;



        velocityRef.current =
          velocityRef.current * 0.7 +
          (dx / dt) * 0.3;


      }



      lastMoveRef.current = {
        x:e.clientX,
        t:now
      };

    }


  };








  const resolveDragEnd = () => {


    const el =
      containerRef.current;



    if (!el) return;



    const deltaScroll =
      el.scrollLeft -
      drag.current.scrollLeftStart;



    const DRAG_FRACTION = 0.15;

    const FLICK_VELOCITY = 0.35;




    let steps =
      Math.round(
        deltaScroll / CARD_STEP
      );




    if (steps === 0) {


      const draggedEnough =
        Math.abs(deltaScroll) >
        CARD_STEP * DRAG_FRACTION;



      const flicked =
        Math.abs(velocityRef.current) >
        FLICK_VELOCITY;



      if (draggedEnough) {


        steps =
          Math.sign(deltaScroll);



      } else if (flicked) {


        steps =
          -Math.sign(
            velocityRef.current
          );


      }

    }



    snapToIndex(
      activeIndexRef.current + steps
    );


  };







  const handleMouseLeave = () => {


    if (idleTimeout.current)

      clearTimeout(
        idleTimeout.current
      );



    if (pillRef.current)

      pillRef.current.style.opacity =
        "0";



    if (isDragging) {


      setIsDragging(false);

      resolveDragEnd();

    }


  };








  const handleMouseDown = (e) => {


    if (!containerRef.current)
      return;



    e.preventDefault();



    stopSnapAnim();



    setIsDragging(true);



    velocityRef.current = 0;




    drag.current = {

      startX:e.clientX,

      scrollLeftStart:
        containerRef.current.scrollLeft,

      moved:false,

    };




    lastMoveRef.current = {

      x:e.clientX,

      t:performance.now(),

    };


  };






  const handleMouseUp = () => {


    if (!isDragging)
      return;



    setIsDragging(false);



    resolveDragEnd();


  };








return (

<section
className="
bg-white
px-12
py-20
"
style={{
paddingTop:"110px"
}}
>


<div
className="max-w-7xl mx-auto"
style={{
position:"relative"
}}
>



<img

src="/bg_rectangular.svg"

alt=""

draggable={false}

style={{

position:"absolute",

top:"10px",

left:"50%",

transform:"translateX(-50%)",

width:"1120px",

height:"394.074px",

zIndex:0,

pointerEvents:"none"

}}

/>





<div

ref={containerRef}

className="testimonial-scroll"

onMouseMove={handleMouseMove}

onMouseLeave={handleMouseLeave}

onMouseDown={handleMouseDown}

onMouseUp={handleMouseUp}


style={{

position:"relative",

overflowX:"auto",

overflowY:"visible",

cursor:
isDragging
?
"grabbing"
:
"grab",


userSelect:
isDragging
?
"none"
:
"auto",


paddingTop:"110px",

marginTop:"-110px",

}}

>



<div

className="flex items-start"

style={{

gap:`${CARD_GAP}px`,

width:"max-content",

paddingLeft:`${sidePad}px`,

paddingRight:`${sidePad}px`

}}

>


{
testimonials.map(
(testimonial,index)=>(

<TestimonialCard

key={index}

testimonial={testimonial}

/>

)
)
}



</div>


</div>






<div

ref={pillRef}

style={{

position:"absolute",

top:0,

left:0,

transform:
"translate(-50%, -50%) scale(1)",

width:"117px",

height:"57px",

borderRadius:"29px",

opacity:0,

backgroundColor:"#685DC5",

display:"flex",

alignItems:"center",

justifyContent:"center",

pointerEvents:"none",

zIndex:5,

transition:
"opacity 150ms ease-out, scale 150ms ease-out",

willChange:"transform"

}}

>


<span

style={{

fontWeight:500,

fontSize:"18px",

color:"#FFFFFF",

letterSpacing:"-0.18px"

}}

>

Drag

</span>


</div>



</div>



</section>

);


}