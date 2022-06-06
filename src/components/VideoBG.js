import v1 from '../img/main.mp4';

const VideoBG = ({}) => {
  return (
    <div className="bg__video">
      <video className="bg__video__content" autoPlay loop muted>
        <source src={v1} type="video/mp4" />
        Your browser is not supported!!
      </video>
    </div>
  );
};
export default VideoBG;
