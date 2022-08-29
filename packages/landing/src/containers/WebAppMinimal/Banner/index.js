import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Section, {
  Pattern,
  BannerContentWrapper,
  BannerContent,
  Figure
} from './banner.style';
import dashboard from 'common/assets/image/webAppMinimal/dashboard.png';

const Banner = () => {
  return (
    <Section id="home">
      <Pattern />
      <Container width="1400px">
        <BannerContentWrapper>
          <BannerContent>
            <Heading
              className="animate__animated animate__fadeInUp"
              content="The leading Customer dashboard for your daily workspace"
            />
            <Text
              className="animate__animated animate__fadeInUp"
              content="Join 30,000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data."
            />
          </BannerContent>
          {/* <div className="animate__animated animate__fadeInUp animate__fast">
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
          </div> */}
          <Figure className="animate__animated animate__fadeInUp animate__fast">
            <NextImage />
          </Figure>
        </BannerContentWrapper>
      </Container>
    </Section>
  );
};

export default Banner;
