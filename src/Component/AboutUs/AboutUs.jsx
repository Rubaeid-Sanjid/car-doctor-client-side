import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div className="hero min-h-screen container mx-auto px-3 lg:px-12">
  <div className="hero-content flex-col lg:flex-row">
    <div className="relative flex w-1/2">
    <img src={img1} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={img2} className="rounded-lg shadow-2xl absolute left-72 top-1/2 w-1/2 border-8 border-white" />
    </div>
    <div className="w-1/2">
        <h3 className="text-[#FF3811] text-xl font-bold">About Us</h3>
      <h1 className="text-3xl lg:text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn bg-[#FF3811] text-white">Get More Info</button>
    </div>
  </div>
</div>
  );
};

export default AboutUs;
