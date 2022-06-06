import v1 from '../img/main.mp4';

const VideoBG = ({}) => {
  return (
    <div className="bg_video">
      <video className="content" autoPlay loop muted>
        <source src={v1} type="video/mp4" />
        Your browser is not supported!!
      </video>
    </div>
  );
};
export default VideoBG;
