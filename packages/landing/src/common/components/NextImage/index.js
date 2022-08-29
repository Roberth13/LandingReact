const NextImage = () => {
  return (
    <>
      <script src="https://fast.wistia.com/embed/medias/ux6ahuak0p.jsonp" async></script>
      <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
      <div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
          <div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0,width: '100%'}}>
              <div className="wistia_embed wistia_async_ux6ahuak0p videoFoam=true" style={{height: '100%', position: 'relative', width: '100%'}}>
                <div className="wistia_swatch" style={{height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%'}}>
                  <img src={`https://fast.wistia.com/embed/medias/ux6ahuak0p/swatch`} style={{ filter: 'blur(5px)', height: '100%', 'object-fit': 'contain', width: '100%'}} alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default NextImage;
