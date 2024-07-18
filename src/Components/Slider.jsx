import React,{useState,useEffect} from "react";

const Slider=()=>
{
    const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286965.jpg?size=626&ext=jpg",
    "https://img.freepik.com/premium-photo/business-people-collaboration-planning-computer-office-with-documents-editing-review-feedback-portrait-manager-editor-man-woman-laptop-copywriting-advice_590464-276463.jpg?size=626&ext=jpg",
    "https://img.freepik.com/premium-photo/young-couple-agent-lawyer-meeting-office-house-agreement-document-deal-contract-real-estate-investment_565246-3463.jpg?size=626&ext=jpg&ga=GA1.1.692097156.1721291571&semt=ais_user",
    "https://img.freepik.com/free-photo/business-meeting-office_23-2147626525.jpg?size=626&ext=jpg"
    
    

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 2 minutes = 120000 milliseconds

    return () => clearInterval(intervalId);
  }, [slides.length]);
  
    return(
        <>
        <div className="container mx-auto">
        <div id="fullpage">
          <div className="section">
            <div className="slide">
              <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full h-[550px] " />
            </div>
          </div>
        </div>
      </div>
        </>
    )
};

export default Slider;