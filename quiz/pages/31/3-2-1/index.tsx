import LazyLoad from "react-lazy-load";

const MyComponent = () => (
  <div>
    Scroll to load images.
    <div className="filler" />
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <LazyLoad height={500} width={500} offsetVertical={300}>
      <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={500} width={500} offsetTop={200}>
      <img src="http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg" />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad height={500} width={500} offsetHorizontal={50}>
      <img src="http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif" />
    </LazyLoad>
    <div className="filler" />
    <LazyLoad
      height={500}
      width={500}
      onContentVisible={() => console.log("look ma I have been lazyloaded!")}
    >
      <img src="http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg" />
    </LazyLoad>
    <div className="filler" />
  </div>
);

export default MyComponent;
