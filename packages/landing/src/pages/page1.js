import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import Footer from 'containers/App/Footer';
import Navbar from 'containers/App/Navbar';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import ResetCSS from 'common/assets/css/style';
import { page1Theme } from 'common/theme/page1';
import {
  GlobalStyle,
  Page1Wrapper,
  ContentWrapper,
} from 'containers/Page1/page1.style';

const Page1 = () => {
	return(
		<ThemeProvider theme={page1Theme}>
			<Fragment>
				<Head>
		          <title>Interior | A react next landing page</title>
		          <meta name="theme-color" content="#171717" />
		          <meta name="description" content="React next landing page" />
		          <meta
		            name="keywords"
		            content="React, React js, Next, Next js, Gatsby, Gatsby Js, Fast Landing, Modren Landing"
		          />
		          <link href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
		            rel="stylesheet"
		          ></link>
		          <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
		            rel="stylesheet"
		          />
		        </Head>
	        <ResetCSS />
	        <GlobalStyle />
	        <Page1Wrapper>
		        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
		            <DrawerProvider>
		              <Navbar />
		            </DrawerProvider>
	            </Sticky>
                <ContentWrapper>
                	{/* Content */}
	        	   <h1>PRUEBA</h1>
	        	</ContentWrapper>
	        	<Footer />
	        </Page1Wrapper>
			</Fragment>
		</ThemeProvider>
	)
}

export default Page1;