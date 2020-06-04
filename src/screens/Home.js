import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import skyline from '../assets/skyline.jpg'
import computer from '../assets/computer.jpg'
import { 
  Cables,
  ContactDrawer,
} from '../shared/components'
import {
  Card,
  Row,
  Col,
  Typography,
  Button,
} from 'antd'

import {
  StockOutlined,
  ProjectOutlined,
  FormatPainterOutlined,
  GithubOutlined,
  LinkedinOutlined
} from '@ant-design/icons'

  const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 1000,
  };

  const servicesStyle = {
    width: 240, 
    height: 140, 
    textAlign: 'center'
 }
  
class Home extends Component {
    render() {
        const { Title, Paragraph } = Typography

        return <>
          <Cables />
          <Parallax
            bgImage={computer}
            strength={200}
          >
            <div id='services' style={{ height: 800 }}>
              <Row style={{ height: '100%' }} justify='space-around' align='middle'>
                  <Col>
                    <Card title={<><ProjectOutlined /> Develop</>} style={{width:'100%'}}>
                      <Card.Grid style={servicesStyle}>Everything you need to design, build, and grow any idea into a software solution</Card.Grid>
                      <Card.Grid style={servicesStyle}>Experience in building applications for healthcare, finance, cybersecurity, big data, and more</Card.Grid>
                    </Card>
                  </Col>
                  <Col>
                    <Card title={<><FormatPainterOutlined /> Create</>} >
                      <Card.Grid style={servicesStyle}>Expert product management, application architecture, and coding knowledge</Card.Grid>
                      <Card.Grid style={servicesStyle}>Track progress in real-time as your project becomes a reality</Card.Grid>
                    </Card>
                  </Col>
                  <Col>
                    <Card title={<><StockOutlined /> Scale</>}>
                      <Card.Grid style={servicesStyle}>Extensive experience with data modeling, data engineering, and large-scale data analysis</Card.Grid>
                      <Card.Grid style={servicesStyle}>Long-term planning to ensure each project handles exponential user growth </Card.Grid>
                    </Card>
                  </Col>
              </Row>
            </div>

          </Parallax>
          <Parallax bgImage={''} strength={900}>
            <div id='about' style={{ height: 800 }}>
              <div style={insideStyles}>
              <Title>
                About Andrew Colello
              </Title>
<Paragraph>
I started my career as a data intern at a software compliance / cybersecurity company called Black Duck Software, 
where I eventually grew into a full-time and then a leadership role for my team. My job was to write scripts that 
scour the internet daily for data on open source software, and parse it into a series of databases for use in 
identification/matching algorithms. Customers would upload their application code into Black Duck's product, 
which then scanned and matched it against our  existing dataset and reported any "hits" for detected security 
or compliance issues. I worked with data at an extremely large scale (tens of millions of rows daily, tens of 
billions of rows in each database) which was a great way to learn efficient and comprehensive coding practices. 
</Paragraph>
<Paragraph>
I left after Black Duck's acquisition in late 2017 for a digital agency
 called ADK Group, where I designed dozens of data models and backend APIs for use in custom mobile
  and web applications that spanned health care, finance, manufacturing, and more. There, I wrote a 
  Python framework that aided in the creation of new health care applications by reading user input 
  on initial project creation, and then generating code and schema information based on those inputs. 
  This framework was implemented across multiple health care applications at ADK and greatly reduced the total 
  amount of development time for rolling out new projects. Still, I missed having the ability to control the projects I 
  worked on - and I missed working on large scale data - so I took a look at the job market around May 2019, where I 
  found Neighborly.
</Paragraph>
<Paragraph>
At Neighborly, I was fortunate enough to meet a host of brilliant people while we tried to upend the entire municipal bond 
market. There, I became familiar with all the cutting edge data engineering tools that all the  "Silicon Valley Fintech" 
companies use, while learning from some of the most gifted people I've ever met. Although we failed in our mission, 
I am quite grateful to have been along for the ride, however short it was.
</Paragraph>
<Paragraph>
After Neighborly's demise (and encountering my second job hunt within a year), I was looking for something a bit more 
stable but still wanted to make a positive impact with my work. I met with Boston Children's Hospital the day after 
I was furloughed in October, and had a signed offer about a week and a half later. Here, I have been able to introduce 
some of those cutting edge data tools to my team and grow my skills in application development. I have been involved 
with cancer research, large-scale biomedical specimen data analysis, and have recently been pulled into a few COVID 
research projects as well. 
</Paragraph>
<Paragraph>
I live in downtown Boston, and grew up in the suburbs about a half hour drive north of Boston. I went to college in upstate 
New York, at a small hockey school called Union College where I got my Computer Science degree. 
In my free time, I've been learning the drumset and catching up on old-school cartoons. 
</Paragraph>            
              </div>
            </div>
          </Parallax>
          <Parallax bgImage={skyline} strength={900}>
          <div style={{height: 400}}> 
          <Row style={{ height: '100%' }} justify='space-around' align='middle'>
            <div className='copyright'>©2020 Recursion Labs LLC {
              <>
              <Button style={{color: 'black', borderColor: 'black' }} ghost={true} icon={<LinkedinOutlined />}
              onClick={() => window.open('https://www.linkedin.com/in/andrew-colello-4b58b1b7/')}
              />
              <Button style={{color: 'black', borderColor: 'black', marginLeft: 3}} ghost={true} icon={<GithubOutlined />}
               onClick={() => window.open('https://www.github.com/colelloa')}
              />
              </>
            }</div>
          </Row>
          </div>
          </Parallax>
          <ContactDrawer />
        </>
    }
}

export default Home