import GoogleLogo from 'common/assets/image/saasAppDark/google-icon.jpg';
import LoginImage from 'common/assets/image/saasAppDark/loginImage3.jpg';
import LogoImage from 'common/assets/image/saasAppDark/logo1.jpg';
import { useRouter } from 'next/router'
// import TabContent from 'rc-tabs/lib/TabContent';
// import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from 'common/components/Box';
import Button from 'common/components/Button';
import CheckBox from 'common/components/Checkbox/index';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Input from 'common/components/Input';
import Text from 'common/components/Text';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import React, { Fragment, useState } from 'react';
import LoginModalWrapper from './loginModal.style';
import { toast } from 'react-toastify';



const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
  signin,
  signup,
  closeComponent,
  auth,
}) => {
  const router = useRouter()
 
  const [ formData, setFormData ] = useState({
    email: '',
    password: ''
  })

  const onClickLogin = async() => {
    // const res = await signin(formData)
    closeComponent();
    toast.success('Succssfully Logged In!');
  //   console.log("Auth user :", auth.login({
  //     "email": "admin@materialize.com",
  //     "password": "admin",
  //     "rememberMe": true
  // },()=>console.log('Error in  onClickLogin login -------><-------')));
    auth.login({
      "email": "admin@materialize.com",
      "password": "admin",
      "rememberMe": true
  },()=>console.log('Error in  onClickLogin login -------><-------'));

    // router.push('/main')
    // window.localStorage.setItem('userData','{"id":1,"role":"admin","fullName":"John Doe","username":"johndoe","email":"admin@materialize.com"}');
    // window.location.href = '/';
  }
  const onClickSignup = async() => {
    const res = await signup(formData)
    closeComponent();
  }
  const onChangeEmailText = (email) => {
    setFormData(v=>({
      ...v,
      email
    }))    
  }
  const onChangePasswordText = (password) => {
    setFormData(v=>({
      ...v,
      password
    }))
  }

  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle}   onClick={onClickLogin} />
      <Button
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="REGISTER" {...btnStyle} onClick={onClickSignup}/>
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image
            className="patternImage"
            src={LoginImage?.src}
            alt="Login Banner"
          />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            {/* <Image src={LogoImage?.src} {...logoStyle} alt="Logo" /> */}
            <Tabs
              defaultActiveKey="loginForm"
              animated={{ tabPane: true }}
              // renderTabBar={() => <ScrollableInkTabBar />}
              // renderTabContent={() => <TabContent />}
            >
              <TabPane tab="LOGIN" key="loginForm">
                <Heading content="Welcome Folk" {...titleStyle} />
                <Text
                  content="Welcome to Mate Family. Please login with your personal account information letter."
                  {...descriptionStyle}
                />
                <Button
                  icon={<Image src={GoogleLogo?.src} alt="Google Icon" />}
                  title="Sign in with Google"
                  iconPosition="left"
                  className="google-login__btn"                
                  {...googleButtonStyle}
                />
                <Input value={formData.email.toString()} inputType="email" isMaterial label="Email Address" onChange={onChangeEmailText}/>
                <Input value={formData.password} inputType="password" isMaterial label="Password" onChange={onChangePasswordText} />
                <CheckBox
                  id="remember"
                  htmlFor="remember"
                  labelText="Remember Me"
                />
                <div>
                  <LoginButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="REGISTER" key="registerForm">
                <Heading content="Welcome Folk" {...titleStyle} />
                <Text
                  content="Welcome to SwiftPeek Family. Please login with your personal account information letter."
                  {...descriptionStyle}
                />
                <Button
                  icon={<Image src={GoogleLogo?.src} alt="Google Icon" />}
                  title="Sign up with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                  // onClick={onClickLogin}
                />
                {/* <Input isMaterial label="Full Name" /> */}
                <Input value={formData.email.toString()} inputType="email" isMaterial label="Email Address" onChange={onChangeEmailText}/>
                <Input value={formData.password.toString()} inputType="password" isMaterial label="Password" onChange={onChangePasswordText} />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,
  signin: PropTypes.func,
  signup: PropTypes.func,
  closeComponent: PropTypes.func, 
};
// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '40px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84',
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48',
  }
};

export default LoginModal;
