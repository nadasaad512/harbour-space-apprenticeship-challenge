export default function TestimonialCard({ testimonial }) {

return (

<div
style={{
position:"relative",
flexShrink:0,
width:"800px"
}}
>


<div

style={{
position:"relative",
zIndex:1,
width:"800px",
height:"459.92px",
border:"1px solid #DADADA",
boxSizing:"border-box",
backgroundColor:"#FFFFFF",
overflow:"hidden"
}}

>


<div

className="flex items-center"

style={{
position:"absolute",
top:"39.31px",
left:"41px",
gap:"16px"
}}

>


<img

src={testimonial.avatar}

alt={testimonial.name}

className="avatar-pulse"

draggable={false}

style={{
width:"80px",
height:"78.6px",
borderRadius:"50%",
objectFit:"cover",
pointerEvents:"none"
}}

/>



<div>


<p

style={{
fontWeight:500,
fontSize:"16px",
lineHeight:"24px",
color:"#535353",
margin:0
}}

>

{testimonial.name}

</p>



<p

style={{
fontWeight:300,
fontSize:"16px",
lineHeight:"24px",
color:"#535353",
margin:0
}}

>

{testimonial.role}

</p>


</div>



</div>





<img

src="/link.svg"

alt="LinkedIn"

style={{
position:"absolute",
top:"39px",
right:"41px",
width:"30px",
height:"30px"
}}

/>




<div

style={{
position:"absolute",
top:"148.39px",
left:0,
width:"798px",
height:"310.54px",
backgroundColor:"#FBFBFB",
padding:"10px 40px 31px",
display:"flex",
flexDirection:"column"
}}

>



<p

style={{
width:"561px",
fontWeight:300,
fontSize:"26px",
lineHeight:"35px",
color:"#6A6A6A",
margin:0
}}

>

{testimonial.quote}

</p>



<div style={{flex:1}} />



<p

style={{
width:"212px",
fontWeight:300,
fontSize:"16px",
lineHeight:"24px",
color:"#535353",
margin:0
}}

>

{testimonial.education}

</p>


</div>


</div>


</div>


)

}