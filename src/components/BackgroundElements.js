export default function BackgroundElements() {
 return (
  <>
   <div className="background-elements">
    <div className="mask-left">
     <div className="mask-left__line">
      <div className="mask-left__line-element"></div>
     </div>
    </div>

    <div className="mask-right"></div>

    <div className="snake">
     <div className="snake__flex-container">
      <div className="snake__element-1">
       <div className="snake__blank-1"></div>
      </div>
      <div className="snake__element-2">
       <div className="snake__blank-2">
        <div className="snake__shadow"></div>
       </div>
      </div>
      <div className="snake__element-3">
       <div className="snake__blank-3"></div>
      </div>
     </div>
    </div>

    <div className="spinner">
     <div className="spinner__spinner-element"></div>
     <div className="spinner__blank"></div>
    </div>
   </div>
  </>
 );
}
