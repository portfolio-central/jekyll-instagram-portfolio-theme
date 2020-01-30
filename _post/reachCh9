

#### 컴포넌트 스타일링 방식

1. 일반 css

2. Sass

   자주 사용되는 CSS 전처리기 중 하나로 확장된 CSS 문법 사용

3. Css Module

   CSS 클래스가 다른 CSS 클래스의 이름과 절대 충돌하지 않도록 파일마다 고유한 이름을 자동으로 생성해 주는 옵션

4. Styled-components

   JS 파일에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 해줌.

#### 일반 CSS

가장 일반적인 방식

##### 주의사항

1. CSS 클래스를 중복되지 않게 할 것

   - 이름을 지을 때 특별한 규칙 사용

     1) 컴포넌트 이름 - 클래스 형태로 짓기 ex) App-header

     2) BEM 네이밍 

     ​	이름을 지을 때 규칙을 준수하여 해당 클래스가 어떤 용도로 사용되는지 명확하게 작성하는 방식 ex) .card_title-primary

   - CSS Selector 사용

     CSS 클래스가 특정 클래스 내부에 있는 경우에만 스타일 적용 가능

     ~~~react
     *App.js*
     <div className="App">
       <header>
       	<img src={logo} className="logo"/>
       </header>
     </div>
       
     *App.css*
     .App .logo{
       height:40vmin;
     }
     ~~~

      최상위 html 컴포넌트의 이름으로 클래스 이름을 짓고(: .App), 그 내부에서 소문자를 입력하거나(:.logo) header와 같은 태그를 사용하여 클래스 이름이 불필요한 경우에는 아예 생략 가능

#### Sass 사용하기

Sass는 CSS 전처리기로 복잡한 작업을 쉽게, 스타일 코드의 재활용성과 가독성을 높여 유지보수를 쉽게 해주는 방식

- .sass

~~~scss
$front-stack:Helvetica, sans-serif
$primary-color : #333
  
body
  font: 100% $font-stack
  color: $primary-color
~~~

- .scss

~~~scss
$front-stack:Helvetica, sans-serif;
$primary-color : #333;
  
 body{
  font: 100% $font-stack;
  color: $primary-color;
 }
~~~

utils : 여러 파일에서 사용될 수 있는 Saas 변수 및 믹스인은 다른 파일로 따로 분리하여 작성한 뒤 필요한 곳에서 쉽게 불러와 사용 가능

~~~scss
@import './styles/utils';
.SassComponent{
  display:flex;
  .box {
    background:red;
  }
}
~~~

#### CSS Module

CSS를 불러와서 사용할 때 클래스 이름을 고유한 값 **[파일이름]_[클래스이름]__[해시값]** 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 방지해주는 기술

- CSS module이 적용된 스타일 파일을 불러오면, CSS Module에서 사용한 클래스 이름과 해당 이름을 고유화한 값이 키-값 형태로 들어있음

~~~js
import styles from './CSSModule.module.css';
const CSSModule = () =>{
  console.log(styles) //{wrapper:"CSSModule_wrapper_1SbdQ"}
  return (
  <div className = {styles.wrapper}>
    안녕하세요. 저는 <span className ="something"> CSS Module! </span> 
	</div>);
};
~~~

~~~css
/* CSSModule.module.css -> 코드를 scss 스타일로 변경하면 scss 도 CSSModule 과 사용가능*/
.wrapper {
  background:black;
  padding:1rem;
}
.inverted{
  color:black;
}
:global .something{
  font-weight:800;
  color:aqua;
}
~~~

- CSSModule을 사용한 클래스 이름 두 개 이상을 적용할 때

~~~js
<div className={`${styles.wrapper} ${styles.inverted}`}/>
~~~

~~~Js
className ={[styles.wrapper,styles.inverted].join(' ')}
~~~

###### 템플릿 리터럴 

ES6 문법으로 문자열 안에 자바스크립트 레퍼런스를 넣어주는 역할로 <` > 문자는 백틱 문자로 칭함

##### classnames

CSS  클래스를 조건부로 설정할 때 매우 유용한 라이브러리

~~~react
const MyComponent = ({highlighted, theme})=>(
  <div className={classNames('MyComponent',{highlighted},theme)>Hello</div>);
~~~

- highlighed 값이 true이면 highlighted 클래스가 적용, false 이면 theme 적용

bind 함수 : 사전에 미리 styles 함수를 받아주는 함수로 cx('클래스이름1','클래스이름2') 형태로 사용 가능하게 해줌

~~~react
import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const cx = classNames.bind(styles);
const CSSModule = () =>{
  return (<div className={cx('wrapper','inverted')}>
  	안녕하세요, 저는 <span className="something">CSS Module!</span>
  </div>);
};
~~~

#### style-components (CSS-in-JS)

자바스크립트 파일 안에 스타일을 선언하는 방식

- 자바스크립트 파일 하나에 스타일까지 작성해, 다른 확장자(css/scss)를 가진 스타일 파일을 따로 만들지 않아도 됨.

- **Props 값으로 전달해 주는 값**을 쉽게 스타일에 적용할 수 있음

  

  ~~~react
  <Button>안녕하세요</Button>
  <Button inverted={true}>테두리만</Button>
  ~~~

~~~react
//StyledComponent.js
import styled,{css} from 'styled-components';
const Box = styled.div`
	background: ${props => props.color || 'blue'};
	padding:1rem;`;

const Button = styled.button`
	background:white;
	&:hober{
		background:rgba(255,255,255,0.9);
	}
${props=>
		props.inverted &&
    css`
			background:none;
			&:hover {
				background:white;
			}
	`};
	&+ button{
		margin-left:1rem;
}
`;

const StyledComponent = ()=>(
	<Box color = "black">
  	<Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);
	
~~~

​	1) 스타일 코드 여러 줄을 props에 따라 넣어주어야 할 때는 CSS를 styled-components에서 불러와야함.  하지만,				          CSS를 사용하지 않고 바로 문자열에 넣어도됨.

~~~react
${props=>
		props.inverted &&
    ` background:none;
			&:hover {
				background:white;
			}
	`};
~~~

​	2) Props를 참조한다면 반드시 CSS로 감싸 주어서 Tagged 템플릿 리터럴 사용해야 함.

​	3) 조건부 스타일링을 할 때 넣는 여러 줄의 코드에서 props를 참조하지 않는다면 CSS 불러와서 사용안해도 됨.

###### Tagged 템플릿 리터럴

` 을 사용하여 만든 문자열에 스타일 정보를 넣어주는 문법

- 템플릿 안에 자바스크립트 객체나 함수를 전달할 때 온전히 추출할 수 있음

~~~css
`hello ${{foo:'bar'}} ${()=>'world'}!`
/*  결과 : hello [object Object]() => 'world'!  */
~~~

~~~css
function tagged(...args){
  console.log(args);
}
tagged`hello ${{foo:'bar'}} ${()=>'world'}!`

/* 결과 [Array(3)]
	0 : (3) ["hello ", " ", "!"]
	1 : {foo:"bar"}
	2 : () => 'world' */
~~~

###### 스타일링된 엘리먼트

styled-components를 사용할 때  styled.태그명을 사용하여 구현. Styled.div 뒤에 Tagged 템플릿 리터럴 문법을 통해 스타일을 넣어주면 해당 스타일이 적용된 div로 이루어진 리액트 컴포넌트가 생성됨. => <MyComponent>Hello </myComponent> 형태로 사용 가능

~~~react
import styled from 'styled-components';
const MyComponent = styled.div`
	font-size:2rem;
`;
~~~

- 사용해야 할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링해주고 싶을 경우.

~~~react
// 태그의 타입을 styled 함수의 인자로 전달
cosnt MyInput = styled('input')`
	background: gray;
`
// 컴포넌트 형식의 값을 넣어줌
const StyledLink = styled(Link)`
	color:blue;
`
~~~

###### 반응형 디자인

브라우저의 가로 크기에 따라 다른 스타일을 적용하기 위해서 일반 CSS에서 사용하듯이 media 쿼리 사용.

컴포넌트마다 반복하는 불편함을 줄이기 위해 함수화하여 간편하게 사용하기도 함

~~~react
import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  background: ${props => props.color || "blue"};
  padding: 1rem;

  ${media.desktop`width:768px;`}
  ${media.tablet`width:100%`};
`;

const Button = styled.button`
  background: white;
  color: black;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${props =>
    props.inverted &&
    css`
      background: none;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledCompoenent = () => (
  <Box color="black">
    <Button> 안녕하세요 </Button>
    <Button inverted={true}>테두리만</Button>
  </Box>
);
export default StyledCompoenent;

~~~





##### 참고

yarn eject 실패시

https://liante0904.tistory.com/176

리액트 설정 변화

https://velog.io/@velopert/react-component-styling





